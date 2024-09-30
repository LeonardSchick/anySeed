# Private Key Generator
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-%E2%9C%93-orange.svg)
![CSS3](https://img.shields.io/badge/CSS3-%E2%9C%93-blue.svg)

## Overview
**A Password-Based Key Derivation Function** is used client-side to securely generate private keys for blockchain applications using the Secp256k1 curve, which is used by blockchains such as Bitcoin and Ethereum. By leveraging a simple password-based derivation function (PBKDF) with key stretching and a pseudo-salt mechanism, this generator reduces some common risks associated with traditional brain wallets, making it more resistant to brute force, such as dictionary and rainbow table attacks.


## Features
- **Custom Seed & Password:** Use any text and password of choice.
- **Secure Hashing:** Uses Keccak-256 for multiple rounds based on input size.
- **Offline Usage:** All operations are done in the browser, no server required.
- **Blockchain Compatible:** Generates private keys for use with Secp256k1-based systems.

## How the seed and password is turned into a private key
1. Convert the seed and password to UTF-8 for a standardized input.
2. Hash (keccak-256) the encoded seed and password separately r amount of times, where r = seed.length * password.length 2.
3. Concatenate the hashed seed with the hashed password and hash the concatenated hashes for r rounds again.
4. Calculate the private key d by bringing the resulting hash within the interval 1 to n (order of curve), hash mod n = d.

## Usage
1. **Enter Seed:** Input a quote, poem, or any text as your seed.
2. **Enter Password:** Provide a secure password.
3. **Generate Keys:** Click "Generate Keys" to create your private key.
4. **Copy to Clipboard:** Click the key to copy it
5. **Import key into wallet of choice:** Works with any blockchain that uses the Secp256k1 curve. 

## Installation
Clone the repo and open `index.html` in your browser. No extra setup required.

```bash
git clone https://github.com/LeonardSchick/anySeed.git
cd anySeed
