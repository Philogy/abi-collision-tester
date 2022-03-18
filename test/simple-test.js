const { hasCollisions } = require('../src/abi-collision-tester')
const { ethers } = require('hardhat')

// example:
const abi1 = require('../abis/priv-abi.json')
const abi2 = require('../abis/pub-abi.json')

describe('Simple Test', () => {
  it('detects collides', async () => {
    hasCollisions([
      {
        name: 'Contract1',
        interfce: new ethers.utils.Interface(abi1)
      },
      {
        name: 'Contract2',
        interfce: new ethers.utils.Interface(abi2)
      }
    ])
  })
})
