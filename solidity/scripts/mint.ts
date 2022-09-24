import { ethers } from "hardhat";

async function main() {
//  const nft_address = "0xEb4E22adc01c435b13424EF9F559E024C4Dc35A0"; //optimism (goerli)
  const nft_address = "0x957aAe3B133259bC0E4964EF1Fe25b1F8E3940FE"; //polygon (mumbai)
  const [owner] = await ethers.getSigners();

  const TokyoStepsNFT = await ethers.getContractAt("TokyoStepsNFT", nft_address);

//  await TokyoStepsNFT.mint(owner.address, "https://bafkreiclzjzykeoql2re3smkuif6lhaxjwqnixrfkwi55cliqeyu64ayge.ipfs.nftstorage.link/"); // ferry building - optimism
//  await TokyoStepsNFT.mint(owner.address, "https://bafkreico7jkfqpux34kjmh2aadidduiqct266rz6dr7mi3mnvibf4lsk6y.ipfs.nftstorage.link/"); // salesforce tower - optimism
//  await TokyoStepsNFT.mint(owner.address, "https://bafybeifwdggxsmujxtdnzupoo57ajyc7coq5su5qrnqswkwkycys2h7iwy.ipfs.nftstorage.link/"); // travel - optimism
  await TokyoStepsNFT.mint(owner.address, "https://bafkreiguyutpwwskgh6ocewhegip3lfyg35b275erkrabhrtj3begbfsli.ipfs.nftstorage.link/"); // tokyo tower - polygon
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
