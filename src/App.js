import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {Contact} from "./contacts/Contact";
import {Footer} from "./fotter/Footer";

function App() {
  return (
    <main className="App">
      <Header/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
