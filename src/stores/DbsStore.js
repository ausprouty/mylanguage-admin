import { defineStore } from 'pinia'

export const useDbsStore = defineStore('DbsStore', {
  state: () => ({
    language1: 'eng00',
    language2: '',
    lesson: 1
  }),
  getters: {
    url () {
      var url = this.language1 + '/' + this.language2 + '/' + this.lesson
      return url
    }
  },

})
