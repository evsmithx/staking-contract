let simpleStakePool = artifacts.require("simpleStakePool");
let ERC20Token = artifacts.require("CrowdsaleToken");
let Auction = artifacts.require("dutchStaking");

module.exports = function(deployer) {
  deployer.deploy(simpleStakePool, ERC20Token.address, Auction.address);
};
