import React, {  Fragment } from 'react';
import { Link}    from  'react-router-dom';

export default  ({ name, born,deceased, description,image,texts}) =>

// console.log(match) ||
<Fragment>
   
<h1>{name}</h1>
<h3>{ born} &mdash: {deceased} </h3>
<p>
{description}
</p>
<img src={image} alt={name} style={{maxWidth: 300}}/>


<ul>
    {texts.map(text =>
        <li>
           <Link to={`${url}/texts`}/>
        </li>
    )}
</ul>

</Fragment>