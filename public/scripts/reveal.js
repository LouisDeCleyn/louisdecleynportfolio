/**
 * Scroll Reveal System - External Script
 * File: /public/scripts/reveal.js
 * 
 * Matches the original working inline script exactly
 */

(function() {
  'use strict';
  
  // Initialize immediately to prevent flashing
  const respectReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  // If reduced motion is preferred, show all elements immediately
  if (respectReducedMotion) {
    document.addEventListener('DOMContentLoaded', function() {
      const revealElements = document.querySelectorAll(`
        .reveal,
        .reveal-up,
        .reveal-left, 
        .reveal-right,
        [class*="reveal-stagger"],
        [class*="reveal-delay"]
      `);
      revealElements.forEach(function(element) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
      });
    });
    return; // Exit early if reduced motion
  }
  
  // Configuration for scroll reveal
  const config = {
    rootMargin: '0px 0px -100px 0px', // Trigger when element is 100px from being visible
    threshold: 0.15 // Trigger when 15% of element is visible
  };
  
  let observer = null;
  const elements = new Set();
  
  // Initialize scroll reveal
  function init() {
    observer = new IntersectionObserver(handleIntersection, config);
    observeElements();
  }

  // Find and observe elements
  function observeElements() {
    const revealElements = document.querySelectorAll(`
      .reveal,
      .reveal-up,
      .reveal-left, 
      .reveal-right,
      [class*="reveal-stagger"],
      [class*="reveal-delay"]
    `);

    revealElements.forEach(function(element) {
      elements.add(element);
      
      // Apply initial hidden state like the original inline script
      applyInitialState(element);
      
      observer.observe(element);
    });
  }

  // Apply initial hidden state (same as original inline script)
  function applyInitialState(element) {
    element.style.opacity = '0';
    element.style.visibility = 'hidden';
    
    // Determine transform based on class
    if (element.classList.contains('reveal-left')) {
      element.style.transform = 'translateX(-32px)';
    } else if (element.classList.contains('reveal-right')) {
      element.style.transform = 'translateX(32px)';
    } else if (element.classList.contains('reveal-up') || 
               element.className.includes('reveal-stagger') || 
               element.className.includes('reveal-delay')) {
      element.style.transform = 'translateY(24px)';
    } else {
      element.style.transform = 'translateY(24px)'; // default
    }
  }

  // Handle intersection events
  function handleIntersection(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        revealElement(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }

  // Reveal element (same as original inline script)
  function revealElement(element) {
    let animationDelay = 0;
    
    // Handle stagger timing
    if (element.className.includes('reveal-stagger-1')) animationDelay = 0;
    else if (element.className.includes('reveal-stagger-2')) animationDelay = 50;
    else if (element.className.includes('reveal-stagger-3')) animationDelay = 100;
    else if (element.className.includes('reveal-stagger-4')) animationDelay = 150;
    else if (element.className.includes('reveal-stagger-5')) animationDelay = 200;
    else if (element.className.includes('reveal-stagger-6')) animationDelay = 250;
    else if (element.className.includes('reveal-stagger-7')) animationDelay = 300;
    else if (element.className.includes('reveal-stagger-8')) animationDelay = 350;
    else if (element.className.includes('reveal-stagger-9')) animationDelay = 400;
    else if (element.className.includes('reveal-stagger-10')) animationDelay = 450;
    
    // Handle delay timing
    else if (element.className.includes('reveal-delay-1')) animationDelay = 100;
    else if (element.className.includes('reveal-delay-2')) animationDelay = 200;
    else if (element.className.includes('reveal-delay-3')) animationDelay = 300;
    else if (element.className.includes('reveal-delay-4')) animationDelay = 400;
    else if (element.className.includes('reveal-delay-5')) animationDelay = 500;

    // Apply animation with delay (exact same as original inline script)
    setTimeout(function() {
      element.style.visibility = 'visible';
      element.style.opacity = '1';
      element.style.transform = 'translateY(0) translateX(0)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    }, animationDelay);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();