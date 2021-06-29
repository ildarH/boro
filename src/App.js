import React from 'react'

import './App.css';
import { useDispatch } from 'react-redux'
import { Menu, AppCard } from './components'

import { fetchData } from './redux/actions'

function App() {

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchData('catalog.json'))
  // }, [])
  


  return (
    <div className='App'>
      <Menu />
      <AppCard />
    </div>
  );
}

export default App;
