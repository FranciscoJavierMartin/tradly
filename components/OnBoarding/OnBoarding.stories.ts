import OnBoarding from './OnBoarding.vue';

export default {
  title: 'OnBoarding',
  component: OnBoarding,
  args: {},
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
