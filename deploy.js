// deploy code will go here

const HDWallletProvider = require('@truffle/hdwallet-provider');
const { linkBytecode } = require('solc');
const Web3 = require('web3');
const { interface, bytecode } = require ('./compile');

const provider = new HDWallletProvider(
  'pelican swamp slush sell bamboo swear submit warfare lab brief few portion', 'https://rinkeby.infura.io/v3/f3f1cdc7a4364b35b6124fa62865918f'
  );

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attenmpting to deploy from account:', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there !'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
deploy();
