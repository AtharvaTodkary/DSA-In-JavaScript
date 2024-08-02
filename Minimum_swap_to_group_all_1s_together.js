//LEETCODE PROBLEM 
// A swap is defined as taking two distinct positions in an array and swapping the values in them.
// A circular array is defined as an array where we consider the first element and the last element to be adjacent.
// Given a binary circular array nums, return the minimum number of swaps required to group all 1's present in the array together at any location.

// Example 1:

// Input: nums = [0,1,0,1,1,0,0]
// Output: 1
// Explanation: Here are a few of the ways to group all the 1's together:
// [0,0,1,1,1,0,0] using 1 swap.
// [0,1,1,1,0,0,0] using 1 swap.
// [1,1,0,0,0,0,1] using 2 swaps (using the circular property of the array).
// There is no way to group all 1's together with 0 swaps.
// Thus, the minimum number of swaps required is 1.
// Example 2:

// Input: nums = [0,1,1,1,0,0,1,1,0]
// Output: 2
// Explanation: Here are a few of the ways to group all the 1's together:
// [1,1,1,0,0,0,0,1,1] using 2 swaps (using the circular property of the array).
// [1,1,1,1,1,0,0,0,0] using 2 swaps.
// There is no way to group all 1's together with 0 or 1 swaps.
// Thus, the minimum number of swaps required is 2.
// Example 3:

// Input: nums = [1,1,0,0,1]
// Output: 0
// Explanation: All the 1's are already grouped together due to the circular property of the array.
// Thus, the minimum number of swaps required is 0.



var minSwaps = function (nums) {
  
  //count total no.of ones in nums Array
    var totalOnes = 0;
    nums.forEach((num)=>{
        if(num==1) totalOnes++;
    });

  //Window sliding Approach
    var arrSize = totalOnes; // size window Array
    var left = 0;   //left index of window array
    var right = totalOnes - 1; //right index of window array
    
  //Find the number of 1's in initial window Array
    var currOnes = 0;
    for(let i=0; i<=right; i++){
        if(nums[i]==1) currOnes++ ;
    }

  //Initial the lowest as inifinty to get the actual lowest value
    let lowest = Infinity;

  while(left < nums.length){
        //number of zeros in current window
        const numZeros = arrSize - currOnes;
        //check the lowest
        if(numZeros < lowest){
            lowest = numZeros;
        }
        //traversing window array through nums
        if(nums[left]==1){
            currOnes--;
        }
        left++;
        if(right == nums.length - 1){
            right = 0; //as it is a circular array, that i.e
                      // start and end are adjustcent to each other
        }else{
            right++;
        }
        if(nums[right]==1){
            currOnes++;
        }
    }
    // print the minimum required swaps to get grouped 1's
    return lowest;
};


example nums=[1,1,0,0,1];
minSwap(nums);
