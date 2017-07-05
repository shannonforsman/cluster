import Axios from 'axios';

const state = {
  markers: []
}

const mutations = {
  'SET_MARKERS' (state, markers) {
    console.log('mutation', markers);
    state.markers = markers;
  }
}

const getters = {
  getMapMarkers: state => {
    return state.markers;
  }
}

const actions = {
  getMarkers: ({commit}) => {
    const link = 'https://limitless-citadel-5215.herokuapp.com/climbing-markers';
    Axios.get(link)
    .then((response) => {
      commit('SET_MARKERS', response.data)
    })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
