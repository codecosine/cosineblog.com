import axios from 'axios'
import 'es6-promise/auto'

import conf from '../config'
import { onlyTitle, onlyDate } from '../utils'

// Cache processor
const Cache = {
  get: (key) => {
    if (!window.sessionStorage) return false
    return JSON.parse(window.sessionStorage.getItem(key))
  },
  set: (key, data) => {
    if (!window.sessionStorage) return false
    window.sessionStorage.setItem(key, JSON.stringify(data))
    return true
  },
  has: (key) => {
    return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key))
  }
}
/**
 * Format GitHub Api url for content list
 * @returns {string}
 */

/**
 * getTopics
 */
function getTopics () {
  var url = `https://api.github.com/repos/${conf.repo}/contents/`
  url += conf.path || ''
  url += conf.branch ? `?ref=${conf.branch}` : ''
  if (Cache.has('Topics')) { // Read from cache
    return Promise.resolve(Cache.get('Topics'))
  } else {
    return axios.get(url).then(res => {
      Cache.set('Topics', res.data)
      return res.data
    }).catch(err => {
      console.error(err)
    })
  }
}

/**
 * Format GitHub Api url for file content
 * @param {string} hash
 * @returns {string}
 */
function getPostUrl (hash) {
  // @see https://developer.github.com/v3/git/blobs/#get-a-blob
  return `https://api.github.com/repos/${conf.repo}/git/blobs/${hash}`
}

function getList (obj) {
  if (obj && Cache.has(obj.sha)) { // Read from cache
    return Promise.resolve(Cache.get(obj.sha))
  } else {
    return axios.get(obj.url).then(res => {
      var data = res.data.map(({name, sha}) => ({
        title: onlyTitle(name),
        date: onlyDate(name),
        sha
      }))
      Cache.set(obj.sha, data)
      return data
    }).catch(err => {
      console.error(err)
    })
  }
}
function getHomeList (data) {
  if (data === null) {
    return Promise.resolve(Cache.get('homelist'))
  }
  // 首页生成10条 合并,排序,得到前10
  var list = data.reduce((a, b) => {
    return a.concat(b)
  }, [])
  list.sort((a, b) => new Date(b.date) - new Date(a.date))
  var slice = list.slice(0, 7)
  console.log(slice)
  Cache.set('homelist', slice)
  return Promise.resolve(slice)
}
function getDetail (sha) {
  const httpOpts = {
    // https://developer.github.com/v3/media/#raw-1
    headers: { Accept: 'application/vnd.github.v3.raw' }
  }
  const cacheKey = 'post.' + sha
  if (Cache.has(cacheKey)) {
    // Read from cache
    return Promise.resolve(Cache.get(cacheKey))
  } else {
    return axios.get(getPostUrl(sha), httpOpts)
      .then(res => res.data)
      .then(content => {
        // Save into cache
        Cache.set(cacheKey, content)
        // ..then return
        return content
      })
  }
}
export default {
  getTopics,
  getList,
  getHomeList,
  getDetail
}
