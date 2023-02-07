import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    characterFilter: [],
  },
  getters: {
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload
    },
    setCharacterFilter(state, payload) {
      state.characterFilter = payload

    }
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/character")
        const result = await response.json()
        commit('setCharacters', result.results)
        commit('setCharacterFilter', result.results)
        console.log(result)
      } catch (error) {
        console.error(error)
      }
    },
    filterByStatus({ commit, state }, status) {
      const results = state.characters.filter(character => character.status.includes(status))
      commit('setCharacterFilter', results)
    },
    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase()
      const results = state.characters.filter(character => {
        const characterName = character.name.toLowerCase()
        if (characterName.includes(formatName))
          return character
      })
      commit('setCharacterFilter', results)
    }
  },
  modules: {
  }
})
