import Vue from 'vue';
import Vuetify from 'vuetify';

import {shallowMount} from '@vue/test-utils'
import CatDialog from '@/components/CatDialog.vue'
import {RandomCatService} from "@/services/randomCatService";

Vue.use(Vuetify);

describe('CatDialog.vue', () => {
  it('正しくAPIが呼ばれていること', async () => {
    const wrapper = shallowMount(CatDialog, {
      propsData: { label: '猫' }
    })

    const spy = jest.spyOn(RandomCatService.prototype, 'getRandomCat').mockReturnValue(Promise.resolve({ file: "https://example.com/dummy.jpg" }));
    wrapper.vm.dialog = true;
    await wrapper.vm.$nextTick();
    expect(spy).toHaveBeenCalled();
    // 引数の数
    expect(spy.mock.calls[0].length).toBe(0);

    spy.mockClear();
    spy.mockRestore();
  })
})
