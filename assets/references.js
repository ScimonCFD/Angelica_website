(function () {
  var refs = [
    'Colebrook, C. F. (1939). Turbulent flow in pipes, with particular reference to the transition region between the smooth and rough pipe laws. <em>Journal of the Institution of Civil Engineers</em>, 11(4), 133–156.',
    'Moukalled, F., Mangani, L., &amp; Darwish, M. (2016). <em>The Finite Volume Method in Computational Fluid Dynamics: An Advanced Introduction with OpenFOAM® and Matlab®</em>. Springer.',
    'Munson, B. R., Okiishi, T. H., Huebsch, W. W., &amp; Rothmayer, A. P. (2013). <em>Fundamentals of Fluid Mechanics</em> (7th ed.). Wiley.',
    'Patankar, S. V. (1980). <em>Numerical Heat Transfer and Fluid Flow</em>. Hemisphere Publishing.',
    'Rossman, L. A. (2000). <em>EPANET 2 Users Manual</em>. U.S. Environmental Protection Agency, National Risk Management Research Laboratory.',
    'Fujiwara, O., &amp; Khang, D. B. (1990). A two-phase decomposition method for optimal design of looped water distribution networks. <em>Water Resources Research</em>, 26(4), 539–549.',
    'Vuta, L. I., &amp; Piraianu, V. (2008). InfoWorks WS and EPANET v2 — Modeling the water distribution networks. <em>Scientific Bulletin of Politehnica University of Bucharest, Series D: Mechanical Engineering</em>, 70(4), 91–102.',
    'Beggs, H. D., &amp; Robinson, J. R. (1975). Estimating the viscosity of crude oil systems. <em>Journal of Petroleum Technology</em>, 27(09), 1140–1141.',
    'Cengel, Y. A., &amp; Ghajar, A. J. (2015). <em>Heat and Mass Transfer: Fundamentals and Applications</em> (5th ed.). McGraw-Hill Education.',
  ];

  var root = document.getElementById('references-root');
  if (!root) return;

  var items = refs.map(function (r, i) {
    return '<li id="ref-' + (i + 1) + '">' + r + '</li>';
  }).join('\n        ');

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
