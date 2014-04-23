store-toggle
============

  Enable or disable a key into a **[datastore](http://github.com/bredele/datastore)**-like object.

## Installation

  Install with [component(](http://component.io):

    $ component install bredele/store-toggle

  Install with [nodejs)](http://nodejs.org):

    $ npm install store-toggle


## API

```js
var toggle = require('store-toggle');

var store = new Store();
store.use(toggle);
```

  > a **datastore-like** object has at least a `set` handler to set an object's key with a value

### .enable(str)

  Set a datastore key to true.

```js
store.enable('admin');
store.get('admin');
// => true
```

### .diable(str)

  Set a datastore key to false.

```js
store.disable('admin');
store.get('admin');
// => false
```

### scope

  The default scope of store-toggle is the datastore itself. However you can change the scope (datastore-like) as following:

```js
var store = new Store();
store.use(toggle, scope);
```

  > useful to use this plugin with modules that abstract datastore (like **[wall](http://github.com/bredele/wall)** for example).

## License

  The MIT License (MIT)

  Copyright (c) 2014 <Olivier Wietrich> olivier.wietrich@gmail.com

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.