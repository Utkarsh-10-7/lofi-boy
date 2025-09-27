import React, { useEffect, useState } from 'react';
import UploadForm from './UploadForm';
import MusicPlayer from './MusicPlayer';

function App() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/tracks')
      .then(res => res.json())
      .then(data => setTracks(data));
  }, []);

  const handleUpload = () => {
    fetch('http://localhost:4000/tracks')
      .then(res => res.json())
      .then(data => setTracks(data));
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: 30 }}>
      <h1>Lofi Boy Music Uploader</h1>
      <UploadForm onUpload={handleUpload} />
      <div>
        <h2>Uploaded Tracks</h2>
        {tracks.map((track, idx) => (
          <MusicPlayer key={idx} src={track.url} title={track.name} />
        ))}
      </div>
    </div>
  );
}

export default App;