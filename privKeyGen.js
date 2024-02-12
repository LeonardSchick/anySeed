
function toUTF8(inputString) {
    const encoder = new TextEncoder();
    const utf8Bytes = encoder.encode(inputString);
    return utf8Bytes;
}

function getHashRounds(seed, pass) {
    const x = seed.length; 
    const y = pass.length; 
    return x * y; // Product of character counts as the number of hash rounds
}

function hash(data, rounds) {
    let hash = data;
    for (let i = 0; i < rounds; i++) {
        hash = keccak256(hash);
    }
    return hash;
}

function calculatePrivateKey(combinedHash) {
    // Curve order of Secp256k1
    const n = BigInt('0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141');
    // Get hex-digit within range of the curve (0, n)
    let d = BigInt('0x' + combinedHash) % n;
    if (d === BigInt(0)) {
        return null;
    } else {
        return d.toString(16);
    }
}

function generatePrivateKey(seed, pass) {
    // Convert input strings to UTF8 for data uniformity
    const UTF8Seed = toUTF8(seed);
    const UTF8Pass = toUTF8(pass);

    // Hash seed and pass separately for r rounds
    const r = getHashRounds(UTF8Seed, UTF8Pass);
    console.log("r: " + r)
    const hashSeed = hash(UTF8Seed, r);
    const hashPass = hash(UTF8Pass, r);
    
    // Hash the concatenated hash for r rounds
    const combinedHash = hashSeed + hashPass
    const stretchedHash = hash(combinedHash, r)

    // Get hash (hex-digit) within range of the curve (0, n)
    const privateKey = calculatePrivateKey(stretchedHash);
    return privateKey;
}


