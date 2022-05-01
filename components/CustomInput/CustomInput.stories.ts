import CustomInput from './CustomInput.vue';

export default {
  title: 'CustomInput',
  component: CustomInput,
  args: {},
};

const Template = (args) => ({
  components: { CustomInput },
  setup() {
    return { args };
  },
  template: '<CustomInput v-bind="args"/>',
});

export const Basic = Template.bind({});
Basic.args = {};
