const steps = [
  {
    number: "01",
    label: "DISCOVER",
    title: "Find the signal",
    body: "Surface trending cashtags, tokens and social accounts before the market story is obvious.",
    detail: "Trending · Search · Live feeds",
  },
  {
    number: "02",
    label: "CONNECT",
    title: "See the full context",
    body: "Match social momentum with liquidity, volume and holder activity from major chains.",
    detail: "Social + on-chain intelligence",
  },
  {
    number: "03",
    label: "BUILD",
    title: "Put it to work",
    body: "Feed unified signals into AI agents, research products, dashboards and monitoring tools.",
    detail: "One API · Multiple interfaces",
  },
];

const audiences = [
  "AI agents",
  "Research teams",
  "dApps",
  "Exchanges",
  "Compliance tools",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="https://askroger.ai/" aria-label="askRoger home">
          <span className="brand-mark">r</span>
          <span>ask Roger</span>
        </a>

        <div className="nav-center" aria-label="Preview section">
          <span className="nav-dot" />
          API ONBOARDING CONCEPT
        </div>

        <a
          className="nav-link"
          href="https://askrogerai.readme.io/reference/getting-started-1"
        >
          API reference
          <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="pulse" />
            SOCIAL + ON-CHAIN INTELLIGENCE
          </div>

          <h1>
            From market signal
            <br />
            to usable intelligence
            <br />
            <span>in one API.</span>
          </h1>

          <p className="intro">
            Give agents, research products and Web3 apps a unified view of
            what&apos;s moving, who&apos;s talking and what&apos;s happening
            on-chain.
          </p>

          <div className="actions">
            <a className="primary-button" href="https://t.me/innitforthetech">
              Request API access
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="secondary-button"
              href="https://askrogerai.readme.io/reference/getting-started-1"
            >
              View first API call
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="audience-row">
            <span className="audience-title">BUILT FOR</span>
            <div className="audience-list">
              {audiences.map((audience) => (
                <span key={audience}>{audience}</span>
              ))}
            </div>
          </div>
        </div>

        <aside className="signal-card" aria-label="Example API workflow">
          <div className="signal-card-top">
            <div>
              <span className="micro-label">ILLUSTRATIVE FLOW</span>
              <h2>Trending cashtags</h2>
            </div>
            <span className="live-pill">
              <i />
              24H
            </span>
          </div>

          <div className="chart-area">
            <div className="chart-grid" />
            <div className="chart-line">
              <span className="point point-one" />
              <span className="point point-two" />
              <span className="point point-three" />
              <span className="point point-four" />
            </div>
            <div className="chart-label chart-label-one">
              <b>Social momentum</b>
              <span>Rising</span>
            </div>
            <div className="chart-label chart-label-two">
              <b>On-chain activity</b>
              <span>Confirmed</span>
            </div>
          </div>

          <div className="signal-summary">
            <div>
              <span className="micro-label">CONCEPT SIGNAL</span>
              <strong>Momentum building</strong>
            </div>
            <span className="score">82</span>
          </div>

          <div className="code-window">
            <div className="code-head">
              <span>GET</span>
              <code>/v1/discover/trending-cashtags</code>
            </div>
            <pre>
              <span className="code-muted">{"{"}</span>
              {"\n"}
              <span className="code-key">  &quot;sort_by&quot;</span>
              <span className="code-muted">: </span>
              <span className="code-value">
                &quot;mention_volume_desc&quot;
              </span>
              <span className="code-muted">,</span>
              {"\n"}
              <span className="code-key">  &quot;limit&quot;</span>
              <span className="code-muted">: </span>
              <span className="code-number">5</span>
              {"\n"}
              <span className="code-muted">{"}"}</span>
            </pre>
          </div>

          <div className="access-meta">
            <span>API key + JWT</span>
            <span>Custom access plans</span>
            <span>v1.0</span>
          </div>
        </aside>
      </section>

      <section className="workflow" aria-labelledby="workflow-title">
        <div className="workflow-heading">
          <p>ONE CONNECTED WORKFLOW</p>
          <h2 id="workflow-title">
            Understand what is moving—and why.
          </h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.number}>
              <div className="step-top">
                <span className="step-number">{step.number}</span>
                <span className="step-label">{step.label}</span>
                {index < steps.length - 1 && (
                  <span className="step-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div className="step-detail">{step.detail}</div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>CONCEPT PREVIEW · PUBLIC PRODUCT INFO · PREPARED FOR ASKROGER</span>
        <span>Clearer API discovery → clearer access intent</span>
      </footer>
    </main>
  );
}
