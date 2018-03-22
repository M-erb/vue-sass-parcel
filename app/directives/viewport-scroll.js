var PageYPix = window.pageYOffset
var defaultOffset = window.innerHeight - 100
var defaultClassName = 'fadeIn'
var defaultDuration = '1s'
var defaultDely = '0'
var isListenerLoaded = false
var aniList = []
function createScrollEvent(element, config) {
  element.style.visibility = 'visible'
  // config = {
  //   className: string,
  //   delay: string,
  //   duration: string,
  //   offset: number
  // }
  var item = {
    el: element,
    className: config.className || defaultClassName,
    delay: config.delay || defaultDely,
    duration: config.duration || defaultDuration,
    offset: config.offset || defaultOffset
  }
  if (config.offset) {
    item.offset = window.innerHeight - config.offset
  }
  if (PageYPix <= window.innerHeight && item.el.offsetTop <= window.innerHeight) {
    item.el.classList.add(item.className)
  }

  aniList.push(item)
  if (!isListenerLoaded) {
    document.addEventListener('scroll', scrollEvent)
  }
  isListenerLoaded = true
}

function scrollEvent() {
  PageYPix = window.pageYOffset
  for(var i = 0; i < aniList.length; i++) {
    if (aniList[i].el.offsetTop <= PageYPix + aniList[i].offset) {
      aniList[i].el.style.animationDuration = aniList[i].duration
      aniList[i].el.classList.add(aniList[i].className)
    }
  }
}

Vue.directive('ani', {
  inserted(el, binding, vnode) {
    el.style.visibility = 'hidden'
    createScrollEvent(el, binding.value)
    el.style.animationFillMode = 'both'
  }
})
