const crypto = require("crypto");

class Block {
  constructor(timestamp, data, prevBlockHash, hash) {
    this.timestamp = timestamp;
    this.data = data;
    this.prevBlockHash = prevBlockHash;
    this.hash = hash;
  }

  static newBlock(data, prevBlockHash) {
    const block = new Block(Math.floor(new Date() / 1000), data, prevBlockHash);
    block.__setHash();
    return block;
  }

  static newGenesisBlock() {
    return Block.newBlock("Genesis Block", "");
  }

  __setHash() {
    const headers = this.prevBlockHash + this.data + this.timestamp.toString();
    this.hash = crypto
      .createHash("sha256")
      .update(headers)
      .digest("hex");
  }
}


const testBlock = () => {
    const testBlock = Block.newBlock("Genesis Block", "");
    const testBlock2 = new Block(1533814510, "Genesis Block", "", "");
    testBlock2.__setHash();
    const testBlock3 = new Block(
      1533814510,
      "Send 1btc to eltneg",
      testBlock2.hash,
      ""
    );
    testBlock3.__setHash();
    console.log(testBlock.hash);
    console.log(testBlock2.hash);
    console.log(testBlock3.hash);
}


module.exports = {
  Block
};
