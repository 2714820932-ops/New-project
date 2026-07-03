import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: '关于' },
  { href: '#projects', label: '作品' },
  { href: '#skills', label: '优势' },
  { href: '#contact', label: '联系' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner container">
        <a href="#" className="navbar-logo">Catwisen<span className="logo-dot">.</span></a>
        <div className="navbar-links">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${active === link.href.slice(1) ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="nav-cta">联系我</a>
      </div>
    </nav>
  );
}
