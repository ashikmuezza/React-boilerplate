import React from 'react'

import {Feature,Navbar,Brand,Menu1} from './components'
import {Header,Footer} from './containers'
import './App.css'



const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <div className='page1'>
     
      <Menu1/>
      </div>
    </div>
  )
}

export default App;
