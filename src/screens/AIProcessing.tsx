import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AIProcessing() {
  const navigate = useNavigate();

  useEffect(() => {
    // TODO: Replace with real AI generation status
    const timeout = setTimeout(() => {
      navigate('/site-editor');
    }, 2100);
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: 80 }}>
      <div className="spinner" style={{
        width: 60, height: 60, border: '5px solid #ccc', borderTop: '5px solid #36c', borderRadius: '50%', margin: '0 auto', animation: 'spin 1.2s linear infinite'
      }} />
      <p style={{ marginTop: 24, fontSize: 20 }}>Our AI is crafting your masterpiece. This might take a moment!</p>
      {/* TODO: Add loading bar, fun facts, etc. */}
    </div>
  );
}