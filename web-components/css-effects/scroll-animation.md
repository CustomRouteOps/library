# Scroll Animation (IntersectionObserver)

Fade elements up as they enter the viewport on scroll. Works inside any scrollable container — not just the window.

## The Gotchas

**1. Never put a CSS animation on your marker class.**
If `.animate-in` has `animation: fadeUp ...`, it fires the moment the element hits the DOM — the observer never gets a chance. Keep the class as a plain selector; let JS own the transition.

**2. Set `root` when your scroll container isn't `window`.**
`IntersectionObserver` defaults to the browser viewport. If your content scrolls inside a `div`, elements inside it are always "visible" from the window's perspective. Pass `root: scrollContainer` so the observer measures against the right box.

## CSS

```css
/* Marker class — NO animation rule here */
.scroll-reveal {
  /* intentionally empty — JS drives opacity/transform */
}
```

## JS

```js
function initScrollReveal(scrollContainer) {
  const els = scrollContainer.querySelectorAll('.scroll-reveal');

  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.55s cubic-bezier(.22,.68,0,1.2), transform 0.55s cubic-bezier(.22,.68,0,1.2)';
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const delay = parseFloat(e.target.dataset.delay || '0');
      setTimeout(() => {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }, delay * 1000);
      obs.unobserve(e.target);
    });
  }, {
    threshold: 0.1,
    root: scrollContainer, // critical when scroll container != window
  });

  els.forEach(el => obs.observe(el));
}
```

## HTML

```html
<!-- stagger via data-delay -->
<div class="scroll-reveal" data-delay="0">First</div>
<div class="scroll-reveal" data-delay="0.1">Second</div>
<div class="scroll-reveal" data-delay="0.2">Third</div>

<script>
  initScrollReveal(document.getElementById('your-scroll-container'));
</script>
```

## React (plain CSS transitions)

```tsx
import { useEffect, useRef } from 'react';

export function useScrollReveal(containerRef: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const els = container.querySelectorAll<HTMLElement>('.scroll-reveal');
    els.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.55s cubic-bezier(.22,.68,0,1.2), transform 0.55s cubic-bezier(.22,.68,0,1.2)';
    });

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        const delay = parseFloat((e.target as HTMLElement).dataset.delay || '0');
        setTimeout(() => {
          (e.target as HTMLElement).style.opacity = '1';
          (e.target as HTMLElement).style.transform = 'translateY(0)';
        }, delay * 1000);
        obs.unobserve(e.target);
      });
    }, { threshold: 0.1, root: container });

    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [containerRef]);
}
```

## Notes

- Use `data-delay` (seconds) to stagger sibling elements without extra JS logic.
- Call `obs.unobserve()` after triggering — animations should only play once.
- For Framer Motion projects, prefer `useInView` + `whileInView` instead; this pattern is for vanilla JS or lightweight React without the FM dependency.
- `prefers-reduced-motion`: wrap the whole setup in `if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches)` to respect user preference.
