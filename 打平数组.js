const arr = [[1, 2], 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];

function flat (arr) {
  const isDeep = arr.some(item => item instanceof Array)
  if (!isDeep) {
    return arr // 已经是平的
  }
  const res = Array.prototype.concat.apply([], arr)
  return flat(res)
}