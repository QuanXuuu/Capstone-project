import RecipeForm from './RecipeForm.js';

export default {
  title: 'Components/RecipeForm',
  component: RecipeForm,
  argTypes: {onCreateRecipe: {action: 'onCreateRecipe'}},
};

const Template = args => <RecipeForm {...args} />;

export const Default = Template.bind({});
