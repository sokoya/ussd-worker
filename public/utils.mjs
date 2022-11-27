// const baseURL = 'https://airtel-9mobile.herokuapp.com'
const baseURL = 'https://ussd-worker-hmoj-djuc7zob3-sokoya.vercel.app'

export const http = {
  get: (url) => {
    return fetch(baseURL + url).then(res => res.json())
  },
  post: (url, data = {}) => {
    return fetch(baseURL + url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
  }
}
