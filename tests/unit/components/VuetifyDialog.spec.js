import Vue from 'vue';
import Vuetify from 'vuetify';

import {mount} from '@vue/test-utils'
import VuetifyDialog from '@/components/VuetifyDialog.vue'

Vue.use(Vuetify);

describe('VuetifyDialog.vue', () => {
  it('renders props.label when passed', () => {
    const label = 'button label'
    const wrapper = mount(VuetifyDialog, {
      propsData: { label }
    })
    expect(wrapper.text()).toMatch(label)
  })
})
