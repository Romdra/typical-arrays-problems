
exports.min = function min(array) {
  if (array && array.length) {
    return Math.min.apply(null, array)
  } else {
    return 0
  }
} 


exports.max = function max(array) {
  if (array && array.length) {
    return Math.max.apply(null, array)
  }else {
    return 0
  }
}


exports.avg = function avg(array) {
  if (array && array.length) {
    sum = 0;
    for (let i = 0; i < array.length; i++)
    sum += array[i]
    return sum/array.length;
  } else {
    return 0
  }
} 
