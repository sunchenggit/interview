// 通用的时间绑定函数
// function bindEvent (elem, type, fn) {
//   elem.addEventListener(type, fn)
// }


function bindEvent (elem, type, selector, fn) {
  if (fn == null) {
    // 传入的是三个参数
    fn = selector
    selector = null
  }
  elem.addEventListener(type, event => {
    const target = event.target
    if (selector) {
      // 代理情况
      // 如果元素被指定的选择器字符串选择，Element.matches() 方法返回 true; 否则返回 false。
      if (target.matches(selector)) {
        fn.call(target, event)
      }
    } else {
      // 普通绑定
      fn.call(target, event)
    }
  })
}

const btn1 = document.getElementById('btn1')
bindEvent(btn1, 'click', function (event) {
  // console.log(event.target)
  event.preventDefault() // 阻止默认行为
  alert(this.innerHTML)
})

// const body = document.body
// const p1 = document.getElementById('p1')
// bindEvent(p1, 'click', event => {
//   event.stopPropagation() // 阻止冒泡
//   console.log('激活')
// })

// bindEvent(body, 'click', event => {
//   console.log('取消')
//   // console.log(event.target)
// })
// const div2 = document.getElementById('div2')
// bindEvent(div2, 'click', event => {
//   console.log('div2 clicked')
//   console.log(event.target)
// })


// 事件代理 绑定
const div3 = document.getElementById('div3')
bindEvent(div3, 'click', 'a', function (event) {
  event.preventDefault()
  alert(this.innerHTML)
})