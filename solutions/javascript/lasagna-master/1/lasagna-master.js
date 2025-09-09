/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timeRemaining) {
  if(timeRemaining > 0) {
    return 'Not done, please wait.';
  }
  if(timeRemaining == undefined || timeRemaining == null){
    return 'You forgot to set the timer.'
  }
  return "Lasagna is done.";
}

export function preparationTime(layers, time){
  if(time != null){
    return layers.length * time;
  }
  return layers.length * 2;
}

export function quantities(layers){
  let sauce = 'sauce'
  let noodles = 'noodles'
  let lasagna = {noodles: 0, sauce: 0}
  for (let i = 0; i < layers.length; i++) {
    if (layers[i] === 'sauce'){
       lasagna[sauce] += 0.2;
    }
    else if (layers[i] === 'noodles'){
       lasagna[noodles] += 50
    }
  }
  return lasagna
}

export function addSecretIngredient(friendsIngredients, myIngredients){
  let one = friendsIngredients.pop()
  friendsIngredients.push(one)
  myIngredients.push(one)
}

export function scaleRecipe(recipe, number){
  let newRecipe = {};
  for (let ingredient in recipe) {
    let og = recipe[ingredient];
    og = (recipe[ingredient] * number) / 2;
    newRecipe[ingredient] = og; 
  }
  return newRecipe
}