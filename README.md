# Private Key Generator

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-%E2%9C%93-orange.svg)
![CSS3](https://img.shields.io/badge/CSS3-%E2%9C%93-blue.svg)

## Overview

**A Password-Based Key Derivation Function** is used client-side to securely generate private keys for blockchain applications using the Secp256k1 curve, which is used by blockchains such as Bitcoin and Ethereum. By leveraging a simple password-based derivation function (PBKDF) with key stretching and a pseudo-salt mechanism, this generator reduces some common risks associated with traditional brain wallets, making it more resistant to brute force, such as dictionary and rainbow table attacks.

## Features

- **Secure Key Generation**: Utilizes the Secp256k1 curve to generate private keys compatible with major blockchains.
- **Key Stretching**: Enhances security by performing multiple hashing rounds based on the length of the seed and password.
- **Pseudo-Salt Mechanism**: Adds an additional layer of security to prevent precomputed attacks.
- **Client-Side Execution**: All operations are performed locally in the browser, ensuring that your seed and password never leave your device.
- **Offline Capability**: Can be used entirely offline by disconnecting from the internet after loading the page.
- **User-Friendly Interface**: Simple and intuitive design with easy-to-use input fields and copy functionality.

## How It Works

1. **Input**: Users provide a seed (e.g., a quote, poem, or text) and a password.
2. **Encoding**: Both seed and password are encoded to UTF-8 to ensure data uniformity.
3. **Hashing**:
   - Both the seed and password are hashed separately using the Keccak-256 algorithm for a number of rounds calculated as `r = seed.length * password.length²`.
   - The resulting hashes are concatenated and hashed again for `r` additional rounds.
4. **Private Key Calculation**: The final hash is converted into a private key within the valid range of the Secp256k1 curve.
5. **Output**: The generated private key is displayed to the user, who can then copy it to the clipboard.

### Security 

- **Key Stretching**: By having the number of hashing rounds as a function of the input lengths, the generator makes brute-force attacks significantly more time-consuming.
- **Pseudo-Salt**: Incorporates a mechanism similar to salting to further protect against precomputed attacks, ensuring that even if two users use the same seed text, their respective passwords act as a salt, resulting in unique private keys.

## Demo

![Private Key Generator Screenshot](screenshot.png) <!-- Replace with actual screenshot if available -->

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge, Safari)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/LeonardSchick/anySeed.git
