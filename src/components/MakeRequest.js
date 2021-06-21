import { useEffect } from "react";

const showRecipe = async () => {
  try {
    const resp = await fetch(`https://forkify-api.herokuapp.com/api/search`);
    const data = await resp.json();
    if (!resp.ok) throw new Error(`${data.message} ${resp.status}`);
    console.log(data);
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);
  } catch (error) {
    console.log(error);
  }
};
const MakeRequest = () => {
  useEffect(() => showRecipe(), []);
  return (
    <div>
      <h1>Data has came</h1>
    </div>
  );
};

export default MakeRequest;
