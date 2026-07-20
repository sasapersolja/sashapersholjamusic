import RadioPlayer from "../components/RadioPlayer";

export default function HomePage() {
  return (
    <div className="home-shell">
      <RadioPlayer />
      <section className="about-radio" aria-label="About the station">
        <p className="eyebrow">INDEPENDENT MUSIC</p>
        <h2>A direct line from the studio to you.</h2>
        <p>
          Explore Sasha Persholja&apos;s music through a dedicated online station,
          created for uninterrupted listening on desktop and mobile.
        </p>
        <div className="feature-grid">
          <div><strong>24/7</strong><span>Ready for AutoDJ</span></div>
          <div><strong>Live</strong><span>Compatible with OBS</span></div>
          <div><strong>Original</strong><span>Artist-owned catalogue</span></div>
        </div>
      </section>
    </div>
  );
}
