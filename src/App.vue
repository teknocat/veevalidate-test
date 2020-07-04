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
        <v-card>
          <v-card-title>
            Vuetify組み込み
          </v-card-title>
          <v-card-text>
            <v-row class="text-center">
              <v-col cols="12">
                <VuetifyForm/>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <v-card class="my-5">
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
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import VuetifyForm from './components/VuetifyForm';
import VeeValidateForm from './components/VeeValidateForm';

export default {
  name: 'App',

  components: {
    VuetifyForm,
    VeeValidateForm,
  },

  data: () => ({
    //
  }),
};
</script>
