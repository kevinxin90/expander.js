[![Build Status](https://travis-ci.com/kevinxin90/call-apis.js.svg?branch=master)](https://travis-ci.com/kevinxin90/call-apis.js)
<a href='https://coveralls.io/github/kevinxin90/expander.js?branch=master'><img src='https://coveralls.io/repos/github/kevinxin90/expander.js/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href="https://github.com/kevinxin90/expander.js#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
<a href="https://www.npmjs.com/package/@biothings-explorer/expander" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@biothings-explorer/expander.svg">
  </a>

# Welcome to @biothings-explorer/expander 👋

A nodejs module to expand biomedical entities to include its children or derivatives.

### 🏠 [Homepage](https://github.com/kevinxin90/expander.js)

## Install

```sh
npm i @biothings-explorer/expander
```

## Usage

- Import and Initialize

    ```javascript
    const expander = require("@biothings-explorer/expander")
    ```

- Expand Disease IDs

    ```javascript
    const ep = new expander();
    let res = await ep.query("Disease", ["MONDO:0016575", "MONDO:0015159"]);
    console.log(res);
    // [{"id": {"identifier": "MONDO:0010125"}, "db_ids": {"MONDO": ..., "DOID": ...}}, {"id": {"MONDO:0010092"}...}]
    ```

## Run tests

```sh
npm run test
```

## Author

👤 **Jiwen Xin**

* Website: http://github.com/kevinxin90
* Github: [@kevinxin90](https://github.com/kevinxin90)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kevinxin90/expander.js/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jiwen Xin](https://github.com/kevinxin90).<br />
This project is [ISC](https://github.com/kevinxin90/expander.js/blob/master/LICENSE) licensed.