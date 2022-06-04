const DefaultHeaders = {
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
  'X-Pagination-Limit': process.env.VUE_APP_API_LIMIT,
  'X-Order-Field': 'id',
  'X-Order-Direction': 'desc',
}

const DefaultOptions = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: DefaultHeaders,
}

const ResponseHandler = (res) => {
  if (!res.ok) throw res

  return res.json()
}

export default {
  get(url, options) {
    return fetch(this.apiUrl(url), {
      method: 'GET',
      ...DefaultOptions,
      ...options,
    }).then((res) => res.json())
  },

  put(url, body, options) {
    return fetch(this.apiUrl(url), {
      method: 'PUT',
      body: JSON.stringify(body),
      ...DefaultOptions,
      ...options,
    }).then(ResponseHandler)
  },

  post(url, body, options) {
    return fetch(this.apiUrl(url), {
      method: 'POST',
      body: JSON.stringify(body),
      ...DefaultOptions,
      ...options,
    }).then((res) => res.json())
  },

  delete(url) {
    return fetch(this.apiUrl(url), {
      method: 'DELETE',
      ...DefaultOptions,
    }).then((res) => res.json())
  },

  apiUrl(path) {
    return `${process.env.VUE_APP_API_URL}${path}`
  },
}