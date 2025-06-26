import { Link } from 'react-router-dom';

export default function Dashboard() {
  // TODO: Replace with actual user/session/site data
  const sites = [];

  return (
    <div>
      <h2>Welcome to VibeCode!</h2>
      {sites.length === 0 ? (
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <p>Your dashboard is empty.</p>
          <Link to="/ai-prompt">
            <button>Create Your First Site</button>
          </Link>
          <p style={{ marginTop: 16, fontStyle: 'italic' }}>
            "The secret of getting ahead is getting started." – Mark Twain
          </p>
        </div>
      ) : (
        <div>
          {/* TODO: Show user's sites, automations, etc. */}
        </div>
      )}
    </div>
  );
}