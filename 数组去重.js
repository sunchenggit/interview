// 遍历
function unique (arr) {
  const res = []
  arr.forEach(item => {
    // indexOf 也是遍历
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  });
  return res;
}

// 使用 set 去重。无序结构。不能重复
function unique (arr) {
  const set = new Set(arr)
  return [...set]
}