export default function (response) {
  if (!response.errors) return

  for (let name in response.errors) {
    let error = response.errors[name]
    let element = document.querySelector(`#${name}_invalid`)

    element.innerHTML = error.join('<br>')
    element.style.display = 'block'

    setTimeout(() => {
      element.style.display = 'none'
      element.innerHTML = ''
    }, 5000)
  }
}
