import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';

const Header = props => {
  return <Fragment>
    <header>
      <h1>Meals</h1>
      <button>Cart</button>
    </header>
    <div>
      <img></img>
    </div>
  </Fragment>
};

export default Header;