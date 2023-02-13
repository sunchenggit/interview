// 传统模式
// function query (name) {
//   const search = location.search.substring(1)
//   // search: 'a=10&b=20&c=30'
//   const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
//   const res = search.match(reg)
//   if (res === null) {
//     return null
//   }
//   return res[2]
// }

// URLSearchParams
// function query (name) {
//   const search = location.search
//   const p = new URLSearchParams(search)
//   return p.get(name)
// }

/*
function queryToObj () {
  const res = {}
  const search = location.search.substring(1)
  search.split('&').forEach(paramStr => {
    const arr = paramStr.split('=')
    res[arr[0]] = arr[1]
  })
  return res
}
*/

function queryToObj () {
  const res = {}
  const pList = new URLSearchParams(location.search)
  pList.forEach((val, key) => {
    res[key] = val
  })
  return res;
}