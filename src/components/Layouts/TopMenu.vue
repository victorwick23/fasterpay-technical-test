<template>
  <div class="w-full h-16">
    <div
      class="bg-primary-blue h-full w-full bottom-0 px-6 z-[999] flex items-center justify-between"
    >
      <text-large class="text-primary-cyan font-bold" text="FasterPay" />
      <img
        @click="showMenu"
        class="w-6"
        :src="require('../../assets/images/icon-menu-burger.png')"
        alt=""
      />
    </div>
    <div v-if="show_menu" class="bg-primary-blue px-4 py-6 space-y-4">
      <menu-button
        :icon="require('../../assets/images/my-account.png')"
        text="My Accounts"
      />

      <menu-button
        :icon="require('../../assets/images/transaction.png')"
        text="Transaction"
      />

      <menu-button
        :icon="require('../../assets/images/manage-cards.png')"
        text="Manage Cards"
      />

      <menu-button
        :icon="require('../../assets/images/deposit-icon.png')"
        text="Deposit Money"
      />

      <menu-button
        :icon="require('../../assets/images/convert-money.png')"
        text="Convert Money"
        :highlighted="true"
      />

      <menu-button
        :icon="require('../../assets/images/live-chat.png')"
        text="Live Chat"
      />
      <div class="w-full px-6 mb-4">
        <div
          class="flex items-center justify-between space-x-3 border border-secondary-blue px-2 py-3 rounded-md"
        >
          <div class="flex space-x-2 items-center">
            <img
              class="w-5 h-min"
              :src="require('../../assets/images/shoppingcart.png')"
              alt=""
            />
            <p class="text-secondary-blue">Mini Apps</p>
          </div>
          <p
            class="text-xs px-2 py-1 rounded-sm border border-secondary-blue text-secondary-blue"
          >
            Pro
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextLarge from "../Atoms/Text/textLarge.vue";
import MenuButton from "../Molecules/LeftMenu/MenuButton.vue";
export default {
  name: "TopMenu",
  components: { TextLarge, MenuButton },
  data() {
    return {
      show_menu: null,
    };
  },
  methods: {
    showMenu() {
      this.show_menu = !this.show_menu;
    },
  },
  computed: {},
};
</script>
