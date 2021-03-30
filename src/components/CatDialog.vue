<template>
  <v-dialog v-model="dialog" scrollable max-width="500px">
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
    <v-card>
      <v-card-title>Random Cat</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div>
          <v-img :src="cat.file" @load="loading = false">
            <v-row
              v-if="loading"
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular indeterminate></v-progress-circular>
            </v-row>
          </v-img>
        </div>
        <div>
          <a href="https://aws.random.cat/" target="_blank">random.cat</a>
        </div>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { randomCatService } from "@/services/randomCatService";

export default {
  name: 'CatDialog',

  props: {
    label: String,
  },

  data: () => ({
    dialog: false,
    cat: {
      file: undefined,
    },
    loading: true,
  }),

  watch: {
    async dialog(val) {
      if (val) {
        this.loading = true;
        this.cat = await randomCatService.getRandomCat();
      } else {
        this.cat = {
          file: undefined,
        };
      }
    },
  },
}
</script>