import { Ajax } from './libs/keact'
const apiUrl = 'https://wwww.test.com/api'

export const publicService = {
  test (params, fn) {
    Ajax.call(this, apiUrl + '/test', 'post', params, fn)
  }
}
