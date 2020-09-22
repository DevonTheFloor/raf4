export const state = () => ({
  datas: {},
  listid: [],
  photo: {}
})

export const mutations = {
  GET_MATHS (state) {
    fetch('https://school-task.herokuapp.com/maths/')
      .then((response) => {
        console.log(response.data)
        this.datas = response.data
        this.datas.forEach((photo) => {
          state.listid.push(photo._id)
          console.log(photo._id)
        })
      })
      .catch(error => console.log(error))
  }
}

export const actions = {
  getmaths (context) {
    context.commit('GET_MATHS')
  }
}
