/**
 * Global Mobile Scroll-Triggered Focus Zone Controller
 *
 * Implements an invisible center focus zone (~45% → 55% viewport height) on mobile.
 * Only the single primary element currently crossing through the center focus zone
 * activates its existing hover state. As it leaves the center, it deactivates,
 * and the next element entering the center activates sequentially.
 *
 * Desktop mouse hover behavior remains 100% untouched.
 */

export function initMobileScrollHover(): () => void {
  if (typeof window === 'undefined') return () => {};

  const isMobileQuery = window.matchMedia('(max-width: 1023px), (hover: none)');
  let currentActiveEl: HTMLElement | null = null;
  let rafId: number | null = null;
  let isListening = false;

  const targetSelector =
    '[data-mobile-hover], .interactive-row, .mobile-hover-target, .mobile-card-target, .mobile-dark-card-target, .mobile-reel-target';

  const updateFocusZone = () => {
    rafId = null;

    if (!isMobileQuery.matches) {
      if (currentActiveEl) {
        currentActiveEl.classList.remove('mobile-hover-active');
        currentActiveEl = null;
      }
      return;
    }

    const vh = window.innerHeight;
    // Strict Center Focus Zone: ~42% to 58% of mobile viewport height
    const focusZoneTop = vh * 0.42;
    const focusZoneBottom = vh * 0.58;
    const focusZoneCenter = vh * 0.50;

    const elements = document.querySelectorAll<HTMLElement>(targetSelector);
    let bestCandidate: HTMLElement | null = null;
    let closestDistance = Infinity;

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      const rect = el.getBoundingClientRect();

      // Check if element intersects the central focus zone
      const overlapsFocusZone =
        rect.top < focusZoneBottom && rect.bottom > focusZoneTop;

      if (overlapsFocusZone) {
        // Find the single element closest to the horizontal center midline
        const elCenter = (rect.top + rect.bottom) / 2;
        const distance = Math.abs(elCenter - focusZoneCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          bestCandidate = el;
        }
      }
    }

    // Guarantee that ONLY ONE element is active at a time
    if (bestCandidate !== currentActiveEl) {
      if (currentActiveEl) {
        currentActiveEl.classList.remove('mobile-hover-active');
      }
      if (bestCandidate) {
        bestCandidate.classList.add('mobile-hover-active');
      }
      currentActiveEl = bestCandidate;
    }
  };

  const onScrollOrResize = () => {
    if (rafId === null) {
      rafId = window.requestAnimationFrame(updateFocusZone);
    }
  };

  const startListening = () => {
    if (isListening) return;
    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    isListening = true;
    updateFocusZone();
  };

  const stopListening = () => {
    if (!isListening) return;
    window.removeEventListener('scroll', onScrollOrResize);
    window.removeEventListener('resize', onScrollOrResize);
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
    if (currentActiveEl) {
      currentActiveEl.classList.remove('mobile-hover-active');
      currentActiveEl = null;
    }
    isListening = false;
  };

  const handleMediaChange = () => {
    if (isMobileQuery.matches) {
      startListening();
    } else {
      stopListening();
    }
  };

  // Initial attachment
  handleMediaChange();
  isMobileQuery.addEventListener('change', handleMediaChange);

  // Watch for DOM / dynamic category filter updates
  const mutationObserver = new MutationObserver(() => {
    if (isMobileQuery.matches) {
      onScrollOrResize();
    }
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  return () => {
    isMobileQuery.removeEventListener('change', handleMediaChange);
    mutationObserver.disconnect();
    stopListening();
  };
}
