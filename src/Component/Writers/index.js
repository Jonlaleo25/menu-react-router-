import  React, { Fragment} from 'react';
import {Link, Route, Redirect }    from  'react-router-dom';
import Writer  from  './Writer'; 
import { NotFound } from '../Errors';

export default ({ match:{ url }, writers })=>
<Fragment>
    <ul>
      {writers.map(({ id, name }) => 
        <li key={id}>
            <Link to={`${url}/${id}`}>{name}</Link>
        </li>
        )}
    </ul>
<Route  path={url} render={ 
    ()=> <h3>selecciona algun dato</h3>} 
    />

    <Route exact path={ `${url}/:writerId` }  render= {
       ({match}) =>{
           const writer = writers.find(writer  =>  writer.id === match.params.writerId)
           if(!writer){
               return <NotFound />
           }
             return <Writer {...writer}/>
          } 
        }/>
</Fragment>
