import { ethers } from "hardhat";

async function main() {
  const NFT = await ethers.getContractFactory("TokyoStepnNFT");
  const nft = await Nft.deploy();

  await nft.deployed();

  console.log(`Deployed to ${nft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
