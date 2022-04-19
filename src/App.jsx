import { Routes, Route, Navigate } from 'react-router-dom';

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
    </Ap>
  )
}

export default App;