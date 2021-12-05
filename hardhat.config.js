/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0xcd91ac13cd3089b1db4d50e7763ce411bc1cdc1d47b6454310e3d05feaf12dff","balance":"1000000000000000000000"},{"privateKey":"0xac644a143e85490f43ddae62715de525d1d07af4ccd6754f2af545eff0d1b5a9","balance":"1000000000000000000000"},{"privateKey":"0xac8d1c1b1a12d1dd595a86e9f241b1d49cf29f4dfc3023307e03600f440319f5","balance":"1000000000000000000000"},{"privateKey":"0xa953c53ff7a2b3a859ef00de17692f21019e43fb2e8d2f762d5ec0be2f7b3496","balance":"1000000000000000000000"},{"privateKey":"0x6fecdeae698a14bfcd7850f5f044e2ad539900f27e4b8c7e2e673953ea195df2","balance":"1000000000000000000000"},{"privateKey":"0xb191856069e8ac54feff4490f9ccbde56fb9964f19e39289a277572c72049c5b","balance":"1000000000000000000000"},{"privateKey":"0x3560513737ceb3c438a7d6a5f90a8d18213678be42cdc06c9aa5acb50048c597","balance":"1000000000000000000000"},{"privateKey":"0x7e5cfac0b1c7bcf035a9369577a573a22ec886bf7e45e1b8b923b30293c32bea","balance":"1000000000000000000000"},{"privateKey":"0x25db88d18ba942f883c26e9a95632faddcf1992769d2571b41aa9ba1904bd1c8","balance":"1000000000000000000000"},{"privateKey":"0x24adb7b49da3629b596bac067f3ad64e9609130a67c111c891da7de2bc6eb979","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};