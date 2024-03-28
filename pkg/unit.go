package pkg

import (
	"context"
	"log/slog"
)

type Unit struct {
	*slog.Logger            `json:"-" yaml:"-"`
	context.Context         `json:"-" yaml:"-"`
	context.CancelCauseFunc `json:"-" yaml:"-"`
}

func (unit *Unit) IsStopped() bool {
	select {
	case <-unit.Done():
		return true
	default:
	}
	return false
}

func (unit *Unit) Stop(err error) {
	unit.Info("stop", "reason", err.Error())
	unit.CancelCauseFunc(err)
}
