const algosdk = require("algosdk");
const process = require('process');
// // const c = new algosdk.Algodv2("9f752ed32502a66afa078d9e9908302edb50693b33bbf58b210ecc09deb7d94c", "http://127.0.0.1", "55428");
// // const c = new algosdk.Algodv2("1256990121b3dc5364cca7464d0e94002c200af0c4fe8bb5dbf820e4fe4e66c0", "http://127.0.0.1", "49690");
// console.log(process);
// //relay
//Relay 1
const c = new algosdk.Algodv2("b2967cd801d8d5f71f61b2b045769bf255c478d7b9afa172bef778f93d9b75d3", "http://127.0.0.1", "8080");
//Relay 2
// const c = new algosdk.Algodv2("fefb6ccd0fb8a5c97960ad10193fc352e3e709f9c98be71ee7ff765d138b4cf1", "http://127.0.0.1", "41905");
// // const indexerClient = new algosdk.Indexer("6bc5ba5d67118283a473c9a7f612dd4d1cfebfb7f362e6fa40aefb870e7822f7", "http://127.0.0.1", "49283");

let args = process.argv;
// console.log(args[2]);

(async () => {

  let status = await c.status().do();
  let startRnd = status['last-round'];
  // console.log(startRnd);
  // const currentSyncRound = await c.getSyncRound().do();
  // console.log(currentSyncRound);
  let currentRnd = startRnd, lastRnd = startRnd;
  

  let i = 0;
  let d = new Date();
  let startTime = d.getTime();
  let time1 = d.getTime(); 
  const noOfRounds = parseInt(args[2]);
  console.log(noOfRounds);
  while(i<=noOfRounds){
    // let blk = await c.block(targetBlock).do();
    status = await c.status().do();
    currentRnd = status['last-round'];
    if(currentRnd != lastRnd){
      console.log("Iteration: %d", i);
      console.log("Round no: %d", currentRnd);
      d = new Date();
      let time2 = d.getTime();
      if(i==0) startTime = time2;
      let t = time2 - time1;
      time1 = time2;
      console.log("Time: %sms", t);
      console.log("=====================")
      lastRnd = currentRnd;
      i++;
    }
  }

  d = new Date();
  const totalTime = d.getTime() - startTime;
  console.log("No of rounds: %d", noOfRounds);
  console.log("Total time: %dms", totalTime);
  console.log("Avg inter-arrival time: %dms", totalTime/noOfRounds);
  console.log("No of blocks per second: %d", noOfRounds/totalTime)

})();
