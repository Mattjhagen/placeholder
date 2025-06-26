import { Link } from 'react-router-dom';

export default function Automations() {
  // TODO: Replace with real automations data
  const automations = [];

  return (
    <div>
      <h2>Automations</h2>
      <Link to="/automations/choose">
        <button>Add Automation</button>
      </Link>
      {automations.length === 0 ? (
        <p style={{ marginTop: 20 }}>You haven’t set up any automations yet.</p>
      ) : (
        <div>
          {/* TODO: List automations, statuses, edit/pause/delete options */}
        </div>
      )}
    </div>
  );
}