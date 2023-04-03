import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Tabs, Navbar } from './Components/General';
import { INVEST_TABS_TITLE, DISCOUNT_TABS_TITLE } from './consts/App';
import {
  DiscountPrice,
  DiscountPercent,
  Invest,
  AverageStockPrice,
  Game,
} from './Components/Tools';
import { Home } from './Components/MainCommponents';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route
            path='/invest'
            element={
              <Tabs
                tabsTitle={INVEST_TABS_TITLE}
                items={[<Invest />, <AverageStockPrice />]}
              />
            }
          />
          <Route
            path='/discount'
            element={
              <Tabs
                tabsTitle={DISCOUNT_TABS_TITLE}
                items={[<DiscountPrice />, <DiscountPercent />]}
              />
            }
          />
          <Route path='/Game' element={<Game />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
