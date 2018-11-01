import React, {  Fragment } from 'react';

export default  ({ name, born,deceased, description,image}) =>

// console.log(match) ||
<Fragment>
   
<h1>{name}</h1>
<h3>{ born} &mdash: {deceased} </h3>
<p>
{description}
</p>
<img src={image} alt={name} style={{maxWidth: 300}}/>


</Fragment>