import matplotlib.pyplot as plt

inter_arr = []
inter_arr.append([3034, 3033, 3033])
inter_arr.append([3846,3818,3829])
inter_arr.append([4324,4244,4228])
inter_arr.append([4644,4643,4643])
inter_arr.append([5204,5003,5043])
inter_arr.append([5523,5443,5426])
inter_arr.append([5883,5789,5826])
inter_arr.append([6403,6189,6210])
inter_arr.append([6843,6602,6626])
inter_arr.append([7203,7069,6962])
inter_arr.append([7482,7335,7394])
inter_arr.append([7682,8482,8354])
inter_arr.append([10923,8495,8218])
inter_arr.append([9522,9335,8962])
inter_arr.append([21604,27405,24964])
inter_arr.append([28805,24324,23684])
inter_arr.append([24484,25391,27884])
inter_arr.append([22324,24244,26212])
inter_arr.append([32685,25084,24627])
inter_arr.append([52008,52275,51687])
inter_arr.append([50407,50406,57463])
inter_arr.append([36085,51633,57383])
inter_arr.append([70849,46619,61095])
inter_arr.append([54727,54726,64327])
inter_arr.append([98011,56339,61006])

arrival = list()
for l in inter_arr:
    arrival.append((l[0]+3*l[1]+5*l[2])/6)

delay = [0]
for i in range(200, 2600, 100):
	delay.append(i)

print(len(delay))
print(len(arrival))
plt.plot(delay, arrival)
plt.xlabel('Dealy (ms)')
plt.ylabel('Inter-arrival time (ms)')
plt.show()