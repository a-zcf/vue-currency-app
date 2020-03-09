const baseSize = 16
function setRem () {
  const oHtml = document.getElementsByTagName('html')[0]
  const width = oHtml.clientWidth
  oHtml.style.fontSize = baseSize * (width / 375) + 'px'
}
setRem()
/* window.onresize = function () {
  setRem();
}; */
