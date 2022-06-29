import {render, screen} from '@testing-library/react';
//import userEvent from '@testing-library/user-event';

import RecipeForm from './RecipeForm.js';

describe('RecipeForm', () => {
  it('is an accessible form', () => {
    render(<RecipeForm />);
    screen.getByRole('form');
    screen.getByLabelText('Add Recipe:');
    screen.getByRole('button', {name: 'Add new recipe'});
  });
});
