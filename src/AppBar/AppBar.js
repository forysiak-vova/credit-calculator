import {Header, Link} from './AppBar.styles'

const AppBar = () => {
   return (
      <Header>
      <Link to='/'>Banc</Link>
       <Link to='/calculator'>Calculator</Link>
      </Header>
  
   )
};

export default AppBar;