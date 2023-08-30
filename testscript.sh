#!/bin/bash
for i in {1..17300}
do
   curl -s -X GET -H "X-Algo-API-Token: $(cat ~/algorand-private/net1/Node/algod.token)" -H "Content-Type: application/x-binary" http://127.0.0.1:53818/v2/blocks/$i | grep HCKDKYY4HZ3CT5U76PHE32BACQZJDW4SWG2VDIFYLPKYX3FHUNHTLJSTLE
   if [ $((i%1000)) == 0 ]; then
	  echo $i
	fi
done


with open("/Users/nikhil/algorand-private/net1/responses/response.msgpack", "rb") as data_file:
    byte_data = data_file.read()