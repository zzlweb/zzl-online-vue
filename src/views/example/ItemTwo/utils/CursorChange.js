/* eslint-disable */
const body = document.body
const lerp = (a, b, n) => (1 - n) * a + n * b
// 获取鼠标位置
const getMousePos = e => {
  let posx = 0
  let posy = 0
  if (!e) e = window.event
  if (e.pageX || e.pageY) {
    posx = e.pageX
    posy = e.pageY
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop
  }
  return { x: posx, y: posy }
}

let winsize

// eslint-disable-next-line no-unused-vars
const calcWinsize = winsize =>
  (winsize = { width: window.innerWidth, height: window.innerHeight })
calcWinsize(winsize)

window.addEventListener('resize', calcWinsize)

// const MathUtils = {
//   lineEq: (y2, y1, x2, x1, currentVal) => {
//     // y = mx + b
//     var m = (y2 - y1) / (x2 - x1); var b = y1 - m * x1
//     return m * currentVal + b
//   },
//   lerp: (a, b, n) => (1 - n) * a + n * b,
//   getRandomFloat: (min, max) => (Math.random() * (max - min) + min).toFixed(2)
// }
class CursorFx {
  constructor(el) {
    this.DOM = { el: el }
    this.DOM.dot = this.DOM.el.querySelector('.cursor__inner--dot')
    this.bounds = { dot: this.DOM.dot.getBoundingClientRect() }
    this.mousePos = { x: 0, y: 0 }
    this.lastMousePos = { dot: { x: 0, y: 0 }}
    // this.lastOpacity = 1
    this.initEvents()
    requestAnimationFrame(() => this.render())
  }

  initEvents() {
    window.addEventListener(
      'mousemove',
      ev => (this.mousePos = getMousePos(ev))
    )
  }

  render() {
    this.lastMousePos.dot.x = lerp(
      this.lastMousePos.dot.x,
      this.mousePos.x - this.bounds.dot.width / 2,
      1
    )
    this.lastMousePos.dot.y = lerp(
      this.lastMousePos.dot.y,
      this.mousePos.y - this.bounds.dot.height / 2,
      1
    )

    this.DOM.dot.style.transform = `translateX(${
      this.lastMousePos.dot.x
    }px) translateY(${this.lastMousePos.dot.y - 20}px)`
    requestAnimationFrame(() => this.render())
  }

  // 鼠标进入
  enter() {
    // console.log(this.DOM)
    this.DOM.dot.style.visibility = 'visible'
  }

  leave() {
    this.DOM.dot.style.visibility = 'hidden'
  }

  click() {
    // this.lastScale = 1
    // this.lastOpacity = 1
  }
}

export default CursorFx
