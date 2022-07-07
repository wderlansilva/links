const bg = document.getElementById('body')
const icon = document.getElementById('sun')

if (icon) {
  icon.addEventListener('click', () => {
    bg.classList.toggle('dark')
    icon.classList.toggle('uil-sun')
    // icon.classList.add('uil-moon')
  })
}
