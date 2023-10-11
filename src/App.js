import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import words from './Words.json';
import Words from './components/Words/Words';
import CardWords from './components/Card/CardWords';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
// import WordsContext from "./components/Words/Wordlist/wordsContext";
import wordsData from './store/wordsData';

import { observer } from "mobx-react-lite";
import { Provider } from "mobx-react";
import store from './store';





const App = observer(()=> {



// useEffect(()=>{
//   wordsData.addToWordsList();
// },[]);
  

  return (

    <Router>
      <>    
    <Header></Header>
      <div>
        <Provider {...store}>
          <Words/>
        <Routes>
        <Route path="/" element={<Words/>} />       
          <Route path="/card" element={<CardWords words={words}/>} />   
          <Route path = "*" element = {<NotFound/>}/>
        </Routes>
        </Provider>
      </div>
      </>
    </Router>
    
  );
  
  
})
export default App;




