import { useNavigate } from 'react-router-dom';

export default function ConfigureAutomation() {
  const navigate = useNavigate();
  // TODO: Replace with automation config state/logic
  return (
    <form style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h2>Configure Automation</h2>
      <label>Trigger</label>
      <select>
        <option>Site form submission</option>
        <option>New user signup</option>
        <option>Page visit</option>
      </select>
      <label>Target Site/Page</label>
      <input placeholder="Select site or form" />
      <label>Email Subject Line</label>
      <input placeholder="Welcome to my site!" />
      <label>Email Body</label>
      <textarea placeholder="Edit your welcome email..."></textarea>
      <label>Delay</label>
      <select>
        <option>Immediately</option>
        <option>1 hour later</option>
        <option>1 day later</option>
      </select>
      {/* TODO: Add AI template generator, error state */}
      <button type="button" onClick={() => navigate('/automations/review')}>Save & Review</button>
    </form>
  );
}