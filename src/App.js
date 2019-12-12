import React, { PureComponent } from 'react';
import { CssBaseline } from '@material-ui/core';
import { Header, Footer } from './components/Layouts';
import { Viewer } from './components/Recipes';
import { ingredients, recipes } from './store';
import { Provider } from './context';

class App extends PureComponent {
  state = {
    recipes,
    recipe: {},
    editMode: false,
    category: ''
  }

  getRecipesByIngredients() {
    const initialRecipes = ingredients.reduce(
      (recipes, ingredients) => ({
      ...recipes,
      [ingredients]: []
    }), {});

    return Object.entries(
      this.state.recipes.reduce((recipes, recipe) => {
        const { ingredients } = recipe;

        recipes[ingredients] = [...recipes[ingredients], recipe];

        return recipes
      }, initialRecipes)
    )
  }

  handleCategorySelect = category =>
    this.setState({
        category
    })

  handleRecipeSelect = id =>
    this.setState(({ recipes }) => ({
      recipe: recipes.find(rec => rec.id === id),
      editMode: false
    }))

  handleRecipeCreate = recipe =>
    this.setState(({ recipes }) => ({
      recipes: [...recipes, recipe]
    }))

  handleRecipeDelete = id =>
    this.setState(({ recipes, recipe, editMode }) => ({
      recipes: recipes.filter(rec => rec.id !== id),
      editMode: recipe.id === id ? false : editMode,
      recipe: recipe.id === id ? {} : recipe
    }))

  handleRecipeSelectEdit = id =>
    this.setState(({ recipes }) => ({
      recipe: recipes.find(rec => rec.id === id),
      editMode: true
    }))

  handleRecipeEdit = recipe =>
    this.setState(({ recipes }) => ({
      recipes: [
        ...recipes.filter(rec => rec.id !== recipe.id),
        recipe
      ],
      recipe
    }))

  getContext = () => ({
    ingredients,
    ...this.state,
    recipesByIngredients: this.getRecipesByIngredients(),
    onCategorySelect: this.handleCategorySelect,
    onCreate: this.handleRecipeCreate,
    onEdit: this.handleRecipeEdit,
    onSelectEdit: this.handleRecipeSelectEdit,
    onDelete: this.handleRecipeDelete,
    onSelect: this.handleRecipeSelect
  })

  render() {
    return (
      <Provider value={this.getContext()}>
      <CssBaseline />
        <Header />

        <Viewer />

        <Footer  />
      </Provider>
    );
  }
}

export default App;
