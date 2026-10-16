import { FormEvent, useEffect, useRef, useState } from "react";

const VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_051048_5ef213b5-26db-4da8-b604-7ef823760b6b.mp4";

const links = [
  ["Home", "home"],
  ["Features", "features"],
  ["Architecture", "architecture"],
  ["Developers", "developers"],
  ["Packages", "packages"],
  ["Help", "help"],
  ["About", "about"],
];

const stages = [
  ["01", "User prompt", "A request enters through your application."],
  ["02", "Proxy gateway", "FastAPI provides a consistent gateway boundary."],
  ["03", "Decision engine", "Local logic evaluates request context."],
  ["04", "Safety guardrails", "Prompt policies are applied before routing."],
  ["05", "Model routing", "A suitable configured model is selected."],
  ["06", "AI response", "The response returns through the same gateway."],
];

const features = [
  ["ROUTE", "Intelligent Model Routing", "Evaluate each prompt and route it toward an appropriate configured AI model."],
  ["SAFE", "Safety Guardrails", "Apply prompt policy checks at the gateway before requests reach model providers."],
  ["API", "FastAPI Proxy Gateway", "A clean API boundary for applications, routing logic, and external model services."],
  ["EXT", "Chrome Extension", "Bring intelligent routing into browser-based workflows with the accepted extension release."],
  ["SDK", "Python SDK", "Reuse the Polyglot Proxy client patterns inside Python applications and services."],
  ["DASH", "Developer Dashboard", "Access the deployed dashboard experience for the Polyglot Proxy ecosystem."],
];

const resources = [
  ["API DOCUMENTATION", "Explore the interactive FastAPI schema and available endpoints.", "Explore API", "https://polyglot-edge-agent.onrender.com/docs"],
  ["DEVELOPER DASHBOARD", "Open the deployed interface for the Polyglot Proxy backend.", "Open Dashboard", "https://polyglot-edge-agent.vercel.app/"],
  ["SOURCE & UPDATES", "Explore the Polyglot Edge Agent source code and project releases.", "View GitHub", "https://github.com/vinaysingh-05/polyglot-edge-agent"],
];

