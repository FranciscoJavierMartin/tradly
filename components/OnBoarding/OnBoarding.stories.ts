import OnBoarding from './OnBoarding.vue';
import slides from './mock';

export default {
  title: 'OnBoarding',
  component: OnBoarding,
  args: {
    slides,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { OnBoarding },
  setup() {
    return { args };
  },
  template: '<OnBoarding v-bind="args"/>',
});

export const Basic = Template.bind({});
Basic.args = {};
