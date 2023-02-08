function muti (num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

const nums = [1, 2, 3]
// nums.forEach(async (i) => {
//   const res = await muti(i)
//   console.log(res) // 1 秒中后依次出来
// })

!(async function () {
  for (let i of nums) {
    const res = await muti(i)
    console.log(res); // 1s 出现一个结果
  }
})()