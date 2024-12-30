/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var uniform = require( '@stdlib/random-base-uniform' );
var EPS = require( '@stdlib/constants-float32-eps' );
var abs = require( '@stdlib/math-base-special-abs' );
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var acscf = require( './../lib' );


// FIXTURES //

var negative = require( './fixtures/julia/negative.json' );
var positive = require( './fixtures/julia/positive.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof acscf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the arccosecant (negative values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = negative.x;
	expected = negative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acscf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.3 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arccosecant (positive values)', function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = positive.x;
	expected = positive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = acscf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 1.3 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', function test( t ) {
	var v = acscf( NaN );
	t.equal( isnanf( v ), true, 'returns expected value' );
	t.end();
});

tape( 'the function returns `NaN` if provided a nonpositive value greater than `-1`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = uniform( -1.0 - EPS, 0.0 );
		t.equal( isnanf( acscf( v ) ), true, 'returns expected value when provided '+v );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a nonnegative value less than `+1`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = uniform( 0.0, 1.0 + EPS );
		t.equal( isnanf( acscf( v ) ), true, 'returns expected value when provided '+v );
	}
	t.end();
});
