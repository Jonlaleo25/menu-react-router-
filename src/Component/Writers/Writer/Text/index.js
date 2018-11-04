import React, { Fragment}  from 'react';

export default  ({ title, description, published}) =>
<Fragment>
    <h4>
        {title}

        {published ? `( ${ published })` : ''}
    </h4>
    <p>
        {description ? description: <li>Sin ninguna descripcion </li>}
    </p>
</Fragment>

