// Given a circular list of gass stations, where we can go from a station i to the station i+1, and the last one goes back to the first one, find the index of the station from where we start to be able to traverse all the stations and go back to the initial one without running out of gas.

// input:
//  gas = [1,5,3,3,5,3,1,3,4,5]
//  cost = [5,2,2,8,2,4,2,5,1,2]
//  output: 8
// explanation 

// BRUTE FORCE SOLUTION

// For each station i:
  // Start traversing from there 
  // If the car goes back to i
  // i Is the right station, return it

// def can_traverse(gas, cost, start)
  // n = len(gas)
  // remaining = 0
  // i = start
  // started = False
  // while i != start or not started
    // started = True
    // remaining += gas[i] - cost[i]
    // if remaining < 0
      // return False
    // i = (i+1%n)
// return True

// def gas_station(gas, cost)
  // for i in range(len(gas))
    // if can_traverse(gas, cost, i)
      // return i 
  // return -1

// if a station start reaches a negative amount at the index i, then all stations between start and i inclusive are invalid, we start again from i+1

// gas[start] < cost[start] =>
// the car directly stops, no other stations are involved

//gas[start] >= cost[start] =>
// if the car reaches a negative amount of gas at the index i, all station between start and i inclusive are invalid

// def gas_station(gas, cost)
  // remaining = 0
  // candidate = 0
  // for i in range(len(gas))
    // remaining += gas[i] - cost[i]
    // if remaining < 0
      // candidate = i+1
      // remaining = 0
  // prev_remaining = sum(gas[:candidate])-sum(cost[:candidate])
  // if candidate == len(gas) or remaining+pre_remaining < 0 
    // return -1
  // else:
    // return candidate