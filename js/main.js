const home = document.getElementById('home')
const services = document.getElementById('services')
const inclusion = document.getElementById('inclusion')
const contacts = document.getElementById('contacts')

home.addEventListener('click', () => {
  window.location.href = '/'
})
services.addEventListener('click', () => {
  window.location.href = '/pages/services.html'
})
inclusion.addEventListener('click', () => {
  window.location.href = '/pages/inclusion.html'
})
contacts.addEventListener('click', () => {
  window.location.href = '/pages/contacts.html'
})