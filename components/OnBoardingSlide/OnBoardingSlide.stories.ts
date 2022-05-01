import OnBoardingSlide from './OnBoardingSlide.vue';
import slideMocks from '../OnBoarding/mock';

export default {
  title: 'OnBoardingSlide',
  component: OnBoardingSlide,
  args: {
    slide: slideMocks[1],
    index: 0,
    amountOfSlides: 3,
  },
};

const Template = (args) => ({
  components: { OnBoardingSlide },
  setup() {
    return { args };
  },
  template: '<OnBoardingSlide v-bind="args"/>',
});

export const Basic = Template.bind({});
Basic.args = {};
