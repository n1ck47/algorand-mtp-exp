const algosdk = require("algosdk");

// const c = new algosdk.Algodv2("9f752ed32502a66afa078d9e9908302edb50693b33bbf58b210ecc09deb7d94c", "http://127.0.0.1", "55428");
// const c = new algosdk.Algodv2("1256990121b3dc5364cca7464d0e94002c200af0c4fe8bb5dbf820e4fe4e66c0", "http://127.0.0.1", "49690");

//relay
const c = new algosdk.Algodv2("271213a9449d713c370cc1ea308379ba81248d8ceec79bcc32460d67e99a4793", "http://127.0.0.1", "8080");

// const indexerClient = new algosdk.Indexer("6bc5ba5d67118283a473c9a7f612dd4d1cfebfb7f362e6fa40aefb870e7822f7", "http://127.0.0.1", "49283");



(async () => {

  const status = await c.status().do();
  const currentRound = status['last-round'];
  // console.log(status);
  // console.log("Current Round:", currentRound);

  // const suggestedParams = await c.getTransactionParams().do();
  // // create keyreg transaction to take this account offline
  // const offlineKeyReg = algosdk.makeKeyRegistrationTxnWithSuggestedParamsFromObject(
  //   {
  //     from: "XZXEIUJDTDDLYOOHGJ557443YFG4JNVQ6W2EDIGLF3Y7EKUCPA5AWK6PBM",
  //     suggestedParams,
  //     nonParticipation: true,
  //   }
  // );
  // console.log(offlineKeyReg.get_obj_for_encoding());
  
  targetBlock = 25;
  // let noOfTxns = 0;
  // let noOfBlocks = 0;
  // for(let i=59673; i<=59737; i++){
  //   targetBlock = i;

  //   let blk = await c.block(targetBlock).do();
  //   if(blk["block"]["txns"])
  //     noOfTxns += blk["block"]["txns"].length;

  //   noOfBlocks += 1
      
  // }

  // let avgTxnBlk = noOfTxns / noOfBlocks;
  // console.log(avgTxnBlk, noOfTxns, noOfBlocks);



  // const blockInfo = await indexerClient.lookupBlock(targetBlock).do();

  // To get the block proposer
  // for(let i=1; i<=649; i++){
  //     targetBlock = i
  //   let blk = await c.block(targetBlock).do();
  //   const proposer = algosdk.encodeAddress(blk["cert"]["prop"]["oprop"]);
  //   console.log(targetBlock, proposer);
  // }

  // let accountAddress = "RBRC3DNJ3SMJMXF3QQUVCYH2KZM6OCXJACOFPUKZLZQWGJI77LZ3UERF7Y";
  // let accountInfo = await c.accountInformation(accountAddress).do();
  // console.log('Node1', accountInfo['amount'])

  //  accountAddress = "DCF4ZAWJZY3PNLR3HRRRJG5MOGZU3U72NC6V247UEMGO6ULUIG4ZN62VKM";
  //  accountInfo = await c.accountInformation(accountAddress).do();
  // console.log('Node11', accountInfo['amount'])

  // accountAddress = "7A2VCPU6KOJNKBIDJDTLUIMAPZ2YNV6CJ2EWQ6MJXBAIDRV7OWMGFPYJHQ";
  //  accountInfo = await c.accountInformation(accountAddress).do();
  // console.log('Node10', accountInfo['amount'])

  // accountAddress = "NDQ4PMG5DECNIPB42WLOLLMQ3H2LF5D23UA2YBYXN32YLLZJXC5XWYFQOQ";
  //  accountInfo = await c.accountInformation(accountAddress).do();
  // console.log('Node2', accountInfo['amount'])


  targetBlock = 16
  while(true){
    let blk = await c.block(targetBlock).do();
    const proposer = algosdk.encodeAddress(blk["cert"]["prop"]["oprop"]);
    // let txns = blk["block"]["txns"]
    // if(txns != undefined){
    //   console.log(targetBlock, proposer)
    //   console.log(txns)
    // }
    if(targetBlock == 17){
      console.log(targetBlock, proposer, "     <------- Node1")
    }else if(targetBlock == 18){
      console.log(targetBlock, proposer, "     <------- 100% stake transferred from Node1 to Node2")
    }else if(targetBlock == 19){
      console.log(targetBlock, proposer, "     <------- Node1")
    }else if(targetBlock == 20){
      console.log("   ||\n   ||\n   ||\n   ||\n   ||\n   ||\n   ||\n   ||\n   ||\n   ||\n   ||")
    }else if(targetBlock == 337){
      console.log(targetBlock, proposer, "     <------- Node1")
    }else if(targetBlock == 338){
      console.log(targetBlock, proposer, "     <------- Node 2 has started creating now")
    }else if(targetBlock == 339){
      console.log(targetBlock, proposer, "     <------- Node 2")
    }
    
    targetBlock++;
  }

    // targetBlock = 1373
    // let blk = await c.block(targetBlock).do();
    // const proposer = algosdk.encodeAddress(blk["cert"]["prop"]["oprop"]);
    // console.log(blk["block"]["txns"]);
    // let txns = blk["block"]["txns"]
    // if(txns != undefined){
    //   const proposer = algosdk.encodeAddress(blk["cert"]["prop"]["oprop"]);
    //   console.log(targetBlock, proposer)
    // }


  
  
  // const txId = "BT6TKLPM7MPJ57OEFOCF222HT22ZYFKUUAQ3DAW4GTQGZP7RBHRQ";
  // const pending = await c.pendingTransactionInformation(txId).do();

  // console.log(txId);

})();