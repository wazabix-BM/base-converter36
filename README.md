# base-converter36

> This package will allow you to convert a number into any base number from 2 to 36

## Install

>  $ npm i base-converter36

## Usage

**<code>new Conversion (<b>[number], [base]</b>).toBase (<b>[base]</b>)</code>**

## Exemple

```js
const {
  Conversion
} = require ('base-converter36');

let csl = console.log;

csl (new Conversion ('6c61', 16 /* the base of '6c61' */).toBase (36)); /* 6c61 in "hexadecimal" code to convert in "base36" */
/* Expected output
* "lep"
*/
```

## MIT License

***Copyright 2020 wazabix***

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
"# base-converter36" 
