import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <section style={{ maxWidth: 600, margin: '4rem auto', textAlign: 'center' }}>
      {/* Hero Section */}
      <h1>Build Your Website, Effortlessly, with AI.</h1>
      <p>VibeCode helps you launch a stunning site—no code, no hassle, free subdomain.</p>
      <Link to="/signup">
        <button style={{ fontSize: 20, padding: '1em 2em', margin: '2rem 0' }}>Start Building for Free</button>
      </Link>
      {/* TODO: Add testimonials, video, feature highlights */}
    </section>
  );
}