//Linear data structure workshop
function sumClosestToZero(arr) {
    let leastSum = Number.MAX_SAFE_INTEGER;
    let nums = [];
  
    for (let i = 0; i < arr.length; i++){
      for (let j = i+1; j < arr.length; j++){
        const sum = arr[i] + arr[j];
        //Check if sum is closer to zero than old sum
        if (Math.abs(sum) < Math.abs(leastSum)) {
          leastSum = sum;
          nums[0] = arr[i];
          nums[1] = arr[j];
        }
      }
    }
    return [leastSum , nums];
  }
  console.log(sumClosestToZero([1, 4, -5, 3, -2, 10, -6, 20]));