function Mark() {
  return <span className="mark" aria-hidden="true"><i /><i /><i /></span>;
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

function AppLink({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  return <a className={`cta ${primary ? "primary" : ""}`} href={href} target="_blank" rel="noreferrer">{children}<Arrow /></a>;
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [tab, setTab] = useState<"curl" | "python" | "gateway" | "docker">("docker");
  const [copied, setCopied] = useState(false);
  const [showExtSteps, setShowExtSteps] = useState(false);
  const [extCopied, setExtCopied] = useState(false);
  const [formState, setFormState] = useState<"idle" | "error" | "ready">("idle");
  const spotlight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 48);
    const move = (e: PointerEvent) => {
      if (spotlight.current) {
        spotlight.current.style.setProperty("--x", `${e.clientX}px`);
        spotlight.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };
    addEventListener("scroll", scroll, { passive: true });
    addEventListener("pointermove", move, { passive: true });
    return () => { removeEventListener("scroll", scroll); removeEventListener("pointermove", move); };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => setActiveStage((v) => (v + 1) % stages.length), 1400);
    return () => clearInterval(timer);
  }, [playing]);

  const snippets = {
    curl: `# Explore the live REST API schema\nopen https://polyglot-edge-agent.onrender.com/docs\n\n# Confirm the request body in Swagger before sending data`,
    python: `# Reusable Python SDK\n# Package installation details will be published with the verified release.\n\nopen https://github.com/vinaysingh-05/polyglot-edge-agent`,
    gateway: `# FastAPI gateway documentation\n# Inspect available routes and schemas interactively.\n\nopen https://polyglot-edge-agent.onrender.com/docs`,
    docker: `# Clone the Polyglot Proxy source\n# Review repository setup instructions before running locally.\n\ngit clone https://github.com/vinaysingh-05/polyglot-edge-agent.git\n\n# Open the live API documentation\nopen https://polyglot-edge-agent.onrender.com/docs`,
  };
  const code = snippets[tab];

  function copyCode() {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  }

  function copyExtUrl() {
    navigator.clipboard.writeText("chrome://extensions").then(() => {
      setExtCopied(true);
      setTimeout(() => setExtCopied(false), 1600);
    });
  }

  function submitSupport(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const required = ["name", "email", "subject", "category", "message"];
    if (required.some((key) => !String(data.get(key) || "").trim()) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email")))) {
      setFormState("error");
      return;
    }
    setFormState("ready");
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nCategory: ${data.get("category")}\n\n${data.get("message")}`;
    window.location.href = `mailto:vk8964210@gmail.com?subject=${encodeURIComponent(String(data.get("subject")))}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="app" ref={spotlight}>
      <div className="bg-video-fixed" aria-hidden="true">
        <video autoPlay muted loop playsInline preload="metadata">
          <source src={VIDEO} type="video/mp4" />
        </video>
        <div className="bg-video-wash" />
      </div>

      <div className="pointer-light" />
      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a href="#home" className="brand" aria-label="Polyglot Proxy home"><Mark /><span>POLYGLOT <b>PROXY</b></span></a>
        <nav className={menu ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {links.map(([label, id]) => <a href={`#${id}`} key={id} onClick={() => setMenu(false)}>{label}</a>)}
        </nav>
        <a href="#developers" className="nav-cta">Get started <Arrow /></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}><span /><span /></button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="particles" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} />)}</div>
          <div className="hero-copy">
            <div className="eyebrow"><span /> INTELLIGENT AI ROUTING</div>
            <h1><span>One Intelligent Gate.</span><em>Infinite AI Possibilities.</em></h1>
            <p>Intelligent AI routing middleware that evaluates prompts, applies safety guardrails, and connects your applications to suitable AI models.</p>
            <div className="hero-actions">
              <AppLink primary href="https://polyglot-edge-agent.onrender.com/docs">Explore API</AppLink>
              <AppLink href="https://polyglot-edge-agent.vercel.app/">Open Dashboard</AppLink>
              <AppLink href="https://github.com/vinaysingh-05/polyglot-edge-agent">GitHub</AppLink>
            </div>
            <div className="scroll-cue"><i /> Scroll to trace the signal</div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="center-head"><div className="pill">CORE CAPABILITIES · INTELLIGENT SUITE</div><h2>Engineered for Modern AI<br />Infrastructure.</h2><p>Everything you need to govern, secure, and optimize AI applications without vendor lock-in.</p></div>
          <div className="feature-grid">
            {features.map(([tag, title, text], i) => <article className={`feature f${i + 1}`} key={title}><div className="feature-top"><div className="feature-icon">{tag}</div><span>{["LOGIC, LATENCY & QUALITY", "ZERO-TRUST DEFENSE", "ASYNCHRONOUS EDGE", "EVERYWHERE YOU WRITE", "DEVELOPER-FIRST", "UNIFIED CONTROL"][i]}</span></div><h3>{title}</h3><p>{text}</p><ul><li>Consistent gateway integration</li><li>Local-first request evaluation</li><li>Developer-focused workflow</li></ul><a href={i === 5 ? "https://polyglot-edge-agent.vercel.app/" : "https://polyglot-edge-agent.onrender.com/docs"} target="_blank" rel="noreferrer">Explore details <Arrow /></a><div className="card-line" /></article>)}
          </div>
        </section>

        <section id="architecture" className="section architecture">
          <div className="section-head"><div><div className="kicker">02 / ARCHITECTURE</div><h2>From Prompt<br />to Intelligence.</h2></div><div className="play-controls"><button onClick={() => setPlaying(!playing)}>{playing ? "Pause" : "Play"}</button><button onClick={() => { setActiveStage(0); setPlaying(true); }}>Replay</button></div></div>
          <div className="flow" style={{ "--progress": `${(activeStage / (stages.length - 1)) * 100}%` } as React.CSSProperties}>
            <div className="flow-line"><i /></div>
            {stages.map(([num, title, text], i) => <button key={title} onClick={() => { setActiveStage(i); setPlaying(false); }} className={`flow-node ${activeStage === i ? "active" : ""}`}><span>{num}</span><b>{title}</b><small>{i === 2 ? "LOCAL" : i > 2 ? "CONFIGURED SERVICES" : "REQUEST PATH"}</small></button>)}
          </div>
          <div className="stage-detail"><span>{stages[activeStage][0]}</span><div><h3>{stages[activeStage][1]}</h3><p>{stages[activeStage][2]}</p></div><i>ACTIVE STAGE</i></div>
        </section>

        <section id="developers" className="section">
          <div className="section-head"><div><div className="kicker">03 / DEVELOPER PORTAL</div><h2>Built for builders.</h2></div><p>Explore the live resources available today. External tools open safely in a new tab.</p></div>
          <div className="resource-grid">{resources.map(([label, title, cta, href]) => <a href={href} target="_blank" rel="noreferrer" className="resource" key={label}><span>{label}</span><h3>{title}</h3><div>{cta}<Arrow /></div></a>)}</div>
        </section>

        <section id="packages" className="section packages">
          <div className="center-head"><div className="pill">PACKAGES & EXTENSIONS · DEVELOPER INTEGRATIONS</div><h2>Bring Intelligent Routing Into Your<br />Workflow.</h2><p>Integrate Polyglot Proxy directly into your daily developer environment, whether through your web browser or Python application.</p></div>
          <div className="package-grid">
            <article className="package-card chrome-package-card">
              <div className="package-top">
                <span className="chrome-mark" />
                <small className="accepted">● RELEASE v1.0 AVAILABLE</small>
              </div>
              <h3>Polyglot Chrome Extension</h3>
              <p>Direct browser prompt interception with real-time safety evaluation before requests leave your workflow.</p>
              <ul className="package-list">
                <li>
                  <b>Browser Tab Ingestion</b>
                  <span>Inspects prompt payloads locally before dispatch.</span>
                </li>
                <li>
                  <b>Zero Cloud Leakage</b>
                  <span>Sensitive data stays protected at the client boundary.</span>
                </li>
                <li>
                  <b>Local Gateway Sync</b>
                  <span>Connects seamlessly with your configured agent &amp; FastAPI backend.</span>
                </li>
              </ul>

              <div className="release-box active-release">
                <div className="release-badge-row">
                  <span className="status-indicator live">● Verified Build</span>
                  <span className="package-tag">polyglot-proxy-gate-v1.0.zip (4.3 KB)</span>
                </div>
                <b>Chrome / Chromium Extension Ready</b>
                <span>Manifest V3 compatible. Direct installation ready for Chrome, Edge, and Brave.</span>

                <div className="release-action-group">
                  <a
                    href="/polyglot-proxy-gate-v1.0.zip"
                    download="polyglot-proxy-gate-v1.0.zip"
                    className="download-pkg-btn"
                    id="download-extension-zip"
                  >
                    <span>⬇ Download Package (.zip)</span>
                    <Arrow />
                  </a>
                  <button
                    type="button"
                    className="guide-toggle-btn"
                    onClick={() => setShowExtSteps(!showExtSteps)}
                    aria-expanded={showExtSteps}
                  >
                    {showExtSteps ? "Hide Installation Guide ▲" : "Installation Guide (3 Steps) ▼"}
                  </button>
                </div>

                {showExtSteps && (
                  <div className="ext-install-steps">
                    <div className="steps-header">
                      <b>Quick Setup Instructions</b>
                    </div>
                    <ol>
                      <li>
                        <b>1. Extract ZIP:</b> Unzip <code>polyglot-proxy-gate-v1.0.zip</code> anywhere on your system.
                      </li>
                      <li>
                        <b>2. Open Extensions:</b> Go to{" "}
                        <button type="button" className="copy-link-btn" onClick={copyExtUrl} title="Copy URL">
                          chrome://extensions {extCopied ? "✓ Copied" : "📋 Copy"}
                        </button>{" "}
                        and turn on <b>Developer mode</b> (top right).
                      </li>
                      <li>
                        <b>3. Load Unpacked:</b> Click <b>Load unpacked</b> (top left) and select the unzipped directory.
                      </li>
                    </ol>
                  </div>
                )}
              </div>
            </article>
            <article><div className="package-top"><span className="sdk-mark">&lt;/&gt;</span><small>INSTALL VIA VERIFIED RELEASE</small></div><h3>Reusable Python SDK</h3><p>A reusable Python client for orchestrating intelligent routing, model fallbacks, and local safety policies.</p><div className="mini-code"><span>INSTALLATION</span><code>Release command pending verification</code></div><div className="mini-code large"><span>PACKAGE STATUS</span><code># Source and installation details<br /># will appear after package verification.<br /><br />client = PolyglotClient(<br />&nbsp;&nbsp;gateway_url="your-gateway"<br />)</code></div><a href="https://github.com/vinaysingh-05/polyglot-edge-agent" target="_blank" rel="noreferrer">View repository <Arrow /></a></article>
          </div>
        </section>

        <section className="section quickstart">
          <div className="center-head"><div className="pill">DEVELOPER QUICKSTART · REST & SDK ACCESS</div><h2>Deploy in Minutes, Not Weeks.</h2><p>Standardized schemas reduce friction. Explore the gateway, SDK, and deployment paths from one focused console.</p></div>
          <div className="terminal terminal-large">
            <div className="terminal-bar"><div className="dots"><i /><i /><i /></div><b>polyglot-edge-agent ~ console</b><div className="tabs">{([["curl","cURL / REST API"],["python","Python Client"],["gateway","FastAPI Gateway"],["docker","Docker / Source"]] as const).map(([id,label]) => <button key={id} className={tab === id ? "active" : ""} onClick={() => setTab(id)}>{label}</button>)}</div><button className="copy" onClick={copyCode}>{copied ? "Copied" : "Copy"}</button></div>
            <div className="terminal-note">Review commands and live schemas before integrating into production.</div>
            <pre><span className="prompt">$ </span>{code}<i className="cursor" /></pre>
            <div className="terminal-foot"><span>✓ API Spec: OpenAPI Compatible</span><a href="https://polyglot-edge-agent.onrender.com/docs" target="_blank" rel="noreferrer">Explore Interactive OpenAPI Docs <Arrow /></a></div>
          </div>
        </section>

        <section id="help" className="section support">
          <div className="support-copy"><div className="kicker">05 / HELP CENTER</div><h2>Let’s solve it<br />together.</h2><p>Tell us what you’re building or where you’re stuck. Until server email credentials are configured, this secure form opens your email client with the message prefilled.</p><a href="mailto:vk8964210@gmail.com">vk8964210@gmail.com <Arrow /></a></div>
          <form onSubmit={submitSupport} noValidate>
            <div className="field-row"><label>Name<input name="name" placeholder="Your name" /></label><label>Email<input name="email" type="email" placeholder="you@company.com" /></label></div>
            <label>Subject<input name="subject" placeholder="How can we help?" /></label>
            <label>Issue category<select name="category" defaultValue=""><option value="" disabled>Select a category</option>{["API Integration", "Chrome Extension", "SDK and Packages", "Bug Report", "Feature Request", "General Inquiry"].map(x => <option key={x}>{x}</option>)}</select></label>
            <label>Message<textarea name="message" rows={4} placeholder="Share the details…" /></label>
            {formState === "error" && <p className="form-status error" role="alert">Please complete every field with a valid email address.</p>}
            {formState === "ready" && <p className="form-status" role="status">Your email client is opening with the request prefilled.</p>}
            <button className="submit" type="submit">Prepare support email <Arrow /></button>
          </form>
        </section>

        <section id="about" className="section about">
          <div className="about-orb"><Mark /></div><div><div className="kicker">06 / THE DEVELOPER</div><h2>Building Smarter<br />Experiences With AI.</h2><p>Polyglot Proxy is built by <strong>Vinay Kumar</strong> as an intelligent routing layer for modern AI applications.</p><div className="socials"><a href="https://www.linkedin.com/in/vinay-kumar0805/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/vinaysingh-05" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="mailto:vk8964210@gmail.com">Email <Arrow /></a></div></div>
        </section>
      </main>

      <footer><div className="footer-brand"><a href="#home" className="brand"><Mark /><span>POLYGLOT <b>PROXY</b></span></a><p>Intelligence at the Edge. Smarter AI Everywhere.</p></div><div className="footer-column"><b>ARCHITECTURE</b><a href="#architecture">Request Lifecycle</a><a href="#features">Safety Guardrails</a><a href="#features">Decision Engine</a><a href="#developers">FastAPI Edge Proxy</a></div><div className="footer-column"><b>RESOURCES</b><a href="https://polyglot-edge-agent.onrender.com/docs" target="_blank" rel="noreferrer">API Swagger Docs ↗</a><a href="https://polyglot-edge-agent.vercel.app/" target="_blank" rel="noreferrer">Developer Dashboard ↗</a><a href="https://github.com/vinaysingh-05/polyglot-edge-agent" target="_blank" rel="noreferrer">GitHub Repository ↗</a><a href="#packages">Quickstart Terminal</a></div><div className="footer-column"><b>CONTACT & LEGAL</b><a href="#help">Help Center Form</a><a href="mailto:vk8964210@gmail.com">vk8964210@gmail.com</a><a href="#home">Privacy Policy</a><a href="#home">Terms of Use</a></div><small>© 2026 Polyglot Proxy. Built for intelligent AI routing.</small></footer>
    </div>
  );
}
