// deploy code will go here

const HDWallletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecoe } = require ('./conmpile');

const provider = new HDWallletProvider(
  'pelican swamp slush sell bamboo swear submit warfare lab brief few portion', 
  https://rinkeby.infura.io/v3/f3f1cdc7a4364b35b6124fa62865918f
);

const web3 = new Web3(provider);
