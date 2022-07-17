import RecipeForm from './RecipeForm.js';

export default {
  title: 'Components/RecipeForm',
  component: RecipeForm,
  argTypes: {onAddRecipe: {action: 'onAddRecipe'}},
};

const Template = args => <RecipeForm {...args} />;

export const Default = Template.bind({});
