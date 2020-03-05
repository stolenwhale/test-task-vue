<template>
  <section class="address-book">
    <h2 class="section-header">Адресная книга</h2>
    <div
      :class="{
        'address-list': true,
        'setting-item': true,
        active: isChangeable
      }"
    >
      <h3 class="header">Текущий адрес доставки</h3>

      <button
        class="input-button gray-button change-button"
        @click="isChangeable = true"
        v-if="!isChangeable"
      >
        изменить
      </button>

      <div class="address" v-for="(address, index) in addressList" :key="index">
        <input type="radio" v-model="selectedCity" :value="index" />
        <input
          class="address-input"
          type="text"
          :disabled="!isChangeable"
          v-model="addressList[index]"
        />
        <button
          class="input-button red-button delete-button"
          @click="deleteAddress(index)"
          v-if="isChangeable"
        >
          удалить
        </button>
      </div>
    </div>
    <div v-if="isChangeable" class="new-address-block setting-item active">
      <input
        class="field"
        type="index"
        v-model="newAddressModels[0]"
        placeholder="Индекс"
      />
      <select class="field" v-model="newAddressModels[1]">
        <option disabled value="Страна">Страна</option>
        <option v-for="country in countryList" :key="country">{{
          country
        }}</option>
      </select>
      <select class="field" v-model="newAddressModels[2]">
        <option disabled value="Город">Город</option>
        <option v-for="city in cityList" :key="city">{{ city }}</option>
      </select>
      <input
        class="field address-field"
        type="text"
        name="address"
        v-model="newAddressModels[3]"
        placeholder="Адрес"
      />
      <button class="save-address-button" @click="saveNewAddress">
        Добавить адрес
      </button>
    </div>
    <AppSubscribe v-if="!isChangeable" />
  </section>
</template>

<script>
import Inputmask from "inputmask";
import AppSubscribe from "./AppSubscribe";
export default {
  name: "AppAddress",
  components: { AppSubscribe },
  data() {
    return {
      isChangeable: false,
      selectedCity: null,
      countryList: ["Россия"],
      cityList: ["Москва", "Санкт-Петербург", "Керчь", "Троицк"],
      newAddressModels: ["", "Страна", "Город", ""]
    };
  },
  computed: {
    addressList: {
      get() {
        return this.$store.getters.addressBook;
      },
      set(value) {
        this.$store.commit("setAddressList", value);
      }
    }
  },
  methods: {
    deleteAddress(index) {
      this.$store.commit("deleteAddress", index);
    },
    saveNewAddress() {
      this.isChangeable = false;
      this.$store.commit("addAddress", this.newAddressModels.join(", "));
      this.$store.dispatch("sendDataToServer");
    }
  },
  updated() {
    Inputmask("999 999").mask(document.querySelectorAll("input[type=index]"));
  }
};
</script>
