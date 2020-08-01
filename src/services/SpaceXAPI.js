import axios from 'axios'

const baseUrl = 'https://api.spacexdata.com/v3'

class SpaceXAPI {
  static getHistory() {
    return axios.get(`${baseUrl}/history`)
  }
  static getLaunches() {
    return axios.get(`${baseUrl}/launches`)
  }
  static getRockets() {
    return axios.get(`${baseUrl}/rockets`)
  }
  static getLaunch(launchId) {
    return axios.get(`${baseUrl}/launches/${launchId}`)
  }
}

export default SpaceXAPI