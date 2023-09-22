#!/bin/bash
# for i in {1..17300}
# do
#    curl -s -X GET -H "X-Algo-API-Token: $(cat ~/Documents/MTP/prv-network/net1/Relay1/algod.token)" -H "Content-Type: application/x-binary" http://$(cat ~/Documents/MTP/prv-network/net1/Relay1/algod.net)/v2/ledger/sync | grep HCKDKYY4HZ3CT5U76PHE32BACQZJDW4SWG2VDIFYLPKYX3FHUNHTLJSTLE
#    if [ $((i%1000)) == 0 ]; then
# 	  echo $i
# 	fi
# done


# with open("/Users/nikhil/algorand-private/net1/responses/response.msgpack", "rb") as data_file:
#     byte_data = data_file.read()

# curl -s -X GET -H "X-Algo-API-Token: $(cat ~/Documents/MTP/prv-network/net1/Relay1/algod.token)" -H "Content-Type: application/x-binary" http://$(cat ~/Documents/MTP/prv-network/net1/Relay1/algod.net)/v2/ledger/sync


for i in {2700..2700..1}
do
   echo "++++++++++++++++++++++++++++++" 
   echo DELAY $i ms
   tc qdisc replace dev lo parent 1:12 netem delay $((i))ms
   for rnds in {10..50..20}
   do
   		echo "////////////////////////"
   		echo Rounds: $rnds
   		node testNew.js $rnds
   done
   if [ $((i%1000)) == 0 ]; then
	  echo $i
	fi
done