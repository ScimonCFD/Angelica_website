(function () {
  var refs = [
    'Colebrook, C. F. (1939). Turbulent flow in pipes, with particular reference to the transition region between the smooth and rough pipe laws. <em>Journal of the Institution of Civil Engineers</em>, 11(4), 133–156.',
    'Munson, B. R., Okiishi, T. H., Huebsch, W. W., &amp; Rothmayer, A. P. (2013). <em>Fundamentals of Fluid Mechanics</em> (7th ed.). Wiley.',
    'Patankar, S. V. (1980). <em>Numerical Heat Transfer and Fluid Flow</em>. Hemisphere Publishing.',
    'Rossman, L. A. (2000). <em>EPANET 2 Users Manual</em>. U.S. Environmental Protection Agency, National Risk Management Research Laboratory.',
  ];

  var root = document.getElementById('references-root');
  if (!root) return;

  var items = refs.map(function (r) { return '<li>' + r + '</li>'; }).join('\n        ');

  root.innerHTML =
    '<section class="section ref-section" id="references">' +
      '<div class="section-head">' +
        '<p class="eyebrow">References</p>' +
        '<h2>Sources and further reading.</h2>' +
      '</div>' +
      '<ol class="ref-list">' +
        '\n        ' + items + '\n      ' +
      '</ol>' +
    '</section>';
})();
