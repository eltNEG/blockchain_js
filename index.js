"use strict";
const {Blockchain} = require("./blockchain")

const main = () => {
    const bc = Blockchain.newBlockchain()
    bc.addBlock("Send 1 BTC to Ivan")
    bc.addBlock("Send 2 more BTC to Ivan")
    const print = console.log
    for(const block of bc.blocks){
        print(`Prev. hash: ${block.prevBlockHash}`)
        print(`Data: ${block.data}`)
        print(`Hash: ${block.hash}`)
        print(`Timestamp: ${block.timestamp}`)
        print("\n")
    }
    
}

main()