# rsa-pedagogic

A pedagogic implementation of RSA in Typescript.

## Design

The code is primarily divided into the `encoding` and `rsa` sections - with utility and driver code also existing. Each function is in its own file, documented with JSDoc syntax.

To simplify encryption, we represent each character as a part of a single "big number" instance. We then perform modulo arithmetic as needed on that bignum to encrypt and decrypt messages. Because this is only a learning implementation, only A-Z messages are supported.

As well, utility code is included that generates public and private keys.

## Running Tests

```sh
git clone git@github.com:poteat/rsa-pedagogic.git
cd rsa-pedagogic
npm test
```
