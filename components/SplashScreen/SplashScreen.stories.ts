import SplashScreen from './SplashScreen.vue';

export default {
  title: 'SplashScreen',
  component: SplashScreen,
  args: {},
};

const Template = (args) => ({
  components: { SplashScreen },
  setup() {
    return { args };
  },
  template: '<SplashScreen v-bind="args"/>',
});

export const Basic = Template.bind({});
Basic.args = {};
