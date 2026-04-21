'use client';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import StaffNotation from './StaffNotation';

const locales = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
];

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();

  const switchLocale = (newLocale: string) => {
    router.push(`/${newLocale}`);
  };

  const handleSubmit = async () => {
    const input = document.getElementById('emailInput') as HTMLInputElement;
    const email = input?.value;
    if (!email?.includes('@')) return;
    const btn = document.querySelector('.email-form button') as HTMLButtonElement;
    if (btn) btn.textContent = '...';
    try {
      const res = await fetch(`${window.location.origin}/api/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      await res.json();
      const form = document.getElementById('emailForm');
      if (res.ok && form) {
        form.innerHTML = `<p class="confirm-msg">${t('cta.confirm')}</p>`;
      } else {
        if (btn) btn.textContent = t('cta.button');
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch {
      const btn2 = document.querySelector('.email-form button') as HTMLButtonElement;
      if (btn2) btn2.textContent = t('cta.button');
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        :root {
          --gold: #C9A84C; --gold-light: #E8C97A; --gold-dim: #8B6E30;
          --ink: #0E0B08; --ink-soft: #1C1812;
          --white: #FAF8F4; --muted: #7A6E60;
        }
        * { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        body { font-family:'DM Sans',sans-serif; background:var(--ink); color:var(--white); overflow-x:hidden; }
        nav { position:fixed; top:0; width:100%; z-index:100; display:flex; align-items:center; justify-content:space-between; padding:1.5rem 4rem; background:linear-gradient(to bottom,rgba(14,11,8,0.95),transparent); backdrop-filter:blur(4px); }
        .logo { font-family:'Playfair Display',serif; font-size:1.5rem; letter-spacing:0.08em; color:var(--gold); }
        .logo span { font-style:italic; color:var(--white); }
        nav ul { list-style:none; display:flex; gap:2rem; align-items:center; }
        nav ul li a { text-decoration:none; font-size:0.8rem; font-weight:400; letter-spacing:0.12em; text-transform:uppercase; color:rgba(250,248,244,0.65); transition:color 0.25s; cursor:pointer; }
        nav ul li a:hover { color:var(--gold); }
        .nav-cta { background:var(--gold)!important; color:var(--ink)!important; padding:0.5rem 1.2rem; border-radius:2px; font-weight:500!important; }
        .lang-select { background:transparent; border:1px solid rgba(201,168,76,0.3); color:rgba(250,248,244,0.6); font-family:'DM Sans',sans-serif; font-size:0.75rem; padding:0.3rem 0.6rem; border-radius:2px; cursor:pointer; }
        .lang-select option { background:#1C1812; }
        .hero { min-height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:8rem 2rem 6rem; position:relative; overflow:hidden; }
        .hero-bg { position:absolute; inset:0; background:radial-gradient(ellipse 80% 60% at 50% 110%,rgba(201,168,76,0.12) 0%,transparent 70%); }
        .staff-bg { position:absolute; inset:0; pointer-events:none; opacity:0.06; }
        .hero-eyebrow { font-size:0.72rem; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); margin-bottom:1.5rem; display:flex; align-items:center; gap:1rem; }
        .hero-eyebrow::before,.hero-eyebrow::after { content:''; display:block; height:1px; width:40px; background:var(--gold); opacity:0.5; }
        h1 { font-family:'Playfair Display',serif; font-size:clamp(3rem,7vw,6rem); font-weight:400; line-height:1.05; margin-bottom:0.2em; animation:fadeUp 1s ease both; }
        h1 em { font-style:italic; color:var(--gold); }
        .hero-sub { font-size:clamp(1rem,2vw,1.15rem); font-weight:300; color:rgba(250,248,244,0.6); max-width:560px; line-height:1.7; margin:1.5rem auto 3rem; animation:fadeUp 1s 0.15s ease both; }
        .hero-actions { display:flex; gap:1rem; align-items:center; animation:fadeUp 1s 0.3s ease both; }
        .btn-primary { background:var(--gold); color:var(--ink); padding:1rem 2.5rem; border:none; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:0.85rem; font-weight:500; letter-spacing:0.1em; text-transform:uppercase; border-radius:2px; transition:background 0.25s,transform 0.2s; }
        .btn-primary:hover { background:var(--gold-light); transform:translateY(-1px); }
        .btn-ghost { background:transparent; color:rgba(250,248,244,0.7); padding:1rem 2rem; border:1px solid rgba(250,248,244,0.2); cursor:pointer; font-family:'DM Sans',sans-serif; font-size:0.85rem; letter-spacing:0.08em; text-transform:uppercase; border-radius:2px; transition:border-color 0.25s,color 0.25s; }
        .btn-ghost:hover { border-color:var(--gold); color:var(--gold); }
        section { padding:7rem 2rem; }
        .container { max-width:1100px; margin:0 auto; }
        .section-label { font-size:0.68rem; letter-spacing:0.3em; text-transform:uppercase; color:var(--gold); margin-bottom:1rem; }
        h2 { font-family:'Playfair Display',serif; font-size:clamp(2rem,4vw,3rem); font-weight:400; line-height:1.15; margin-bottom:1.5rem; }
        h2 em { font-style:italic; color:var(--gold); }
        .pillars { background:var(--ink-soft); }
        .pillars-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1px; background:rgba(201,168,76,0.12); border:1px solid rgba(201,168,76,0.12); margin-top:4rem; }
        .pillar { background:var(--ink-soft); padding:2.5rem; transition:background 0.3s; }
        .pillar:hover { background:rgba(201,168,76,0.04); }
        .pillar-number { font-family:'Playfair Display',serif; font-size:3.5rem; font-weight:400; color:rgba(201,168,76,0.15); line-height:1; margin-bottom:1.5rem; }
        .pillar h3 { font-family:'Playfair Display',serif; font-size:1.3rem; font-weight:400; margin-bottom:0.75rem; }
        .pillar p { font-size:0.875rem; line-height:1.75; color:rgba(250,248,244,0.5); font-weight:300; }
        .pillar-tag { display:inline-block; margin-top:1.25rem; font-size:0.68rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold-dim); border-bottom:1px solid var(--gold-dim); padding-bottom:2px; }
        .demo-section { background:var(--ink); }
        .demo-layout { display:grid; grid-template-columns:1fr 1fr; gap:4rem; align-items:center; margin-top:4rem; }
        .demo-text p { font-size:0.95rem; line-height:1.8; color:rgba(250,248,244,0.55); font-weight:300; margin-bottom:1rem; }
        .demo-visual { background:rgba(201,168,76,0.04); border:1px solid rgba(201,168,76,0.15); border-radius:4px; padding:2.5rem; }
        .vl-label { font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--gold-dim); margin-bottom:1.5rem; }
        .levels-section { background:var(--ink-soft); }
        .levels-flex { display:flex; gap:1px; background:rgba(201,168,76,0.08); margin-top:4rem; border:1px solid rgba(201,168,76,0.08); }
        .level-card { flex:1; padding:2.5rem 2rem; background:var(--ink-soft); transition:background 0.3s; }
        .level-card:hover { background:rgba(201,168,76,0.05); }
        .level-card.featured { background:rgba(201,168,76,0.07); border-top:2px solid var(--gold); }
        .level-badge { font-size:0.65rem; letter-spacing:0.2em; text-transform:uppercase; padding:0.3rem 0.75rem; border-radius:2px; display:inline-block; margin-bottom:1.5rem; }
        .badge-b { background:rgba(95,94,90,0.3); color:rgba(250,248,244,0.4); }
        .badge-i { background:rgba(201,168,76,0.2); color:var(--gold); }
        .badge-a { background:rgba(201,168,76,0.1); color:var(--gold-dim); }
        .level-card h3 { font-family:'Playfair Display',serif; font-size:1.4rem; font-weight:400; margin-bottom:1rem; }
        .level-card ul { list-style:none; }
        .level-card ul li { font-size:0.85rem; color:rgba(250,248,244,0.5); padding:0.4rem 0; border-bottom:1px solid rgba(250,248,244,0.05); display:flex; align-items:center; gap:0.6rem; font-weight:300; }
        .level-card ul li::before { content:''; display:block; width:4px; height:4px; border-radius:50%; background:var(--gold); flex-shrink:0; }
        .cta-section { background:var(--ink); text-align:center; position:relative; overflow:hidden; }
        .cta-section::before { content:''; position:absolute; inset:0; background:radial-gradient(ellipse 70% 80% at 50% 50%,rgba(201,168,76,0.08) 0%,transparent 70%); pointer-events:none; }
        .cta-section p.sub { font-size:1rem; color:rgba(250,248,244,0.45); max-width:480px; margin:0 auto 2.5rem; font-weight:300; line-height:1.7; }
        .email-form { display:flex; max-width:420px; margin:0 auto; border:1px solid rgba(201,168,76,0.3); border-radius:2px; overflow:hidden; }
        .email-form input { flex:1; background:rgba(201,168,76,0.05); border:none; outline:none; padding:0.9rem 1.25rem; font-family:'DM Sans',sans-serif; font-size:0.875rem; color:var(--white); }
        .email-form input::placeholder { color:rgba(250,248,244,0.25); }
        .email-form button { background:var(--gold); border:none; cursor:pointer; padding:0.9rem 1.5rem; font-family:'DM Sans',sans-serif; font-size:0.75rem; font-weight:500; letter-spacing:0.1em; text-transform:uppercase; color:var(--ink); transition:background 0.25s; }
        .email-form button:hover { background:var(--gold-light); }
        .cta-note { margin-top:1rem; font-size:0.72rem; color:rgba(250,248,244,0.2); }
        .confirm-msg { padding:1rem 2rem; font-size:0.85rem; color:var(--gold); letter-spacing:0.05em; }
        footer { border-top:1px solid rgba(201,168,76,0.1); padding:2.5rem 4rem; display:flex; justify-content:space-between; align-items:center; }
        footer p { font-size:0.78rem; color:rgba(250,248,244,0.2); }
        .footer-logo { font-family:'Playfair Display',serif; font-size:1.1rem; color:rgba(201,168,76,0.5); }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @media(max-width:768px){nav{padding:1.25rem 1.5rem}nav ul{display:none}.demo-layout{grid-template-columns:1fr}.levels-flex{flex-direction:column}footer{flex-direction:column;gap:1rem;padding:2rem 1.5rem}}
      `}</style>

      <nav>
        <div className="logo">Harmon<span>ia</span></div>
        <ul>
          <li><a onClick={() => document.getElementById('pillars')?.scrollIntoView({behavior:'smooth'})}>{t('nav.method')}</a></li>
          <li><a onClick={() => document.getElementById('exercices')?.scrollIntoView({behavior:'smooth'})}>{t('nav.exercises')}</a></li>
          <li><a onClick={() => document.getElementById('niveaux')?.scrollIntoView({behavior:'smooth'})}>{t('nav.levels')}</a></li>
          <li>
            <select className="lang-select" value={locale} onChange={e => switchLocale(e.target.value)}>
              {locales.map(l => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
          </li>
          <li><a className="nav-cta" onClick={() => document.getElementById('cta')?.scrollIntoView({behavior:'smooth'})}>{t('nav.start')}</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <svg className="staff-bg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {[200,240,280,320,360,500,540,580,620,660].map(y => (
            <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="#C9A84C" strokeWidth="0.8"/>
          ))}
          <text x="80" y="395" fontFamily="serif" fontSize="180" fill="#C9A84C" opacity="0.06">𝄞</text>
        </svg>
        <div style={{position:'relative',zIndex:1}}>
          <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
          <h1>{t('hero.title1')}<br/>{t('hero.title2')} <em>{t('hero.title2em')}</em></h1>
          <p className="hero-sub">{t('hero.sub')}</p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => document.getElementById('cta')?.scrollIntoView({behavior:'smooth'})}>{t('hero.cta_primary')}</button>
            <button className="btn-ghost" onClick={() => document.getElementById('exercices')?.scrollIntoView({behavior:'smooth'})}>{t('hero.cta_ghost')}</button>
          </div>
        </div>
      </section>

      <section className="pillars" id="pillars">
        <div className="container">
          <p className="section-label">{t('pillars.label')}</p>
          <h2>{t('pillars.title1')}<br/>{t('pillars.title2')} <em>{t('pillars.title2em')}</em></h2>
          <div className="pillars-grid">
            {(['p1','p2','p3'] as const).map((p,i) => (
              <div className="pillar" key={p}>
                <div className="pillar-number">0{i+1}</div>
                <h3>{t(`pillars.${p}_title`)}</h3>
                <p>{t(`pillars.${p}_body`)}</p>
                <span className="pillar-tag">{t(`pillars.${p}_tag`)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-section" id="exercices">
        <div className="container">
          <div className="demo-layout">
            <div className="demo-text">
              <p className="section-label">{t('demo.label')}</p>
              <h2>{t('demo.title1')} <em>{t('demo.title1em')}</em></h2>
              <p>{t('demo.p1')}</p>
              <p>{t('demo.p2')}</p>
            </div>
            <div className="demo-visual">
              <p className="vl-label">{t('demo.vl_label')}</p>
              <StaffNotation
                animateLabel={t('demo.animate')}
                pauseLabel="Pause"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="levels-section" id="niveaux">
        <div className="container">
          <p className="section-label">{t('levels.label')}</p>
          <h2>{t('levels.title1')}<br/>{t('levels.title2')} <em>{t('levels.title2em')}</em></h2>
          <div className="levels-flex">
            <div className="level-card">
              <span className="level-badge badge-b">{t('levels.beginner_badge')}</span>
              <h3>{t('levels.beginner_title')}</h3>
              <ul>{(t.raw('levels.beginner_items') as string[]).map((item,i) => <li key={i}>{item}</li>)}</ul>
            </div>
            <div className="level-card featured">
              <span className="level-badge badge-i">✦ {t('levels.inter_badge')}</span>
              <h3>{t('levels.inter_title')}</h3>
              <ul>{(t.raw('levels.inter_items') as string[]).map((item,i) => <li key={i}>{item}</li>)}</ul>
            </div>
            <div className="level-card">
              <span className="level-badge badge-a">{t('levels.adv_badge')}</span>
              <h3>{t('levels.adv_title')}</h3>
              <ul>{(t.raw('levels.adv_items') as string[]).map((item,i) => <li key={i}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="cta">
        <div className="container" style={{position:'relative',zIndex:1}}>
          <p className="section-label">{t('cta.label')}</p>
          <h2>{t('cta.title1')}<br/><em>{t('cta.title1em')}</em></h2>
          <p className="sub">{t('cta.sub')}</p>
          <div id="emailForm">
            <div className="email-form">
              <input type="email" id="emailInput" placeholder={t('cta.placeholder')} />
              <button onClick={handleSubmit}>{t('cta.button')}</button>
            </div>
          </div>
          <p className="cta-note">{t('cta.note')}</p>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Harmonia</div>
        <p>{t('footer.rights')}</p>
        <p style={{fontSize:'0.72rem',color:'rgba(250,248,244,0.15)'}}>{t('footer.made')}</p>
      </footer>
    </>
  );
}