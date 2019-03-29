class Person {
  constructor({ id, name, avatar, createdAt, jobTitle, description }) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.createdAt = createdAt
    this.jobTitle = jobTitle
    this.description = description
  }

  createContainer() {
    const _container = document.createElement('li')
    const _imgWrapper = document.createElement('div')
    const _textWrapper = document.createElement('div')

    const _name = document.createElement('h2')
    _name.innerHTML = this.name

    const _description = document.createElement('p')
    _description.innerHTML = this.description

    _textWrapper.appendChild(_name)
    _textWrapper.appendChild(_description)

    _container.setAttribute('class', 'list-item')
    _imgWrapper.setAttribute('class', 'img-wrapper')
    _textWrapper.setAttribute('class', 'text-wrapper')

    _container.appendChild(_imgWrapper)
    _container.appendChild(_textWrapper)

    return _container
  }
}

export default Person
