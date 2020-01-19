<template>
  <div class="element">
    <div class="element__text" v-if="!editMode">{{ valueToDate }}</div>
    <input
      v-else
      :value="valueUTC"
      class="element__calendar"
      type="datetime-local"
      @input="onInputChange($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'CalendarEl',
  components: {},
  props: {
    value: {
      type: Number
    },
    editMode: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {};
  },
  methods: {
    onInputChange: function(event) {
      this.$emit('input', new Date(event.target.value).getTime());
    }
  },
  computed: {
    valueUTC: function() {
      const d = new Date(this.value);
      const z = n => ('0' + n).slice(-2);
      return (
        d.getFullYear() +
        '-' +
        z(d.getMonth() + 1) +
        '-' +
        z(d.getDate()) +
        'T' +
        z(d.getHours()) +
        ':' +
        z(d.getMinutes())
      );
    },
    valueToDate: function() {
      const date = new Date(this.value);
      let dd = date.getDate();

      let mm = date.getMonth() + 1;

      let Hr = date.getHours();
      let Min = date.getMinutes() + 1; //January is 0!

      const yyyy = date.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      if (Min < 10) {
        Min = '0' + Min;
      }
      if (Hr < 10) {
        Hr = '0' + Hr;
      }
      return dd + '/' + mm + '/' + yyyy + '  ' + Hr + ':' + Min;
    }
  }
};
</script>

<style scoped lang="scss">
.element {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &__text {
  }

  &__calendar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
