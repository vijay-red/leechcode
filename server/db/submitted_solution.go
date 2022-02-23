package db

import (
	"time"

	"gorm.io/gorm"
)

type SubmittedSolution struct {
	gorm.Model `json:"-"`
	Solution   string    `json:"solution"`
	CreatedAt  time.Time `sql:"DEFAULT:current_timestamp" json:"created_at"`
	UpdatedAt  time.Time `sql:"DEFAULT:current_timestamp" json:"updated_at"`
}
