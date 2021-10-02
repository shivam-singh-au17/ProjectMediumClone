import React from 'react';
import './App.css';
import { Home_Signin } from './components/Home_Signin/Home_Signin';
import { OurStory } from './components/OurStory/OurStory';
import { Saved } from './components/Saved/Saved';
import { Signin } from './components/Signin/Signin';
import { Signup } from './components/Signup/Signup';
import { Write } from './components/Write/Write';

function App() {

  return (
    <>
      {/* <OurStory/> */}
     {/* <Signup /> */}
     {/* <Signin /> */}
     {/* <Home_Signin /> */}
     <Saved />
    </>
  );
}

export default App;

