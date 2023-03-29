import APISettings from '../apiconfig.js'

class UserServices {
  getHello () {
    return APISettings.get()
  }

  async getAgentInfo (data) {
    try {
      return await APISettings.post('GetAgentInfo', JSON.stringify(data))
    } catch (error) {
      console.error(error)
    }
  }
  // async Register (data) {
  //   try {
  //     return await APISettings.post('/Register', JSON.stringify(data))
  //   } catch (error) { console.error(error) }
  // }
}

export default new UserServices()
