var _ = {

  //*average
  average: function(numArray) {
    var total = 0;

    for (var i = 0; i < numArray.length; i++) {
      total += numArray[i];
    }

    return total / numArray.length;
  },


  //*contains
  contains: function(numArray, searchNum) {
    var search = 0;

    for (var i = 0; i < numArray.length; i++) {
      if (numArray[i] === searchNum) {
        search++;
      }
    }
    if (search >= 1) {
      return true;
    } else {
      return false;
    }
  },


  //*first
  first: function(numArray) {
    return numArray[0];
  },


  //*last
  last: function(numArray) {
    var lastNum = numArray.length - 1;
    return numArray[lastNum];
  },


  //*max
  max: function(numArray) {
    var maximum = numArray[0];
    for (var i = 1; i < numArray.length; i++) {
      if (numArray[i] > maximum) {
        maximum = numArray[i];
      }
    }
    return maximum;
  },


  //*min
  min: function(numArray) {
    var minimum = numArray[0];

    for (var i = 1; i < numArray.length; i++) {
      if (numArray[i] < minimum) {
        minimum = numArray[i];
      }
    }
    return minimum;
  },


  //*shuffle
  shuffle: function(numArray) {
    var output = [];
    var random = 0;
    var workingArray = numArray.slice(0);
    var current = workingArray.length;

    while (workingArray.length > 0) {
      random = Math.floor(Math.random() * workingArray.length);
      output.push(workingArray.splice(random, 1)[0]);
    }
    return output;
  },


  //*sample
  sample: function(numArray, sampleNum) {
    var output = [];
    var random = 0;
    var workingArray = numArray.slice(0);
    var current = workingArray.length;
    var newSample = numArray.length - sampleNum;

    while (workingArray.length > newSample) {
      random = Math.floor(Math.random() * workingArray.length);
      output.push(workingArray.splice(random, 1)[0]);
    }
    return output;
  },


  //*difference
  difference: function(arr1, arr2) {
    var result = [];
    var compare = 0;
    var first = arr1[1];

    for(j = 0; j < arr1.length; j++) {
        for (i = 0; i < arr2.length; i++) {
            if(arr1[j] !== arr2[i]) {
                result.push(arr1[i]);
            }
        }
    }


    return result;
  }
};

_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
