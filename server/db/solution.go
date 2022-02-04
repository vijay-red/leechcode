package db

import (
	"time"

	"gorm.io/gorm"
)

type Solution struct {
	gorm.Model
	UserId    string    `json:"user_id" gorm:"foreignKey:ID;references:User;"`
	ProblemId string    `json:"problem_id"`
	Solution  string    `json:"solution"`
	CreatedAt time.Time `sql:"DEFAULT:current_timestamp" json:"created_at"`
	UpdatedAt time.Time `sql:"DEFAULT:current_timestamp" json:"updated_at"`
}
