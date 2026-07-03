import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function createSectionTimeline(sectionId, opts) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionId,
      start: 'top 82%',
      toggleActions: 'play none none none',
    }
  });

  const label = sectionId + ' .section-label';
  const title = sectionId + ' .section-title, ' + sectionId + ' .contact-title';
  const subtitle = sectionId + ' .section-subtitle, ' + sectionId + ' .contact-desc';

  tl.fromTo(label, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' });
  tl.fromTo(title,
    { y: 50, opacity: 0, scaleX: 1.15 },
    { y: 0, opacity: 1, scaleX: 1, duration: 1, ease: 'expo.out' },
    '-=0.2'
  );
  tl.fromTo(subtitle, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.6');

  if (opts.cards) {
    tl.fromTo(opts.cards,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: opts.cardStagger || 0.1, ease: 'power2.out' },
      '-=0.4'
    );
  }
  if (opts.extraCards) {
    tl.fromTo(opts.extraCards,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.06, ease: 'power1.out' },
      '-=0.3'
    );
  }
}

export function useAnimations() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // === HERO OPENING ===
      gsap.set('.hero-curtain', { scaleY: 1, transformOrigin: 'top center' });
      gsap.set('.hero-badge', { y: 24, opacity: 0 });
      gsap.set('.hero-line', { scaleX: 1.5, x: -60, opacity: 0, transformOrigin: 'left center' });
      gsap.set('.hero-desc', { y: 30, opacity: 0 });
      gsap.set('.hero-actions a', { y: 20, opacity: 0 });
      gsap.set('.scroll-indicator', { opacity: 0 });

      const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl.to('.hero-curtain', {
        scaleY: 0, duration: 1.6, ease: 'power4.inOut', transformOrigin: 'top center'
      })
      .to('.hero-badge', { y: 0, opacity: 1, duration: 0.6 }, '-=0.8')
      .to('.hero-line', {
        scaleX: 1, x: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.2
      }, '-=0.6')
      .to('.hero-desc', { y: 0, opacity: 1, duration: 0.8 }, '-=0.8')
      .to('.hero-actions a', { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, '-=0.5')
      .to('.scroll-indicator', { opacity: 1, duration: 0.6 }, '-=0.3');

      // === SECTION SCROLL ANIMATIONS ===
      createSectionTimeline('#about', { cards: '.about-visual, .about-info', cardStagger: 0.12, extraCards: '.stat-item' });
      createSectionTimeline('#projects', { cards: '.project-card', cardStagger: 0.15 });
      createSectionTimeline('#skills', { cards: '.skill-card', cardStagger: 0.08 });
      createSectionTimeline('#contact', { cards: '.contact-link', cardStagger: 0.12 });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);
}
