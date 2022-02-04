package db

import (
	"github.com/lib/pq"
	"gorm.io/gorm"
)

type TestCase struct {
	gorm.Model
	ProblemId int            `json:"problem_id" gorm:"foreignKey:Problem"`
	Stdin     string         `json:"stdin"`
	Args      pq.StringArray `json:"args" gorm:"type:text[]"`
}
