// eslint-disable-next-line spaced-comment
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = function autoPreferDefaultExport(im, altn) {
  if ((im && typeof im) !== 'object') { return im; }
  const df = im.default;
  if (df === undefined) { return im; }
  if ((altn && im[altn] && typeof altn) === 'string') { return im[altn]; }
  const other = Object.keys(im).filter(k => (k !== 'default'));
  if (!other.length) { return df; }
  return im;
};
