function getMax() {
  const nums = Array.prototype.slice.call(arguments)
  let max = 0
  nums.forEach(num => {
    if (num > max) {
      max = num
    }
  });
  return max
}

Math.max()
Math.min()