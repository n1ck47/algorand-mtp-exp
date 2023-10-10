# echo -n "" > /home/nick/Documents/MTP/algorand-mtp-exp/prv-network/net5/Node1/private5-v1/node1.txt   
# echo -n "" > /home/nick/Documents/MTP/algorand-mtp-exp/prv-network/net5/Node2/private5-v1/node1.txt   
# echo -n "" > /home/nick/Documents/MTP/algorand-mtp-exp/prv-network/net5/Node3/private5-v1/node1.txt   
# echo -n "" > /home/nick/Documents/MTP/algorand-mtp-exp/prv-network/net5/Node4/private5-v1/node1.txt   
# echo -n "" > /home/nick/Documents/MTP/algorand-mtp-exp/prv-network/net5/Node5/private5-v1/node1.txt   
# echo -n "" > /home/nick/Documents/MTP/algorand-mtp-exp/prv-network/net5/Relay1/private5-v1/node1.txt   
# echo -n "" > /home/nick/Documents/MTP/algorand-mtp-exp/prv-network/net5/Relay2/private5-v1/node1.txt  



tc qdisc del dev lo root
# tc filter del dev lo
tc qdisc add dev lo handle 1: root htb
tc class add dev lo parent 1: classid 1:15 htb rate 1000Mbps
tc qdisc add dev lo parent 1:15 handle 11 netem delay 4000ms 2000ms distribution normal
tc filter add dev lo parent 1:0 prio 1 protocol ip handle 11 fw flowid 1:15
iptables -t mangle -A PREROUTING -s 127.0.0.1 -d 127.0.0.1 -p tcp --sport 38821 --dport 37112 -j MARK --set-mark 11
