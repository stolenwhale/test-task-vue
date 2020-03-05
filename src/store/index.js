import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      firstName: "Дмитрий",
      secondName: null,
      patronymic: null,
      dateOfBirth: null,
      email: null,
      phoneNumber: null,
      password: null
    },
    addressBook: ["432 071 Россия, г. Троицк, ул. Ленина д.34. кв.54"]
  },
  getters: {
    personalData: state => inputName => {
      return state.userData[inputName];
    },
    addressBook: state => state.addressBook
  },
  mutations: {
    saveInputsValue(state, payload) {
      let { fieldName, value } = payload;
      state.userData[fieldName] = value;
    },
    setAddressList(state, payload) {
      state.addressBook = payload;
    },
    deleteAddress(state, payload) {
      state.addressBook.splice(payload, 1);
    },
    addAddress(state, payload) {
      state.addressBook.push(payload);
    }
  },
  actions: {
    sendDataToServer() {
      // отправка на сервер
    }
  }
});
