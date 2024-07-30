import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from "./Home";
import Account from './Account';
import BookDetail from "./BookDetails";


  const App=()=> {   

 return (
      <>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<Account/>} />
          <Route path="/book-detail" element={<BookDetail/>} />
        </Routes>
      </>
 )
 
}
export default App
