const EMaxCoin = artifacts.require('EMaxCoin');

 
const { prepareUpgrade, deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
    await deployProxy(EMaxCoin, [], { deployer, initializer: 'initialize' });
    const v1Deployed = await EMaxCoin.deployed();
  
};
