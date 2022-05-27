const RequestHeaders = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
}

export default {
  get(url, options) {
    return fetch(this.apiUrl(url), options).then((res) => res.json())
  },
  put(url, body, headers) {
    let defaultHeaders = RequestHeaders

    if (typeof headers === 'object') {
      for (let key of headers) {
        defaultHeaders[key] = headers[key]
      }
    }

    return fetch(this.apiUrl(url), {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: defaultHeaders,
    }).then((res) => res.json())
  },
  post(url, body, headers) {
    let defaultHeaders = RequestHeaders

    if (typeof headers === 'object') {
      for (let key of headers) {
        defaultHeaders[key] = headers[key]
      }
    }

    return fetch(this.apiUrl(url), {
      method: 'POST',
      body: JSON.stringify(body),
      headers: defaultHeaders,
    }).then((res) => res.json())
  },
  delete(url) {
    return fetch(this.apiUrl(url), {
      method: 'DELETE',
      headers: RequestHeaders,
    }).then((res) => res.json())
  },
  apiUrl(path) {
    return `${process.env.VUE_APP_API_URL}${path}`
  },
}
