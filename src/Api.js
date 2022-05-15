export default {
  get(url, options) {
    return fetch(this.apiUrl(url), options).then((res) => res.json())
  },
  put(url, body, headers) {
    let defaultHeaders = {
      'Content-Type': 'application/json',
    }

    if (typeof headers === 'object') {
      for (let key of headers) {
        defaultHeaders[key] = headers[key]
      }
    }

    return fetch(this.apiUrl(url), {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
  },
  apiUrl(path) {
    return `${process.env.VUE_APP_API_URL}${path}`
  },
}
