<template>
  <div :class="{'setting-item': true, active: isChangeable }">
    <input
      :type="type"
      :placeholder="placeholder"
      :disabled="!isChangeable"
      v-model="value"
    />
    <button class="input-button gray-button" @click="isChangeable = true" v-if="!isChangeable">изменить</button>
    <button class="input-button red-button" @click="saveChanges" v-if="isChangeable">сохранить</button>
  </div>
</template>

<script>
import Inputmask from "inputmask";
export default {
  name: "AppInput",
  props: {
    fieldName: String,
    type: String,
    placeholder: String
  },
  data() {
    return {
      newValue: null,
      isChangeable: false
    };
  },
  computed: {
    value: {
      get() {
        return this.$store.getters.personalData(this.fieldName);
      },
      set(value) {
        this.$store.commit("saveInputsValue", {
          fieldName: this.fieldName,
          value
        });
      }
    }
  },
  methods: {
    saveChanges() {
      this.isChangeable = false;
      this.$store.dispatch("sendDataToServer");
    }
  },
  mounted() {
    Inputmask("+7 (999)-999-999").mask(
      document.querySelectorAll("input[type=phone]")
    );
    Inputmask("99.99.9999").mask(
      document.querySelectorAll("input[type=dateOfBirth]")
    );


  }
};
</script>

<style scoped lang="scss">

</style>
