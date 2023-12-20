// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Cards } from './Cards';
import { Header } from './components/header/Header';
import CardSect from './components/main/CardSect';
import MyButton from './components/main/MyButton';



function App() {
  

  return (
    <>
      <Header />
      <div>
      <ul>
        {Cards['Featured'].map((Arr, ind) => <CardSect figcaption={true} key={ind} data={Arr}/>)}
        <MyButton colorBlack={true} btnText={false}></MyButton>
      </ul>
      </div>
      <div>
        <ul>
        {Cards['Trending'].map((child, i) => <CardSect figcaption={false} key={i} data={child} />)}

        </ul>
      </div>
    </>
  );
}

export default App
