require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remind concert hunt infant frame skill'; 
let testAccounts = [
"0x5dcd686b664f48d7bfe04cadb00744849d79866ffd89d82adda6a9c9a1f85a78",
"0x721bd28b06ecee9576e04a61972d09dceb1fc5f71d84644822662bd383656a38",
"0xb4f769a5997de14590a2b95205b2772c2ec9c34117bb0c9c1c74cbd1a4ec17bb",
"0xb24e136cea6d6a1f524fa0e929ca652d73c0540ac07fe23ddf251ec23ddd2c20",
"0x6157b256b9a5a95662ff609b1d11ad6ba3f259508b089244e5d78f5bc44b65cb",
"0xb85d533bf0ac51de11f8a812a87ad8e60aa81eeacbacb7ca2459bf8eb66aaacc",
"0xa0def834421e5eb626fce8eea9d0204ebb94d6679ba000c2ac71225b601ceaed",
"0x7e90854baf9717355b3d8264d17d9f461b9d4bc6275fb28740c6ca413e7eed6a",
"0x574f7eaa6ed799adc4729e237eea4982d9adab427622d99b1e1854eadfca283b",
"0x203399bdb52fc63600a6f2e64fe3a6e20f8ceff991bb03829c399c9f8caeb8e3"
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
            version: '^0.8.0'
        }
    }
};

