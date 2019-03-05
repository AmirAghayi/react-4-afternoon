import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import History from '../History/History';
import Contact from '../Contact/Contact';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>

          <Link 
          to="/about"
          className="subnav_links">  <h3>About</h3>  </Link>
          
          <Link 
          to="/about/history"
          className="subnav_links">  <h3>History</h3>  </Link>
          
          <Link 
          to="/about/contact"
          className="subnav_links">  <h3>Contact</h3>  </Link>

        </div>

        <div className='box'>
           <Switch>
             <Route component={ History } path="/about/History"/>
             <Route component={ Contact } path="/about/Contact"/>
             <Route path="/about" render={() => (
               <div>
                 <h1>About the University</h1>
                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus libero excepturi sed incidunt reiciendis a aut minus veniam praesentium deserunt asperiores aliquam numquam sunt laborum assumenda quae, accusantium eius deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam quae aperiam officiis porro provident dignissimos sequi natus ipsum? Impedit neque doloremque nam, distinctio quisquam rem incidunt veniam quae sed. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis quod alias porro iste sint vero dicta molestiae exercitationem distinctio sapiente natus saepe hic quisquam, facilis fugit similique, nulla rem! Laborum.</p>
               </div>
             )} 
             />
           </Switch>
        </div>
      </div>
    )
  }
}