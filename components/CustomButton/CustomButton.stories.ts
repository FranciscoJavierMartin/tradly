import CustomButton from './CustomButton.vue';

export default {
  title: 'CustomButton',
  component: CustomButton,
  args: {
    text: 'Text',
  },
};

const Template = (args) => ({
  components: { CustomButton },
  setup() {
    return { args };
  },
  template: '<CustomButton v-bind="args"/>',
});

export const Basic = Template.bind({});
Basic.args = {};

export const Inverted = Template.bind({});
Inverted.args = {
  inverted: true,
};
