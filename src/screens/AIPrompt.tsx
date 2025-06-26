import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AIPrompt() {
  const [prompt, setPrompt] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!prompt) return setError('Please describe your site idea.');
    setError('');
    // TODO: Pass prompt to backend, etc.
    navigate('/ai-processing');
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '3rem auto', textAlign: 'center' }}>
      <h2>What kind of site do you want to build?</h2>
      <textarea
        style={{ width: '100%', height: 80, fontSize: 16 }}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        placeholder="e.g. An online portfolio for my art"
      />
      {/* TODO: Add microphone input */}
      {error && <div style={{ color: 'red', margin: 8 }}>{error}</div>}
      <button type="submit" style={{ marginTop: 12 }}>Generate Site</button>
    </form>
  );
}