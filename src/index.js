import './style.css'
import Person from './modules/Person'

const content = document.getElementById('content')

window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('button')

  btn.addEventListener('click', fetchData)
})

function fetchData(e) {
  const url = 'http://5c9e09de595c55001487be13.mockapi.io/api/v1/persons'

  fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
      createListElements(data)
    })
    .catch(error => error)
}

function createListElements(arr) {
  if (!Array.isArray(arr)) return

  content.innerHTML = ''

  const persons = arr.map(data => new Person(data))

  persons.forEach(person => {
    content.appendChild(person.element)
  })
}
