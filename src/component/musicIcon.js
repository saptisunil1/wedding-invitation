export default function MusicIcon({ isPlaying, toggleMusic }) {
  return (
    <div className="music-icon" onClick={toggleMusic}>
      {isPlaying ? "🔊" : "🎵"}
    </div>
  );
}