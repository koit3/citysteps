import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("TokyoStepsNFT");
  const nft = await NFT.deploy();

  await nft.deployed();

  console.log(`Deployed to ${nft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
