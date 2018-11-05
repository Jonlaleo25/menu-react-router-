import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route,Switch }    from  'react-router-dom';
import Writers   from './Writers';
import { NotFound } from './Errors';
import Layout from './Layout';

export default class extends Component{
 state = {

   writers:[]

 }

 async componentDidMount(){

  const writers = await (await fetch('http://localhost:3004/writers?_embed=texts')).json()

  console.log(writers)
  this.setState({ writers})
   
  //  .then( res => res)
  //  .then(writers => this.setState({ writers}) )
 }

  render() {
    const { writers} = this.state
    return <BrowserRouter>
     
          <Layout writers={writers}>
                  {/* <ul>
                    <li>
                      <a href="/writers">Writers</a>
                        <Link to="">
                          Libro writers
                        </Link>
                    </li>
                    <li>
                        <Link to="/writers">
                            writers
                        </Link>
                    </li>
                  </ul> */}
                  
        
                  <Switch>
                      <Route exact path="/" render={()=><div>Home</div> } />
                      <Route path="/writers" render={
                        props=><Writers {...props} writers={writers}/>
                      }/>
                      
                      <Route component={NotFound}/>
                  </Switch>

            </Layout>
      </BrowserRouter>

    
  }
}


