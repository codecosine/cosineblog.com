import axios from 'axios'
import 'es6-promise/auto'

import conf from '../config'
import { onlyTitle, onlyDate } from '../utils'

/**
 * Format GitHub Api url for content list
 * @returns {string}
 */
function getListUrl (path) {
  // @see https://developer.github.com/v3/repos/contents/#get-contents
  // @example https://api.github.com/repos/viko16/vue-ghpages-blog/contents/markdown?ref=markdown
  let url = `https://api.github.com/repos/${conf.repo}/contents/`
  if (path) url += path
  if (conf.branch) url += `?ref=${conf.branch}`
  return url
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
function getList (key) {
  if (Cache.has(key)) {
    // Read from cache
    return Promise.resolve(Cache.get(key))
  } else {
    return axios.get(getListUrl(key)).then(res => {
      Cache.set(key, res.data)
      return res.data
    }).catch(err => {
      console.error(err)
    })
  }
}
export default {
  getHomeList () {
    return this.getListByKey(conf.paths)
  },
  getListByKey (keys) {
    if (!keys) {
      return false
    }
    var promises = keys.map(key => getList(key))
    return Promise.all(promises).then(data => {
      // Data cleaning
      var list = []
      data.forEach(ele => {
        var arr = ele.map(({name, sha, size}) => ({
          title: onlyTitle(name),
          date: onlyDate(name),
          sha,
          size
        }))
        Array.prototype.push.apply(list, arr)
      })
      return list
    })
  },
  getDetail (hash) {
    const httpOpts = {
      // https://developer.github.com/v3/media/#raw-1
      headers: { Accept: 'application/vnd.github.v3.raw' }
    }
    const cacheKey = 'post.' + hash

    if (Cache.has(cacheKey)) {
      // Read from cache
      return Promise.resolve(Cache.get(cacheKey))
    } else {
      return axios.get(getPostUrl(hash), httpOpts)
        .then(res => res.data)
        .then(content => {
          // Save into cache
          Cache.set(cacheKey, content)
          // ..then return
          return content
        })
    }
  }
}
