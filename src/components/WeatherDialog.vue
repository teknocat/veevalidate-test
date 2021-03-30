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
      <v-card-title>東京駅付近の天気</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <div>
          <template v-if="loading">
            <v-progress-linear indeterminate></v-progress-linear>
          </template>
          <template v-else>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left">
                    Date
                  </th>
                  <th class="text-left">
                    Weather
                  </th>
                  <th class="text-left">
                    Temperature
                  </th>
                </tr>
                </thead>
                <tbody>
                <tr
                  v-for="item in weather"
                  :key="item.date"
                >
                  <td>{{ item.date }}</td>
                  <td>{{ item.weather }}</td>
                  <td>{{ item.temp2m.max }} / {{ item.temp2m.min }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
        </div>
        <div>
          <a href="http://www.7timer.info/" target="_blank">7Timer!</a>
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
import { weatherService } from "@/services/weatherService";

export default {
  name: 'WeatherDialog',

  props: {
    label: String,
  },

  data: () => ({
    dialog: false,
    weather: [],
    loading: true,
  }),

  watch: {
    async dialog(val) {
      if (val) {
        this.loading = true;
        const resWeather = await weatherService.getWeather(35.681147934006624,139.76673203255143);
        this.weather = resWeather.dataseries;
        this.loading = false;
      }
    },
  },
}
</script>