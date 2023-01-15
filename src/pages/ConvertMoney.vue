<template>
  <div
    class="bg-white shadow-lg rounded-lg mx-4 lg:mx-10 lg:px-10 h-full grid place-items-center py-36 mt-20 sm:mt-0"
  >
    <div class="w-11/12 lg:w-8/12 relative">
      <div class="px-10">
        <div class="px-7 w-full bg-light-blue">
          <div
            class="bg-light-blue items-center h-96 w-full border-l-2 border-border border-dashed px-3"
          >
            <div class="absolute w-full -top-16 mx-auto right-0 left-0">
              <div class="flex w-full space-x-3">
                <div
                  class="bg-white w-5/12 flex items-center justify-between px-4 py-8 shadow-lg rounded-l-md"
                >
                  <div>
                    <img
                      class="w-12"
                      :src="
                        require('../assets/images/flag/' +
                          data_currency[0].flag)
                      "
                      alt=""
                    />
                    <text-large
                      class="text-center font-extralight"
                      :text="data_currency[0].currency"
                    />
                  </div>
                  <div>
                    <text-extra-large class="font-bold" :text="balance" />
                    <text-large class="font-medium" text="Available" />
                  </div>
                  <div>
                    <img
                      class="w-8"
                      :src="
                        require('../assets/images/icon-arrow-down-black.png')
                      "
                      alt=""
                    />
                  </div>
                </div>
                <div
                  class="bg-white w-7/12 flex items-center justify-between px-4 py-8 shadow-lg rounded-r-md"
                >
                  <!-- input component that can handle min value, max value and format the currency based on selected -->
                  <input-currency
                    @change="calculateCurrency()"
                    @keydown="calculateCurrency()"
                    @keyup="calculateCurrency()"
                    v-model="input_base_currency"
                    label="You Send"
                    :options="{
                      currency: this.base_currency.currency,
                      currencyDisplay: 'hidden',
                      valueRange: {
                        min: 1,
                        max: this.balance,
                      },
                    }"
                  />
                </div>
              </div>
            </div>
            <div class="flex pt-40 items-center space-x-4 -ml-6">
              <img
                class="w-6 h-min"
                :src="require('../assets/images/icon-fee.png')"
                alt=""
              />
              <p class="">{{ loading ? "Calculating" : fee }} Fees</p>
            </div>

            <div class="flex pt-4 items-center space-x-4 -ml-6">
              <img
                class="w-6 h-min"
                :src="require('../assets/images/icon-rate.png')"
                alt=""
              />
              <p class="">
                {{ selected_currency.rate }}
                {{ selected_currency.currency }} exchange rate
              </p>
            </div>

            <div class="absolute w-full mx-auto right-0 left-0 top-72">
              <div class="flex w-full space-x-3">
                <div
                  @click="showOptionCurrency()"
                  class="bg-white w-5/12 relative flex items-center justify-between px-4 py-8 shadow-lg rounded-l-md"
                >
                  <div class="w-11/12">
                    <img
                      class="w-12 mx-auto"
                      :src="
                        require('../assets/images/flag/' +
                          selected_currency.flag)
                      "
                      alt=""
                    />
                    <text-large
                      class="text-center font-extralight"
                      :text="selected_currency.currency"
                    />
                  </div>

                  <div>
                    <img
                      class="w-8"
                      :src="
                        require('../assets/images/icon-arrow-down-black.png')
                      "
                      alt=""
                    />
                  </div>
                  <!-- if select currency is clicked it will show list currency available -->
                  <div
                    v-if="list_currency"
                    class="bg-white px-3 w-full top-32 z-10 rounded-b-md shadow-lg left-0 absolute py-3"
                  >
                    <p class="text-xs">Choose currency</p>
                    <!-- loop currency list based on json string -->
                    <div
                      v-for="DataCurrency in data_currency"
                      :key="DataCurrency"
                    >
                      <!-- handle if option is clicked and set data selected currency -->
                      <div
                        v-if="DataCurrency !== base_currency"
                        @click="selectCurrency(DataCurrency)"
                        :class="
                          selected_currency === DataCurrency
                            ? 'bg-secondary-blue  rounded-md'
                            : ''
                        "
                        class="flex items-center py-2 space-x-2 px-2 hover:bg-secondary-blue rounded-md"
                      >
                        <img
                          class="w-7"
                          :src="
                            require('../assets/images/flag/' +
                              DataCurrency.flag)
                          "
                          alt=""
                        />
                        <p class="m-0 p-0">{{ DataCurrency.currency }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white w-7/12 flex items-center justify-between px-4 py-8 shadow-lg rounded-r-md"
                >
                  <!-- fake loading for calculating fee -->
                  <input-loading v-if="loading" />

                  <!-- input component that can handle precision decimal and format the currency based on selected -->
                  <input-currency-result
                    v-else
                    v-model="input_converted_currency"
                    label="Recipient gets"
                    :disableinput="true"
                    :options="{
                      currency: this.selected_currency.currency,
                      currencyDisplay: 'hidden',
                      hideGroupingSeparatorOnFocus: false,
                      precision: 3,
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full pt-20">
        <input-basic-text class="w-full" label="Title" v-model="notes_title" />
      </div>

      <div class="w-11/12 pt-10 flex space-x-3 mx-auto">
        <div class="w-5/12">
          <secondary-button text="Back" />
        </div>
        <div class="w-7/12">
          <primary-button text="Continue" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputCurrency from "@/components/Molecules/Input/InputCurrency.vue";
import DataCurency from "../helper/currency.json";
import TextLarge from "@/components/Atoms/Text/textLarge.vue";
import TextExtraLarge from "@/components/Atoms/Text/TextExtraLarge.vue";
import InputBasicText from "@/components/Molecules/Input/InputBasicText.vue";
import PrimaryButton from "@/components/Atoms/Button/PrimaryButton.vue";
import SecondaryButton from "@/components/Atoms/Button/SecondaryButton.vue";
import InputCurrencyResult from "@/components/Molecules/Input/InputCurrencyResult.vue";
import InputLoading from "@/components/Molecules/Input/InputLoading.vue";

export default {
  components: {
    InputCurrency,
    TextLarge,
    TextExtraLarge,
    InputBasicText,
    PrimaryButton,
    SecondaryButton,
    InputCurrencyResult,
    InputLoading,
  },
  name: "ConvertMoney",
  data() {
    return {
      data_currency: null,
      base_currency: null,
      input_base_currency: 1,
      selected_currency: null,
      input_converted_currency: null,
      notes_title: null,
      balance: 564.43,
      fee: null,
      list_currency: false,
      loading: false,
    };
  },
  methods: {
    // function to fetch currency from json
    fetchListCurrency() {
      this.data_currency = DataCurency;
      this.base_currency = this.data_currency[0];
      this.selected_currency = this.data_currency[1];
      console.log(this.data_currency);
    },
    setLoading() {
      this.loading = true;
      setTimeout(() => (this.loading = false), 2000);
    },

    // set selected currency data and refresh the input value
    selectCurrency(data) {
      this.selected_currency = data;
      this.input_converted_currency = null;
      this.input_base_currency = null;
      this.fee = null;
    },

    //show select currency modal
    showOptionCurrency() {
      this.list_currency = !this.list_currency;
    },

    // function to calculate from base currency to selected currency
    calculateCurrency() {
      this.setLoading();
      //handle non string value
      var value = parseFloat(this.input_base_currency);
      let result;

      // check the base value if null
      if (this.input_base_currency !== null) {
        // case if value < 10
        if (value < 10) {
          // first we define the fee with the following formula
          this.fee = (0.5 / 100) * this.input_base_currency;

          // convert the base currency to selected currency
          result = value * this.selected_currency.rate;

          // reduce the converted currency with fee and set to an input variable
          this.input_converted_currency = result - this.fee;
        }
        // case if value >= 10 and value < 100
        else if (value >= 10 && value < 100) {
          // first we define the fee with the following formula
          this.fee = (0.8 / 100) * this.input_base_currency;

          // convert the base currency to selected currency
          result = value * this.selected_currency.rate;

          // reduce the converted currency with fee and set to an input variable
          this.input_converted_currency = result - this.fee;
        }
        // case if value more than 100
        else if (value >= 100) {
          // first we define the fee with the following formula
          this.fee = (0.5 / 100) * this.input_base_currency + 1.5;

          // convert the base currency to selected currency
          result = value * this.selected_currency.rate;

          // reduce the converted currency with fee and set to an input variable
          this.input_converted_currency = result - this.fee;
        }
      } else {
        this.input_converted_currency = 0;
      }
    },
  },
  created() {
    // fetch data from json when component mounted
    this.fetchListCurrency();
  },
};
</script>
