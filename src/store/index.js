import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Reminders: [
      { id: 'dITe8xO', text: 'Good Morning', time: 1576562400000 },
      { id: 'uK4A9JM', text: 'Meeting with Sarah', time: 1576598400000 },
      {
        id: 'NHJQZLC',
        text: 'Solve reminder app exercise',
        time: 1576605600000
      }
    ]
  },
  mutations: {
    addReminder(state, remind) {
      state.Reminders.push(remind);
    },
    changeReminderState(state, remind) {
      state.Reminders.map(val => {
        if (val.id === remind.id) {
          val = remind;
        }
        return val;
      });
    },
    deleteReminder(state, remind) {
      state.Reminders = state.Reminders.filter(val => val.id !== remind.id);
    }
  },
  actions: {
    addReminder({ commit }, remind) {
      commit('addReminder', remind);
    },
    changeReminderState({ commit }, remind) {
      commit('changeReminderState', remind);
    },
    deleteReminder({ commit }, remind) {
      commit('deleteReminder', remind);
    }
  },
  modules: {},
  getters: {
    getAllReminders(state) {
      return state.Reminders.sort((a, b) => {
        return a.time - b.time;
      });
    }
  }
});
