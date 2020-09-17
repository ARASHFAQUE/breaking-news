import React from 'react';
import './App.css';
import Fragment from './Components/Fragment/Fragment';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import TopHeadline from './Components/TopHeadline/TopHeadline';


function App() {
  return (
    <div>
      <h2>React Bootstrap</h2>
      <Navigation></Navigation>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <Fragment></Fragment>
    </div>
  );
}

export default App;
