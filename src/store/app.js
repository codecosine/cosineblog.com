import api from '../api'
// initial state
// shape: [{ id, quantity }]
const state = {
  cacheList: [],
  listView: [],
  postView: {},
  topics: []
}

// getters
const getters = {
  list: state => state.listView,
  topics: state => state.topics
}

// actions
const actions = {
  updateList ({ commit, state }, list) {
    var timeFilters = list.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    commit('updateViewList', timeFilters)
  },
  getTopicsList ({ commit, state }) {
    return api.getTopics().then(topics => {
      commit('updateTopics', topics)
      var listPromises = topics.map(ele => {
        return api.getList(ele)
      })
      return Promise.all(listPromises)
    })
  },
  updateCacheList ({ commit }, list) {
    commit('updateCacheList', list)
  },
  updateHomeList ({ dispatch }, list) {
    return api.getHomeList(list).then(data => {
      dispatch('updateList', data)
    })
  },
  updateTopicsList ({ state, dispatch }, tag) {
    var index = state.topics.findIndex(ele => {
      return ele.sha === tag.sha
    })
    if (index < 0) {
      return Promise.reject(index)
    }
    return dispatch('updateList', state.cacheList[index])
  }
}

// mutations
const mutations = {
  updateViewList (state, list) {
    state.listView = list
  },
  updateTopics (state, topics) {
    state.topics = topics
  },
  updateCacheList (state, list) {
    state.cacheList = list
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
