# array-to-object-iterable

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)  [![Build Status](https://travis-ci.org/delvedor/array-to-object-iterable.svg?branch=master)](https://travis-ci.org/delvedor/array-to-object-iterable)

If you have an iterable that returns an array of `[key, value]` and instead you need an object `{ key: value }` this module is for you!

## Install
```
npm i array-to-object-iterable --save
```

## Usage
```js
const arrayToObjectIterable = require('array-to-object-iterable')
const assert = require('assert')

const map = new Map()
map.set('key', 'value')

for (var entry of arrayToObjectIterable(map.entries())) {
  assert.ok(entry.key)
  assert.equal(entry.key, 'value')
}
```

## Contributing
If you feel you can help in any way, be it with examples, extra testing, or new features please open a pull request or open an issue.

The code follows the Standard code style.  
[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## License
**[MIT](https://github.com/delvedor/array-to-object-iterable/blob/master/LICENSE)**

*The software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and non infringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.*

Copyright © 2017 Tomas Della Vedova
