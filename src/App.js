import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Archive } from './pages/Archive';
import { Important } from './pages/Important';
import { Bin } from './pages/Bin';

import {Navbar} from './components/Navbar'
import { Sidebar } from './components/SideBar'
import { useReducer } from 'react';
import { NoteReducer } from './reducers/noteReducer'
import { Footer } from './components/Footer';

function App() {
  
    const initialState={
        title:'',
        text:'',
        notes:[]
    }

    const[state,dispatch]=useReducer(NoteReducer,initialState)

  return (
    <>
        <Navbar />

        <main className='p-2 flex bg-gradient-to-br from-gray-50 to-purple-50'>

          <Sidebar className='flex'  />

          <Routes>
            <Route path='/' element={<Home state={state} dispatch={dispatch}/>} />
            <Route path='/archive' element={<Archive state={state} dispatch={dispatch}/>} />
            <Route path='/important' element={<Important state={state} dispatch={dispatch}/>} />
            <Route path='/bin' element={<Bin state={state} dispatch={dispatch}/>} />
          </Routes>

        </main>
      <Footer/>
    </>

  );
}

export default App;
