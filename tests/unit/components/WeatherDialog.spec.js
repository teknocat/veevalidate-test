import Vue from 'vue';
import Vuetify from 'vuetify';

import {shallowMount} from '@vue/test-utils'
import WeatherDialog from '@/components/WeatherDialog'
import {WeatherService} from "@/services/weatherService";

Vue.use(Vuetify);

describe('WeatherDialog.vue', () => {
  it('正しくAPIが呼ばれていること', async () => {
    const wrapper = shallowMount(WeatherDialog, {
      propsData: { label: '天気' }
    })

    const spy = jest.spyOn(WeatherService.prototype, 'getWeather').mockReturnValue(Promise.resolve({}));
    wrapper.vm.dialog = true;
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
    // 引数の数
    expect(spy.mock.calls[0].length).toBe(2);
    // 緯度
    expect(spy.mock.calls[0][0]).toBeGreaterThanOrEqual(0);
    expect(spy.mock.calls[0][0]).toBeLessThanOrEqual(90);
    // 経度
    expect(spy.mock.calls[0][1]).toBeGreaterThanOrEqual(-180);
    expect(spy.mock.calls[0][1]).toBeLessThanOrEqual(180);

    spy.mockClear();
    spy.mockRestore();
  })
})
