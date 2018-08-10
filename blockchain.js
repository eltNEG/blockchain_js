const { Block } = require("./block");

class Blockchain {
  constructor(blocks = []) {
    this.blocks = blocks;
  }

  addBlock(data) {
    const prevBlock = this.blocks.slice(-1)[0];
    const newBlock = Block.newBlock(data, prevBlock.hash);
    this.blocks.push(newBlock);
  }
  static newBlockchain() {
    return new Blockchain([Block.newGenesisBlock()]);
  }
}

const testBlockchain = () => {
  bc = Blockchain.newBlockchain();
  for (const block of bc.blocks) {
    console.log(block.hash);
  }
};

testBlockchain()

module.exports = {
  Blockchain
};
