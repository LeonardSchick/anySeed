
function toUTF8(inputString) {
    const encoder = new TextEncoder();
    const utf8Bytes = encoder.encode(inputString);
    return utf8Bytes;
}


function hash(data, rounds) {
    let hash = data;
    for (let i = 0; i < rounds; i++) {
        hash = keccak256(hash);
    }
    return hash;
}

function getHashRounds(seed, salt) {
    const x = seed.length; 
    const y = salt.length; 
    return x * y; // Product of character counts as the number of hash rounds
}


function calculatePrivateKey(hashSeed, hashSalt) {
    // Curve order of Secp256k1
    const n = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
    const combinedHash = hashSeed + hashSalt;
    let d = BigInt('0x' + combinedHash) % n;
    if (d === BigInt(0)) {
        return null;
    } else {
        return d.toString(16);
    }
}

function generatePrivateKey(seed, salt) {
    const UTF8Seed = toUTF8(seed);
    const UTF8Salt = toUTF8(salt);

    const r = getHashRounds(UTF8Seed, UTF8Salt);
    const hashSeed = hash(UTF8Seed, r);
    const hashSalt = hash(UTF8Salt, r);
    
    const privateKey = calculatePrivateKey(hashSeed, hashSalt);
    return privateKey;
}


