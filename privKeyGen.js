const crypto = require('crypto');

function hexlifyString(inputString) {
    // Step 1: Convert input string to hexadecimal
    return Buffer.from(inputString, 'utf8').toString('hex');
}

function hashHexadecimal(hexData, iterations) {
    // Step 2 & 3: Hash the hexadecimal data for a specified number of iterations
    for (let i = 0; i < iterations; i++) {
        let hash = crypto.createHash('sha3-256');
        hash.update(Buffer.from(hexData, 'hex'));
        hexData = hash.digest('hex');
    }
    return hexData;
}

function calculatePrivateKey(hashSeed, hashSalt, n) {
    // Step 4: Calculate the private key from hashed seed and salt
    const combinedHash = hashSeed + hashSalt;
    let d = BigInt('0x' + combinedHash) % n;
    if (d === BigInt(0)) {
        return "failed";
    } else {
        return d.toString(16);
    }
}

function generatePrivateKey(seed, salt) {
    // Convert seed and salt to hexadecimal
    const seedHex = hexlifyString(seed);
    const saltHex = hexlifyString(salt);
    
    // Determine the number of iterations (with a practical limit)
    const x = parseInt(saltHex, 16) % 1000; // Limiting the value of x for practical execution time
    
    // Hash the seed and salt
    const hashSeed = hashHexadecimal(seedHex, x);
    const hashSalt = hashHexadecimal(saltHex, x);
    
    // Secp256k1 curve's order
    const n = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
    
    // Calculate the private key
    const privateKey = calculatePrivateKey(hashSeed, hashSalt, n);
    return privateKey;
}

// Example usage
const privateKey = generatePrivateKey("example seed text", "unique salt");
console.log(privateKey);
