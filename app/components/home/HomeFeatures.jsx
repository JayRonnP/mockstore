/**
 * Trust & service highlights for the bike parts landing page
 */
export function HomeFeatures() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Dispatch',
      description: 'Same-day dispatch on all in-stock parts and accessories.',
    },
    {
      icon: '🔧',
      title: 'Workshop Tested',
      description: 'Tested and verified by experienced bike mechanics.',
    },
    {
      icon: '🛡️',
      title: 'Genuine Guarantee',
      description: '100% authentic components direct from official brands.',
    },
    {
      icon: '🔄',
      title: 'Easy Returns',
      description: '30-day hassle-free returns for unused parts.',
    },
  ];

  return (
    <section className="landing-features">
      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <span className="feature-icon" aria-hidden="true">
              {feature.icon}
            </span>
            <div className="feature-copy">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

