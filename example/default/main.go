package main

import (
	"context"

	"m7s.live/m7s/v5"
	_ "m7s.live/m7s/v5/plugin/debug"
	_ "m7s.live/m7s/v5/plugin/hdl"
	_ "m7s.live/m7s/v5/plugin/webrtc"
	_ "m7s.live/m7s/v5/plugin/rtmp"
	_ "m7s.live/m7s/v5/plugin/logrotate"
	_ "m7s.live/m7s/v5/plugin/console"
)

func main() {
	// ctx, _ := context.WithDeadline(context.Background(), time.Now().Add(time.Second*100))
	m7s.Run(context.Background(), "config.yaml")
}