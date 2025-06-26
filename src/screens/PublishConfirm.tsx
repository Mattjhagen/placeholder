import { useNavigate } from 'react-router-dom';

export default function PublishConfirm() {
  const navigate = useNavigate();
  // TODO: Replace with real subdomain/custom domain data
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'center' }}>
      <h2>Ready to Publish?</h2>
      <p>Your site will be live at <strong>yourname.vibecode.app</strong></p>
      {/* TODO: Add custom domain, gallery checkbox, share link, etc. */}
      <button style={{ margin: '1em 0' }} onClick={() => navigate('/live-success')}>Confirm Publish</button>
      <div>
        <input type="checkbox" id="gallery" />
        <label htmlFor="gallery"> Make my site discoverable on VibeCode's public gallery</label>
      </div>
    </div>
  );
}