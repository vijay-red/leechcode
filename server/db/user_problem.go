package db

import "gorm.io/gorm"

type User_Problem_Solutions struct {
	gorm.Model `json:"-"`
	User_ID    uint                 `gorm:"foreignKey:ID;references:User;primaryKey;autoIncrement:false;not null" json:"user_id"`
	Problem_ID uint                 `gorm:"foreignKey:ID;references:Problem;primaryKey;autoIncrement:false;not null" json:"problem_id"`
	Solution   []Submitted_Solution `json:"solution"`
}
