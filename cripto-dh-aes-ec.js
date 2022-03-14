console.log("\n- ---[ Elliptic Curve Diffie-Hellman and AES Example ]--- -");
console.log("\n");

var crypto = require('crypto');
var assert = require('assert');

var CURVE_ALGORTHM = 'wap-wsg-idm-ecid-wtls11';

console.log("Elliptic Curve Algorithm: " + CURVE_ALGORTHM);
console.log("\n");

// Generate alice's keys...
var alice = crypto.createECDH(CURVE_ALGORTHM);
var aliceKey = alice.generateKeys();

// Generating bob's keys...
var bob = crypto.createECDH(CURVE_ALGORTHM);
var bobKey = bob.generateKeys();

// Exchange and generate secret...
var aliceSecret = alice.computeSecret(bobKey);
var bobSecret = bob.computeSecret(aliceKey);

assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));

console.log("alice's Public Key: " + alice.getPublicKey('hex'));
console.log("alice's Private Key: " + alice.getPrivateKey('hex'));

console.log("\n");

console.log("bob's Public Key: " + bob.getPublicKey('hex'));
console.log("bob's Private Key: " + bob.getPrivateKey('hex'));

console.log("\n");

aliceSecret = aliceSecret.toString('hex');
bobSecret = bobSecret.toString('hex');

console.log('alice secret: ' + aliceSecret);
console.log('bob secret: ' + bobSecret);

console.log("\n");

// Using the generated shared Secrets to cipher/decipher messages between alice and bob
var AES256 = "aes256";

var aliceCipher = crypto.createCipher(AES256, aliceSecret);
var aliceDecipher = crypto.createDecipher(AES256, aliceSecret);

var bobCipher = crypto.createCipher(AES256, bobSecret);
var bobDecipher = crypto.createDecipher(AES256, bobSecret);

// alice ciphers a message for bob
var msg1 = "Hey bob, I'm alice";
var eMsg1 = aliceCipher.update(msg1, 'utf8', 'hex');
eMsg1 += aliceCipher.final('hex');
console.log("alice says (clear): " + msg1);
console.log("alice says (ciphered): " + eMsg1);

console.log('\n');

// bob deciphers alice's message
var dMsg1 = bobDecipher.update(eMsg1, 'hex', 'utf8');
dMsg1 += bobDecipher.final('utf8');
console.log("bob receives (ciphered): " + eMsg1);
console.log("bob receives (deciphered): " + dMsg1);

console.log('\n');

// bob ciphers a message for alice
var msg2 = "Hey alice, how are you doing?";
var eMsg2 = bobCipher.update(msg2, 'utf8', 'hex');
eMsg2 += bobCipher.final('hex');
console.log("bob says (clear): " + msg2);
console.log("bob says (ciphered): " + eMsg2);

console.log('\n');

// alice deciphers bob's message
var dMsg2 = aliceDecipher.update(eMsg2, 'hex', 'utf8');
dMsg2 += aliceDecipher.final('utf8');
console.log("alice receives (ciphered): " + eMsg2);
console.log("alice receives (deciphered): " + dMsg2);