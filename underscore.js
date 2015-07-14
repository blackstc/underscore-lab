//*average
function average(numArray) {
  var total = 0

  for (var i = 0; i < numArray.length; i++) {
    total += numArray[i];
  };

  return total / numArray.length;
}


//*contains
function contains(numArray, searchNum) {
  var search = 0;

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] === searchNum) {
      search++
    };
  }
  if (search >= 1) {
    return true;
  } else {
    return false;
  };
}

//*first
function first(numArray) {
  return numArray[0];
}

//*last
function last(numArray) {
  var lastNum = numArray.length - 1;
  return numArray[lastNum];
}

//*max
function max(numArray) {
  var maximum = numArray[0];
  for (var i = 1; i < numArray.length; i++) {
    if (numArray[i] > maximum) {
      maximum = numArray[i];
    };
  };
  return maximum;
}


//*min
function min(numArray) {
  var minimum = numArray[0];

  for (var i = 1; i < numArray.length; i++) {
    if (numArray[i] < minimum) {
      minimum = numArray[i];
    };
  };
  return minimum;
}


//*shuffle
function shuffle(numArray) {
  var output = [];
  var random = 0;
  var workingArray = numArray.slice(0);
  var current = workingArray.length;

  while (workingArray.length > 0) {
    random = Math.floor(Math.random() * workingArray.length);
    output.push(workingArray.splice(random, 1)[0]);
  }
  return output;
}


//*sample
function sample(numArray, sampleNum) {
  var output = [];

  for (var i = 0; i < numArray.length; i++) {
    numArray[i]
  }
}
