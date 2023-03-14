import { expect } from "chai";
import { ethers } from "hardhat";


describe("MyNFT", function () {
  it("Should return the index of the minted NFT", async function () {
    const BinaryvilleRobotsNFT = await ethers.getContractFactory("BinaryvilleRobotsNFT");
    const robotNFT = await BinaryvilleRobotsNFT.deploy();
    await robotNFT.deployed();
    console.log('Contract deployed to ', robotNFT.address);

    const [signer] = await ethers.getSigners();

    const nftdata = await robotNFT.mintNFT(signer.address,'ipfs://test-uri');
    console.log(nftdata);
    expect(await nftdata.value).to.eq(0);

  });
});
