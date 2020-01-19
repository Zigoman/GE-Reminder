<template>
  <div class="element">
    <div class="element__text" v-if="!editMode">{{ value }}</div>
    <input
      v-else
      :value="value"
      class="element__input"
      type="text"
      @input="onInputChange($event)"
    />
  </div>
</template>

<script>
export default {
  name: 'TextEl',
  components: {},
  props: {
    value: {
      type: String
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
      this.$emit('input', event.target.value);
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

  &__input {
  }
}
</style>
