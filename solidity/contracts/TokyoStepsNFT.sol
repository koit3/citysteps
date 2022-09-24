// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TokyoStepsNFT is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("TokyoStepsNFT", "TSNFT") {}

  function mint(address to, string memory tokenURI) public returns (uint256) {
    uint256 newItemId = _tokenIds.current();
    _mint(to, newItemId);
    _setTokenURI(newItemId, tokenURI);

    _tokenIds.increment();
    return newItemId;
  }
}
