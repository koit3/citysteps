// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract TokyoStepsNFT is ERC721URIStorage {
  constructor() ERC721("TokyoStepsNFT", "TSNFT") {}
}
