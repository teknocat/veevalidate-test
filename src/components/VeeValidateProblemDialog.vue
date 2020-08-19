<template>
  <v-dialog v-model="dialog" scrollable max-width="300px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        class="ma-2"
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        {{ label }}
      </v-btn>
    </template>
    <ValidationObserver v-slot="{ invalid }" ref="obs" immediate>
      <v-form>
        <v-card>
          <v-card-title>Select Country</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 300px;">
            <ValidationProvider v-slot="{ errors, valid }" name="country" rules="required">
              <v-radio-group v-model="country" column :error-messages="errors" :success="valid">
                <v-radio label="Bahamas, The" value="bahamas"></v-radio>
                <v-radio label="Bahrain" value="bahrain"></v-radio>
                <v-radio label="Bangladesh" value="bangladesh"></v-radio>
                <v-radio label="Barbados" value="barbados"></v-radio>
                <v-radio label="Belarus" value="belarus"></v-radio>
                <v-radio label="Belgium" value="belgium"></v-radio>
                <v-radio label="Belize" value="belize"></v-radio>
                <v-radio label="Benin" value="benin"></v-radio>
                <v-radio label="Bhutan" value="bhutan"></v-radio>
                <v-radio label="Bolivia" value="bolivia"></v-radio>
                <v-radio label="Bosnia and Herzegovina" value="bosnia"></v-radio>
                <v-radio label="Botswana" value="botswana"></v-radio>
                <v-radio label="Brazil" value="brazil"></v-radio>
                <v-radio label="Brunei" value="brunei"></v-radio>
                <v-radio label="Bulgaria" value="bulgaria"></v-radio>
                <v-radio label="Burkina Faso" value="burkina"></v-radio>
                <v-radio label="Burma" value="burma"></v-radio>
                <v-radio label="Burundi" value="burundi"></v-radio>
              </v-radio-group>
            </ValidationProvider>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false" :disabled="invalid">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </ValidationObserver>
  </v-dialog>
</template>

<script>
import {extend, ValidationObserver, ValidationProvider} from "vee-validate";
import {required} from "vee-validate/dist/rules";

extend('required', required);

export default {
  name: 'VeeValidateProblemDialog',

  components: {
    ValidationProvider,
    ValidationObserver,
  },

  props: {
    label: String,
  },

  data: () => ({
    dialog: false,
    country: null,
  }),
}
</script>