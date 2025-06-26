import { useNavigate } from 'react-router-dom';

export default function ReviewAutomation() {
  const navigate = useNavigate();
  // TODO: Replace with real automation summary/config
  return (
    <div style={{ maxWidth: 500, margin: '2rem auto' }}>
      <h2>Review & Activate Automation</h2>
      <div style={{ background: '#f4f4f4', padding: 18, borderRadius: 8, marginBottom: 18 }}>
        <strong>When:</strong> Form submitted on 'My Recovery Site'<br/>
        <strong>Do:</strong> Send welcome email after 1 hour
      </div>
      <label>
        <input type="checkbox" /> Enable Automation
      </label>
      <div style={{ margin: '1em 0' }}>
        <button onClick={() => navigate('/automations/configure')}>Edit Automation</button>
        <button style={{ marginLeft: '1em' }} onClick={() => navigate('/automations')}>Activate Automation</button>
      </div>
    </div>
  );
}