const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Constructor function OOP programming
const web3 = new Web3(ganache.provider()); // Instance of new web3, multiple is possible but mostly using only one

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
let initialString = 'Hi there!';

beforeEach(async () => {
  // Get a list of all accounts 
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [initialString] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    // console.log(inbox);
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, initialString);
  });

  it('modifies the message', async () => {
    await inbox.methods.setMessage('Test new message').send({ from: accounts[0], gas : '1000000' });
    const message = await inbox.methods.message().call();
    console.log(message);
    assert.equal(message, 'Test new message');
  });
});
