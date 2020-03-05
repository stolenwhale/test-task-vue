<template>
  <div class="subscribe">
    <h2 class="section-header">Подписки и уведомления</h2>
    <label class="block">
      <input type="checkbox" v-model="emailSubscribe" />
      Оповещеать меня о текущих акциях по e-mail
    </label>
    <label class="block" >
      <input type="checkbox" v-model="smsSubscribe" />
      Оповещеать меня о текущих акциях по Sms
    </label>
  </div>
</template>

<script>
export default {
  name: "AppSubscribe",
  data() {
    return {
      emailSubscribe: false,
      smsSubscribe: false
    };
  }
};
</script>
