import React from 'react';
import { Route, Link } from 'react-router-dom'
import EncounterPage from '../statelessComponents/EncounterPage'
import BreedList from './BreedList'
import Home from '../statelessComponents/Home'
import logo from '../assets/images/coliseumlogo.png'

const navBar = props => {
  return (
    <div>
      <div className="navbar">
        <ul className='navlist'>
          <li className='nav-li'><Link to="/"><img src={logo} className='logo' alt="Creature Coliseum Logo" /></Link></li>
          <li className='nav-li'><Link to="/" className='navlink'>Home</Link></li>
          <li className='nav-li'><Link to="/monsters" className='navlink'>Search Monsters</Link></li>
          <li className='nav-li'><Link to="/encounters" className='navlink'>Plan Encounters</Link></li>
        </ul>
      </div>
      <Route exact path={props.match.url} component={Home} />
      <Route path={`${props.match.url}encounters`} render={routerProps => <EncounterPage {...routerProps} />} />
      <Route path={`${props.match.url}monsters`} render={routerProps => <BreedList url={routerProps.match.url} />} />
    </div>
  )
}

export default navBar