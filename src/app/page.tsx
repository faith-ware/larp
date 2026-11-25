import Link from 'next/link';

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="container"><Link className="wordmark" href="/" aria-label="LARP home">LARP</Link><span>Access is the flex.</span></header>
      <main id="main" className="container">
        <p className="eyebrow">The LARP preview</p>
        <h1>Live the lifestyle.<br /><em>Skip the ownership.</em></h1>
        <p className="intro">Discover the rentals, digital assets, and experiences that bring your vision to life.</p>
        <section aria-labelledby="preview-heading">
          <h2 id="preview-heading">A new way to bring your vision to life.</h2>
          <p>We’re building a marketplace for real-world experiences and digital creative assets. This is an early development preview. Listings, booking, accounts, and purchases are not available yet.</p>
        </section>
      </main>
      <footer className="container">LARP · Development preview · No live inventory or payments</footer>
    </>
  );
}
