export function getParams (url) {
  let params = {}
  if (url.indexOf('#') !== -1) {
    url = url.slice(0, -1)
  }
  if (url.indexOf('?') !== -1) {
    let str = url.substring(url.indexOf('?') + 1)
    str = str.split('&')
    for (let i = 0; i < str.length; i++) {
      let param = str[i].split('=')
      let key = param[0]
      let value = param[1]
      params[key] = decodeURI(value)
    }
  }
  return params
}

export default {
  getParams
}
