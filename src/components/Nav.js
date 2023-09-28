import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => <h2>Home</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

const Nav = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Route path='/home' component={Home} />
      <Route path='/dashboard' component={Dashboard} />
    </div>
  </Router>
);

export default Nav;
