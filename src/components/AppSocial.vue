<template>
  <div class="socials">
    <h2>Социальные сети</h2>
    <span class="description">
      Привяжите учетную запись социальной сети и используйте ee для входа
    </span>
    <button
      :class="'social ' + social"
      v-for="social in socialButton"
      :key="social"
    >
      {{ social }}
    </button>
  </div>
</template>

<script>
export default {
  name: "AppSocial",
  data() {
    return {
      socialButton: ["Facebook", "Вконтакте", "Twitter", "Одноклассники"]
    };
  }
};
</script>
