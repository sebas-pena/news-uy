let articleCtn
setTimeout(() => {
  articleCtn = document.querySelector("#sitio > section > div.contenedor > div > div.item-p.wrap.column.pr-1 > div.cuerpo.intro_.mb-3").innerHTML
}, 1000)
const interval = setInterval(() => {
  const article = document.querySelector("#sitio > section > div.contenedor > div > div.item-p.wrap.column.pr-1 > div.cuerpo.intro_.mb-3.fade")
  if (article) {
    article.innerHTML = articleCtn
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000)
    clearInterval(interval)
  }
}, 3000)
