const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // Constructor function OOP programming
const web3 = new Web3(ganache.provider()); // Instance of new web3, multiple is possible but mostly using only one

/* 

MOCHA Testing overview

It is a test running framework to test any type of JavaScript code. Small set of fx to understand. 
3 fx: 
it: run a test and make an assertion
describe: groups together 'it' functions
beforeEach: execute some general setup code

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car ; 

console.log('Initializing test...');

beforeEach(() => {
  car = new Car();  
});

describe('Car', () => {
  it('can park', () => {
    assert.equal(car.park(), 'stopped');
  })

  it('can drive', () => {
    assert.equal(car.drive(), 'vroom');
  })
});

*/

beforeEach(() => {
  // Get a list of all accounts 
  web3.eth.getAccounts()
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
    });

  // Use one of those accounts to deploy the contract

});

describe('Inbox', () => {
  it('deploys a contract', () => {});
});
