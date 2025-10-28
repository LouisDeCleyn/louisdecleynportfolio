

(function() {
  'use strict';
  
  // Respect reduced motion preference
  const respectReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (respectReducedMotion) {
    return;
  }
  
  let cursor = null;
  let cursorDot = null;
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let isHovering = false;
  
  const followSpeed = 0.15;
  
  // Cursor sizes
  const normalRingSize = 32;
  const hoverRingSize = 48;
  const normalDotSize = 12;
  const hoverDotSize = 20;
  
  function init() {
    // Create cursor elements
    cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: ${normalRingSize}px;
      height: ${normalRingSize}px;
      border: 2px solid var(--color-surface);
      border-radius: 50%;
      pointer-events: none;
      z-index: 99999;
      opacity: 1;
      mix-blend-mode: difference;
      transition: width 0.3s ease, height 0.3s ease, opacity 0.3s ease;
      margin-left: -${normalRingSize / 2}px;
      margin-top: -${normalRingSize / 2}px;
    `;
    
    cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    cursorDot.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: ${normalDotSize}px;
      height: ${normalDotSize}px;
      background-color: var(--color-surface);
      border-radius: 50%;
      pointer-events: none;
      z-index: 100000;
      opacity: 1;
      mix-blend-mode: difference;
      transition: width 0.2s ease, height 0.2s ease, opacity 0.3s ease;
      margin-left: -${normalDotSize / 2}px;
      margin-top: -${normalDotSize / 2}px;
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    // Track mouse movement
    document.addEventListener('mousemove', handleMouseMove);
    
    // Track hover states
    setupHoverListeners();
    
    // Start animation loop
    animate();
  }
  
  function handleMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update dot position immediately
    if (cursorDot) {
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    }
  }
  
  function setupHoverListeners() {
    const hoverElements = 'a, button, [role="button"], input, textarea, select, .clickable';
    
    document.addEventListener('mouseover', function(e) {
      const target = e.target.closest(hoverElements);
      if (target) {
        isHovering = true;
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
        
        // Apply hover styles with proper centering
        cursor.style.width = `${hoverRingSize}px`;
        cursor.style.height = `${hoverRingSize}px`;
        cursor.style.marginLeft = `-${hoverRingSize / 2}px`;
        cursor.style.marginTop = `-${hoverRingSize / 2}px`;
        cursor.style.opacity = '0.8';
        
        cursorDot.style.width = `${hoverDotSize}px`;
        cursorDot.style.height = `${hoverDotSize}px`;
        cursorDot.style.marginLeft = `-${hoverDotSize / 2}px`;
        cursorDot.style.marginTop = `-${hoverDotSize / 2}px`;
      }
    });
    
    document.addEventListener('mouseout', function(e) {
      const target = e.target.closest(hoverElements);
      if (target) {
        isHovering = false;
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
        
        // Reset to normal styles with proper centering
        cursor.style.width = `${normalRingSize}px`;
        cursor.style.height = `${normalRingSize}px`;
        cursor.style.marginLeft = `-${normalRingSize / 2}px`;
        cursor.style.marginTop = `-${normalRingSize / 2}px`;
        cursor.style.opacity = '0.6';
        
        cursorDot.style.width = `${normalDotSize}px`;
        cursorDot.style.height = `${normalDotSize}px`;
        cursorDot.style.marginLeft = `-${normalDotSize / 2}px`;
        cursorDot.style.marginTop = `-${normalDotSize / 2}px`;
      }
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', function() {
      cursor.style.opacity = '0';
      cursorDot.style.opacity = '0';
    });
    
    document.addEventListener('mouseenter', function() {
      cursor.style.opacity = isHovering ? '0.8' : '0.6';
      cursorDot.style.opacity = '1';
    });
  }
  
  function animate() {
    cursorX += (mouseX - cursorX) * followSpeed;
    cursorY += (mouseY - cursorY) * followSpeed;
    
    if (cursor) {
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    }
    
    requestAnimationFrame(animate);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();