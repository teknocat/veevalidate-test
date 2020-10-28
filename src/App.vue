<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-card id="form-vuetify">
          <v-card-title>
            Vuetify組み込み
          </v-card-title>
          <v-card-text>
            <v-row class="text-center">
              <v-col cols="12">
                <VuetifyForm />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="my-5" id="form-vee-validate">
          <v-card-title>
            VeeValidate
          </v-card-title>
          <v-card-text>
            <v-row class="text-center">
              <v-col cols="12">
                <VeeValidateForm/>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <div class="text-center">
          <VuetifyDialog label="Vuetifyダイアログ"/>

          <VeeValidateProblemDialog label="＋VeeValidateダイアログ(未対策)"/>

          <VeeValidateFixedDialog label="＋VeeValidateダイアログ(対策済)"/>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import VuetifyForm from './components/VuetifyForm';
import VeeValidateForm from './components/VeeValidateForm';
import VuetifyDialog from './components/VuetifyDialog';
import VeeValidateProblemDialog from './components/VeeValidateProblemDialog';
import VeeValidateFixedDialog from './components/VeeValidateFixedDialog';

export default {
  name: 'App',
  metaInfo: {
    title: 'Vue Meta Test App',
  },

  components: {
    VuetifyForm,
    VeeValidateForm,
    VuetifyDialog,
    VeeValidateProblemDialog,
    VeeValidateFixedDialog,
  },

  data: () => ({
    //
  }),
};
</script>
