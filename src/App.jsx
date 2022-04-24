import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import MortgageCalculator from './MortgageCalculator';
import Bank from 'Bank';
import AppBar from 'AppBar';
import {Ap, Header} from './App.styles'
function App() {
  return (
    <Ap>
        <AppBar />
      <Header>
        <Routes>
          <Route path='/' element={<Bank />} />
          <Route path='/calculator' element={<MortgageCalculator />} />
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </Header>
       <Toaster position="top-right"/>
    </Ap>
  )
}

export default App;