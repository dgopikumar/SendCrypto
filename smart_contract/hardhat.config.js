require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks:{
    goerli:{
      url:'https://eth-goerli.alchemyapi.io/v2/9awL2AbL6tuw_85rINwXy0uGwQwot_Dz',
      accounts:['a538950679876316330364e5b6b9a313df462668217fd739b1e8aff3872f9043']
    }
  }
};
