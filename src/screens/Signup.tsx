import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Add validation, API call, etc.
    if (!email.includes('@')) return setError('Invalid email format');
    if (pwd.length < 6) return setError('Password too short');
    if (pwd !== pwd2) return setError('Passwords do not match');
    setError('');
    navigate('/subdomain');
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: '3rem auto' }}>
      <h2>Sign Up</h2>
      <label>Email</label>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <label>Password</label>
      <input type="password" value={pwd} onChange={e => setPwd(e.target.value)} required />
      <label>Confirm Password</label>
      <input type="password" value={pwd2} onChange={e => setPwd2(e.target.value)} required />
      {/* TODO: Add optional profile fields */}
      <div>
        <input type="checkbox" required /> I agree to the <a href="/tos">Terms of Service</a> & <a href="/privacy">Privacy Policy</a>
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Sign Up</button>
      <div style={{ marginTop: 12 }}>
        <Link to="/login">Already have an account? Log In</Link>
      </div>
    </form>
  );
}