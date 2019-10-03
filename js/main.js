var app = new Vue({
  el: '#app',
  data: {
    message: 'suh dude',
    pizza: {
      title: 'pizza',
      image: "image placeholder",
      hasIngredients: true,
      description: 'pizza is literally the best thing in the world',
      ingredients: ["dough", "cheese", "sauce", "oil"],
      calories: 'pizza',
      fats: 'sandwich',
      sodium: 'fish',
      similar: [
        {
          title: "Pasta",
          recipeKey: 1001,
          similarLink: "link goes here"
        },
        {
          title: "Ice Cream",
          recipeKey: 1041,
          similarLink: "link goes here"
        },
        {
          title: "Pasta",
          recipeKey: 1533,
          similarLink: "link goes here"
        },
        {
          title: "Eggplant",
          recipeKey: 0092,
          similarLink: "link goes here"
        },
        {
          title: "Chicken",
          recipeKey: 1231,
          similarLink: "link goes here"
        }
      ]
    }
  }
})
