import React, { useState, useEffect } from 'react';

function AudioPlayer() {
  const [audioSrc, setAudioSrc] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch('https://drive.google.com/file/d/1Xx4-6PoC48H7gHalDodEHDoARo9L04F7/view?usp=sharing');
        if (!response.ok) {
          throw new Error(`Failed to fetch audio: ${response.statusText}`);
        }
        const blob = await response.blob();
        const audioUrl = URL.createObjectURL(blob);
        setAudioSrc(audioUrl);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchAudio();
  }, []);

  return (
    <div>
      {audioSrc && (
        <audio controls>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {error && <p>Error fetching audio: {error}</p>}
    </div>
  );
}

export default AudioPlayer;