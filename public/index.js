if (module.hot) {
  module.hot.accept()
}

import '@fortawesome/fontawesome-free/css/all.css'

document.addEventListener('scroll', hideChevron)

function hideChevron () {
  let chevronScroll = document.getElementById('chevronScroll')
  chevronScroll.style.display = 'none'

  document.removeEventListener('scroll', hideChevron)
}