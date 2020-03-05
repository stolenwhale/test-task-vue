<template>
  <div id="app">
    <div class="wrapper">
      <h1>Мои настройки</h1>
      <div class="page-content">
        <div class="settings">
          <section class="personal-settings">
            <h2 class="section-header">Личные данные</h2>
            <AppInput
              v-for="field in personalData"
              :key="field.name"
              :fieldName="field.name"
              :type="field.type"
              :placeholder="field.placeholder"
            />
          </section>
          <section class="contact-settings">
            <h2 class="section-header">Контактные данные</h2>
            <div v-for="field in contactData" :key="field.name">
              <AppInput
                :fieldName="field.name"
                :type="field.type"
                :placeholder="field.placeholder"
              />
            </div>
          </section>
          <AppAddress />
        </div>
        <AppSocial />
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from "./components/AppInput";
import AppAddress from "./components/AppAddressBook";
import AppSocial from "./components/AppSocial";
export default {
  name: "App",
  components: {
    AppInput,
    AppAddress,
    AppSocial
  },
  data() {
    return {
      personalData: [
        {
          name: "firstName",
          type: "text",
          placeholder: "Имя"
        },
        {
          name: "secondName",
          type: "text",
          placeholder: "Фамилия"
        },
        {
          name: "patronymic",
          type: "text",
          placeholder: "Отчество"
        },
        {
          name: "dateOfBirth",
          type: "dateOfBirth",
          placeholder: "дд.мм.гггг"
        }
      ],
      contactData: [
        {
          name: "phoneNumber",
          type: "phone",
          placeholder: "+7 (___)-___-__-__"
        },
        {
          name: "email",
          type: "text",
          placeholder: "Email"
        },
        {
          name: "password",
          type: "password",
          placeholder: "Пароль [*********]"
        }
      ],
      addressBook: []
    };
  },
  computed: {}
};
</script>
