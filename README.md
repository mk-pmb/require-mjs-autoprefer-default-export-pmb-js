
<!--#echo json="package.json" key="name" underline="=" -->
require-mjs-autoprefer-default-export-pmb
=========================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Automatically prefer the `default` export of a `require()`d .mjs file
<!--/#echo -->



API
---

This module exports one function:

### autoPreferDefaultExport(imported)

If `imported` is an object with only one property, named `default`,
returns `imported.default`, else return `imported`.



Usage
-----

```javascript
const autoDefault = require('require-mjs-autoprefer-default-export-pmb');
const libCool = autoDefault(require('./lib/cool'));
```


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
