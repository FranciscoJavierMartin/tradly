import LoginScreen from './LoginScreen.vue';

export default {
  title: 'LoginScreen',
  component: LoginScreen,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { LoginScreen },
  setup() {
    return { args };
  },
  template: '<LoginScreen v-bind="args"/>',
});

export const Basic = Template.bind({});
Basic.args = {};
