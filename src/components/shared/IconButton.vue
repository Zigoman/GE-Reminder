<template>
  <div
    class="icon"
    :style="`background-color: ${color}`"
    @click="buttonClicked"
  >
    <div class="icon__container">
      <v-icon class="icon__container__font" :name="icon" />
    </div>
  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon';

export default {
  name: 'IconButton',
  components: {
    'v-icon': Icon
  },
  props: {
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    buttonClicked: function() {
      this.$emit('buttonClicked', this.action);
    }
  }
};
</script>

<style scoped lang="scss">
.icon {
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border-radius: 50%;

  &__container {
    height: 16px;
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
