//Sorting algorithms
//I dont know about this kind of algorithm, all the codes are from the internet, I just copied and pasted them here.


//Implement the bubble sort algorithm to sort an array of numbers in ascending order

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//Implement the selection sort algorithm to sort an array of numbers in ascending order

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

//Implement the insertion sort algorithm to sort an array of numbers in ascending order

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

//Searching Algorithms

//Implement the linear search algorithm to search for a number in an array of numbers. Log the index of the target value. 

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
        return i;
        }
    }
    return -1;
    }

//Implement the binary search algorithm to search for a number in an array of numbers. Log the index of the target value.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
        return mid;
        } else if (arr[mid] < target) {
        left = mid + 1;
        } else {
        right = mid - 1;
        }
    }
    return -1;
    }

    //string algorithms

    //write a function to count the occurance of each character in a string.Log the character count.

    function countCharacters(str) {
        const charCount = {};
        for (let char of str) {
          charCount[char] = charCount[char] + 1 || 1;
        }
        return charCount;
      }

    
    //write a function to find the longest substring without repeating characters. Log the length of the substring.

    function longestSubstring(str) {
        let longest = 0;
        let start = 0;
        const seen = {};
        for (let i = 0; i < str.length; i++) {
          let char = str[i];
          if (seen[char]) {
            start = Math.max(start, seen[char]);
          }
          longest = Math.max(longest, i - start + 1);
          seen[char] = i + 1;
        }
        return longest;
      }

      //array algorithms

        //write a function to find the maximum sum of a subarray of a given size. Log the maximum sum.

        function maxSubarraySum(arr, size) {
            let maxSum = 0;
            let tempSum = 0;
            if (arr.length < size) return null;
            for (let i = 0; i < size; i++) {
              maxSum += arr[i];
            }
            tempSum = maxSum;
            for (let i = size; i < arr.length; i++) {
              tempSum = tempSum - arr[i - size] + arr[i];
              maxSum = Math.max(maxSum, tempSum);
            }
            return maxSum;
          }

            //write a function to find the minimum subarray length that has a sum greater than or equal to a given number. Log the length of the subarray.

            function minSubarrayLength(arr, target) {
                let minLen = Infinity;
                let sum = 0;
                let left = 0;
                for (let right = 0; right < arr.length; right++) {
                  sum += arr[right];
                  while (sum >= target) {
                    minLen = Math.min(minLen, right - left + 1);
                    sum -= arr[left];
                    left++;
                  }
                }
                return minLen === Infinity ? 0 : minLen;
              }