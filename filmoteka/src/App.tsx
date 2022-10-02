import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import {Header} from './components/header'
import { Main } from './components/Main.1';
import { ButtonUp } from './components/smallComponents/buttonUp';
import { Navigation } from "./components/smallComponents/naivigation";
import { SearchForm } from "./components/smallComponents/searchForm";

function App() {
  return (
    <div>
      <Header>
        <Navigation />
        <SearchForm/>
        </Header>
      
        <Main>
          <ButtonUp />
          </Main>
    </div>
  );
}

export default App;
