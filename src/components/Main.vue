<template>
  <div class="main">
    <div class="main__title">Reminder App for GE</div>
    <div class="main__list">
      <Reminder
        v-for="(reminder, index) in reminders"
        :reminder="reminder"
        @reminderChange="reminderChange($event)"
        @reminderRemove="reminderRemove($event)"
        :key="index"
      ></Reminder>
    </div>
    <div class="main__add">
      <IconButton
        :color="'#7fe67f'"
        :icon="'plus'"
        :action="'add'"
        @buttonClicked="addNewReminder()"
      ></IconButton>
    </div>
  </div>
</template>

<script>
import Reminder from './shared/Reminder';
import IconButton from './shared/IconButton';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'main',
  components: {
    Reminder,
    IconButton
  },
  data: () => {
    return {};
  },
  methods: {
    ...mapActions(['addReminder', 'deleteReminder', 'changeReminderState']),
    makeId: function() {
      let result = '';
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < 7; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    addNewReminder: function() {
      const newReminder = {
        id: this.makeId(),
        text: '',
        time: new Date().getTime()
      };
      this.addReminder(newReminder);
    },
    reminderChange: function(event) {
      this.changeReminderState(event);
    },
    reminderRemove: function(event) {
      this.deleteReminder(event);
    }
  },
  computed: {
    ...mapGetters({
      reminders: 'getAllReminders'
    })
  }
};
</script>

<style scoped lang="scss">
@import '../assets/design/colors';

.main {
  background-color: $color_primary;
  width: 800px;
  min-height: 500px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  max-height: 80vh;

  &__title {
    font-size: 25px;
    color: #ebfffc;
    font-weight: 700;
    text-shadow: 2px 2px 5px rgba(14, 6, 3, 0.72);
  }

  &__list {
    width: 100%;
    overflow: auto;
    padding: 20px 10px;
    flex: 1;
  }

  &__add {
    position: absolute;
    top: 15px;
    right: 65px;
  }
}
</style>
