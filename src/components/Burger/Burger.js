import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  // const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
  //     return [...Array(props.ingredients[igKey])].map((_, i) => {
  //       return <BurgerIngredient key={igKey + i} type={igKey} />;
  //     });
  // })
  // .reduce((arr, el) => {
  //   return arr.concat(el)
  // }, []);


  let transformedIngredients = [];
     Object.keys(props.ingredients).forEach((data) => {
         for (let i = 0; i < props.ingredients[data]; i++) {
             transformedIngredients.push(<BurgerIngredient key={data + i} type = {data}/>)
         }
     });

     if (transformedIngredients.length === 0){
       transformedIngredients.push('Please start adding some ingredients');
     }


  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>

      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>

    </div>
  );
};

export default burger;
