function getScrollbarWidth() {
  // get width of element w/o scroll bar
  let outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  document.body.appendChild(outer);
  const widthNoScroll = outer.offsetWidth;

  // get width of element w/ scroll bar
  outer.style.overflow = 'scroll';
  let inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  const widthWithScroll = inner.offsetWidth;

  // clean up
  outer.parentNode.removeChild(outer);

  return (widthNoScroll - widthWithScroll).toString(10) + 'px';
}

if (!window.scrollbarWidth) {
  window.scrollbarWidth = getScrollbarWidth();
}

export default window.scrollbarWidth;
