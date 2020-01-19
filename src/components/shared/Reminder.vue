<template>
  <div class="reminder">
    <div class="reminder__text">
      <TextEl v-model="reminder.text" :editMode="editMode"></TextEl>
    </div>
    <div class="reminder__calender">
      <CalendarEl v-model="reminder.time" :editMode="editMode"></CalendarEl>
    </div>
    <div v-for="(icon, index) in icons" :key="index" class="reminder__icon">
      <IconButton
        :color="icon.color"
        :icon="icon.icon"
        :action="icon.action"
        @buttonClicked="actionClicked($event)"
      ></IconButton>
    </div>
  </div>
</template>

<script>
import IconButton from './IconButton';
import TextEl from './TextEl';
import CalendarEl from './CalendarEl';

export default {
  name: 'Reminder',
  components: {
    CalendarEl,
    IconButton,
    TextEl
  },
  props: {
    reminder: { type: Object }
  },
  data: () => {
    return {
      editMode: false,
      icons: [
        { color: '#dfdf9e', icon: 'edit', action: 'edit' },
        { color: '#ffc1c3', icon: 'trash-alt', action: 'del' }
      ]
    };
  },
  methods: {
    actionClicked(selectedAction) {
      if (selectedAction === 'edit' || selectedAction === 'check') {
        this.editMode = !this.editMode;
        if (selectedAction === 'check') {
          this.$emit('reminderChange', {
            text: this.reminder.text,
            time: this.reminder.time,
            id: this.reminder.id
          });

          this.$set(this.icons, 0, {
            color: '#dfdf9e',
            icon: 'edit',
            action: 'edit'
          });
        }

        if (selectedAction === 'edit') {
          this.$set(this.icons, 0, {
            color: '#57dfad',
            icon: 'check',
            action: 'check'
          });
        }
      }

      if (selectedAction === 'del') {
        this.$emit('reminderRemove', {
          text: this.reminder.text,
          time: this.reminder.time,
          id: this.reminder.id
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.reminder {
  border-bottom: solid 2px #baf8ec;
  padding: 10px;
  display: flex;
  width: 100%;
  &__text {
    flex: 1;
    padding: 0 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__calender {
    flex: 1;
    padding: 0 15px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__icon {
    padding: 0 15px;
  }
}
</style>
