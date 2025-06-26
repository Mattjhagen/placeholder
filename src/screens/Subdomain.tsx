import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Subdomain() {
  const [sub, setSub] = useState('');
  const [available, setAvailable] = useState<boolean|null>(null);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function checkAvailability() {
    setChecking(true);
    setError('');
    // TODO: Replace with actual async check
    setTimeout(() => {
      if (sub.toLowerCase() === 'taken') {
        setAvailable(false);
        setError('This subdomain is taken.');
      } else {
        setAvailable(true);
        setError('');
      }
      setChecking(false);
    }, 600);
  }

  function handleNext(e: React.FormEvent) {
    e.preventDefault();
    if (!sub) return setError('Please enter a subdomain.');
    if (available) navigate('/tutorial');
    else setError('Subdomain not available.');
  }

  return (
    <form onSubmit={handleNext} style={{ maxWidth: 400, margin: '3rem auto' }}>
      <h2>Choose Your Subdomain</h2>
      <div>
        <input
          value={sub}
          onChange={e => {setSub(e.target.value); setAvailable(null);}}
          placeholder="somethingcool"
          required
        />.vibecode.app
        <button type="button" onClick={checkAvailability} disabled={checking || !sub}>Check Availability</button>
      </div>
      {available === true && <span style={{ color: 'green' }}>Available!</span>}
      {available === false && <span style={{ color: 'red' }}>{error}</span>}
      <button type="submit" disabled={!available}>Next</button>
    </form>
  );
}