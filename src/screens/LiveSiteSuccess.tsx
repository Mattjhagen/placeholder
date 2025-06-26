import { Link } from 'react-router-dom';

export default function LiveSiteSuccess() {
  // TODO: Replace with real site URL
  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <h2>Your site is live!</h2>
      <a href="https://yourname.vibecode.app" target="_blank" rel="noopener noreferrer">https://yourname.vibecode.app</a>
      <div style={{ margin: '1em 0' }}>
        {/* TODO: Add social share buttons */}
      </div>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}