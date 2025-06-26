import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    title: 'Create a Page',
    desc: 'Click "Create Site" to start building.',
  },
  {
    title: 'AI Prompt',
    desc: 'Describe your idea, and let AI do the rest!',
  },
  {
    title: 'Publish',
    desc: 'One click and your site goes live.',
  },
];

export default function OnboardingTutorial() {
  const [idx, setIdx] = useState(0);
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: 400, margin: '3rem auto', textAlign: 'center' }}>
      <h2>{slides[idx].title}</h2>
      <p>{slides[idx].desc}</p>
      {/* TODO: Add visuals/animation */}
      <div>
        <button disabled={idx === 0} onClick={() => setIdx(i => i - 1)}>Back</button>
        <span style={{ margin: '0 1em' }}>{idx + 1}/{slides.length}</span>
        {idx < slides.length - 1 ? (
          <button onClick={() => setIdx(i => i + 1)}>Next</button>
        ) : (
          <button onClick={() => navigate('/dashboard')}>Finish</button>
        )}
        <button style={{ marginLeft: '1em' }} onClick={() => navigate('/dashboard')}>Skip Tutorial</button>
      </div>
    </div>
  );
}