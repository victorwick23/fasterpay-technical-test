<template>
  <div class="w-2/12 h-screen">
    <div class="bg-third-blue px-4 flex items-center py-5 space-x-3">
      <img
        class="w-10 h-min hidden lg:block"
        src="../../assets/images/progress-bar.png"
        alt=""
      />
      <div>
        <text-extra-small class="text-white font-light" text="Step 02" />
        <text-small class="text-white font-bold" text="Specify Amount" />
      </div>
      <img class="w-6" src="../../assets/images/icon-arrow-down.png" alt="" />
    </div>
    <div class="bg-primary-blue px-4 py-6 space-y-4 h-full">
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
    </div>
    <div class="bg-primary-blue h-14 w-full bottom-0 px-6 absolute mb-4">
      <div
        class="flex items-center justify-between space-x-3 border border-secondary-blue px-2 py-3 rounded-md"
      >
        <div class="flex space-x-2 items-center">
          <img
            class="w-5 h-min"
            :src="require('../../assets/images/shoppingcart.png')"
            alt=""
          />
          <p class="text-secondary-blue hidden lg:block">Mini Apps</p>
        </div>
        <p
          class="text-xs px-2 py-1 rounded-sm border border-secondary-blue text-secondary-blue"
        >
          Pro
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MenuButton from "../Molecules/LeftMenu/MenuButton.vue";
import TextSmall from "../Atoms/Text/textSmall.vue";
import TextExtraSmall from "../Atoms/Text/textExtraSmall.vue";
export default {
  name: "LeftMenu",
  components: { MenuButton, TextSmall, TextExtraSmall },
  data() {
    return {};
  },
  computed: {},
};
</script>
