import React from 'react';
import { Link } from 'react-router-dom'

const home = () => {
  return(
    <div>
      <p>
        Welcome to Creature Coliseum, a tool for Dungeons and Dragons 5th Edition Dungeon Masters to plan out combat encounters for their players enjoyment--and their own! 
      </p>
      <p>  
        Every publicly available monster is able to be referenced here--from the 5e System Reference Document, to 3rd party resources like the Tome of Beasts and the Creature Codex. Each entry has a link to the monster's statblock for ease of reference, and we have provided a wide variety of filters and search mechanisms, so you can find the perfect creatures to fill your coliseum!
      </p>
      <p>
        Get started looking through all the monsters <Link to='/monsters'>here</Link>
      </p>
    <Link to='/encounters'>Encounters</Link>
    <Link to='/breeds'>Breeds</Link>
    </div>
  )
}

export default home