"use client";

import { useEffect, useRef, useState } from "react";

const streamUrl = process.env.NEXT_PUBLIC_RADIO_STREAM_URL ?? "";

export default function RadioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [status, setStatus] = useState(streamUrl ? "Ready" : "Stream not configured");

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio || !streamUrl) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        setStatus("Paused");
      } else {
        setStatus("Connecting…");
        await audio.play();
        setIsPlaying(true);
        setStatus("Live now");
      }
    } catch {
      setIsPlaying(false);
      setStatus("Unable to connect");
    }
  }

  return (
    <section className="radio-card" id="radio" aria-labelledby="radio-title">
      <div className="live-badge"><span aria-hidden="true" /> Internet Radio</div>
      <p className="eyebrow">SASHA PERSHOLJA</p>
      <h1 id="radio-title">Original music, broadcasting live.</h1>
      <p className="radio-intro">
        A continuous stream of original releases, selected recordings and live sessions.
      </p>

      <div className="now-playing" aria-live="polite">
        <div className="album-art" aria-hidden="true">SP</div>
        <div>
          <span>Now playing</span>
          <strong>{status}</strong>
        </div>
      </div>

      <div className="player-controls">
        <button
          type="button"
          className="play-button"
          onClick={togglePlayback}
          disabled={!streamUrl}
          aria-label={isPlaying ? "Pause radio" : "Play radio"}
        >
          {isPlaying ? "Pause" : "Listen live"}
        </button>

        <label className="volume-control">
          <span>Volume</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={(event) => setVolume(Number(event.target.value))}
          />
        </label>
      </div>

      {!streamUrl && (
        <p className="setup-note">
          Add <code>NEXT_PUBLIC_RADIO_STREAM_URL</code> to enable the live player.
        </p>
      )}

      <audio
        ref={audioRef}
        src={streamUrl || undefined}
        preload="none"
        onPlaying={() => setStatus("Live now")}
        onWaiting={() => setStatus("Buffering…")}
        onError={() => {
          setIsPlaying(false);
          setStatus("Stream offline");
        }}
      />
    </section>
  );
}
