# How to start

Install the project's dependencies:

```bash
$ npm install
```

In order to start the seed use:

```bash
$ npm start
```
_Does not rely on any global dependencies._

# How to build

**Note** that AoT compilation requires **node v6.5.0 or higher** and **npm 3.10.3 or higher**.

Prod build for Staging:

```bash
$ npm run build.staging
```

Prod build for UAT:

```bash
$ npm run build.uat
```

Prod build for Amazon:

```bash
$ npm run build.amazon
```

# Configuration

Default application server configuration

```js
var PORT             = 5555;
var LIVE_RELOAD_PORT = 4002;
var DOCS_PORT        = 4003;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --reload-port 4000 --base /my-app/
```

# Back-end servers:

#### Dev server
```js
    // Internal
    const HTTP =         'http://192.168.21.226:9000';
    const WEBSOCKET =    'ws://192.168.21.226:9000';
```
```js
    // External
    const HTTP =         'http://113.160.225.76:8745';
    const WEBSOCKET =    'ws://113.160.225.76:8745';
```

#### QA server
```js
    // Internal
    const HTTP =         'http://192.168.21.226:8000';
    const WEBSOCKET =    'ws://192.168.21.226:8000';
```
```js
    // External
    const HTTP =         'http://113.160.225.76:8753';
    const WEBSOCKET =    'ws://113.160.225.76:8753';
```

#### UAT server
```js
    // Internal
    const HTTP =         'http://192.168.21.226:7000';
    const WEBSOCKET =    'ws://192.168.21.226:7000';
```
```js
    // External
    const HTTP =         'http://113.160.225.76:8743';
    const WEBSOCKET =    'ws://113.160.225.76:8743';
```

#### Amazon server
```js
    const HTTP =         'https://api.freakick.com';
    const WEBSOCKET =    'wss://api.freakick.com';
```
