import RegisterScreen from './RegisterScreen.vue';

export default {
  title: 'RegisterScreen',
  component: RegisterScreen,
  args: {},
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: { RegisterScreen },
  setup() {
    return { args };
  },
  template: '<RegisterScreen v-bind="args"/>',
});

export const Basic = Template.bind({});
Basic.args = {};
