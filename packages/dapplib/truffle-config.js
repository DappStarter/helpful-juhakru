require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth prefer public gesture fortune outer gasp'; 
let testAccounts = [
"0x0a7739503c0b18659af69c7a4957697883a4406bf9963de05ca2e5eb908c17dd",
"0x294b6bc9be6ab6c4cffe7a1702fdd4b1728e15763e541a355cd7f211acc89e3a",
"0x4509fb7db7585a403000b4b99fde314b3c0799d1b60d31beee58d998c9553478",
"0x40431ca492af331897be439276093a679b613e62363e1fd1f32dde193f79da43",
"0xfe9bb4e5ab8dd4324d8cf878c09085c3ab49b3f4bcc9da3c6953625ac471abb9",
"0x6ecbba1410cd4311d4bedb4b3fe09801e40a92be1841ed98e4b74b07adc51a66",
"0x6d63529a562613a22e7019c590c789474a9df90e6601ad15e3ca27a775696890",
"0xec489f2b3012a3a07e3d11d2e7bb3a175fc26beb4ec6b9270b8f0d562877847b",
"0xab01124c9f0843da10ab57cd79e44cc5e9deba48e2bbbf372e39f8a75df7bd38",
"0x7ac629dccdb8230c23e3da387214c34431ec321b1e5128f79ba1ad5a91f20be4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
