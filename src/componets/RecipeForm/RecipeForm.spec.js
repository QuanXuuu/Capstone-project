import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import RecipeForm from './RecipeForm.js';

describe('RecipeForm', () => {
  it('is an accessible form', () => {
    render(<RecipeForm />);
    screen.getByRole('form');
    screen.getByLabelText('Add Recipe:');
    screen.getByRole('button', {name: 'Add new recipe'});
  });

  it('calls onCreateRecipe on submit', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<RecipeForm onCreateRecipe={callback} />);

    const input = screen.getByLabelText('Add Recipe:');
    await user.type(input, 'Bibimbap{Enter}');
    expect(callback).toHaveBeenCalledWith('Bibimbap');
  });

  it('does trim whitespace before submit', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<RecipeForm onCreateRecipe={callback} />);

    const input = screen.getByLabelText('Add Recipe:');
    await user.type(input, '      Thai curry soup    {Enter}');
    expect(callback).toHaveBeenCalledWith('Thai curry soup');
  });

  it('does not call onCreateRecipe with only whitespace', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();

    render(<RecipeForm onCreateRecipe={callback} />);

    const input = screen.getByLabelText('Add Recipe:');
    await user.type(input, '           {Enter}');
    expect(callback).not.toHaveBeenCalled();
  });
});
