import React from 'react';

function Dinner(props) {
  return (
      <div>
  <h1>Today we are serving {props.DishName}</h1>
  <img src={require('./1.webp')} alt="iamage not found"/>
  <h1>Today we are also serving {props.AnotherDishName}</h1>
  <img src={require('./2.webp')} alt="iamage not found"/>
  </div>
  );
}
export default Dinner;
