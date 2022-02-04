package db

import "gorm.io/gorm"

type User struct {
	gorm.Model      `json:"-"`
	ID              uint   `gorm:"primaryKey"`
	Username        string `json:"username"`
	Hased_password  string `json:"hashed_password"`
	Problems_solved int64  `json:"problems_solved"`
}
