// eslint-disable-next-line spaced-comment
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = function autoPreferDefaultExport(imported) {
  if ((imported && typeof imported) !== 'object') { return imported; }
  const names = Object.keys(imported);
  if (names.length !== 1) { return imported; }
  if (names[0] === 'default') { return imported.default; }
  return imported;
};
