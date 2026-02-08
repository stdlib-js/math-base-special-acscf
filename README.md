<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# acscf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [arccosecant][arccosecant] of a single-precision floating-point number.



<section class="usage">

## Usage

To use in Observable,

```javascript
acscf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-acscf@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-acscf/tags). For example,

```javascript
acscf = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-acscf@v0.1.2-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var acscf = require( 'path/to/vendor/umd/math-base-special-acscf/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-acscf@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.acscf;
})();
</script>
```

#### acscf( x )

Computes the [arccosecant][arccosecant] of a single-precision floating-point number.

```javascript
var v = acscf( 1.0 );
// returns ~1.57

v = acscf( 3.141592653589793 );
// returns ~0.32

v = acscf( -3.141592653589793 );
// returns ~-0.32
```

If `|x| < 1`, the function returns `NaN`.

```javascript
var v = acscf( 0.5 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-acscf@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var x = uniform( 100, 1.1, 5.1, {
    'dtype': 'float32'
});

logEachMap( 'acscf(%0.4f) = %0.4f', x, acscf );

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/acsc`][@stdlib/math/base/special/acsc]</span><span class="delimiter">: </span><span class="description">compute the arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/acsch`][@stdlib/math/base/special/acsch]</span><span class="delimiter">: </span><span class="description">compute the hyperbolic arccosecant of a number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/asecf`][@stdlib/math/base/special/asecf]</span><span class="delimiter">: </span><span class="description">compute the inverse (arc) secant of a single-precision floating-point number.</span>
-   <span class="package-name">[`@stdlib/math-base/special/asinf`][@stdlib/math/base/special/asinf]</span><span class="delimiter">: </span><span class="description">compute the arcsine of a single-precision floating-point number.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-acscf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-acscf

[test-image]: https://github.com/stdlib-js/math-base-special-acscf/actions/workflows/test.yml/badge.svg?branch=v0.1.2
[test-url]: https://github.com/stdlib-js/math-base-special-acscf/actions/workflows/test.yml?query=branch:v0.1.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-acscf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-acscf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-acscf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-acscf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-acscf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-acscf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-acscf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-acscf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-acscf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-acscf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-acscf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-acscf/main/LICENSE

[arccosecant]: https://en.wikipedia.org/wiki/Inverse_trigonometric_functions

<!-- <related-links> -->

[@stdlib/math/base/special/acsc]: https://github.com/stdlib-js/math-base-special-acsc/tree/umd

[@stdlib/math/base/special/acsch]: https://github.com/stdlib-js/math-base-special-acsch/tree/umd

[@stdlib/math/base/special/asecf]: https://github.com/stdlib-js/math-base-special-asecf/tree/umd

[@stdlib/math/base/special/asinf]: https://github.com/stdlib-js/math-base-special-asinf/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
