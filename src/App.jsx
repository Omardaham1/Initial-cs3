import { useEffect,useState } from "react"




  const App=()=> {
   
    const [allBooks, setAllBooks] = useState([]);
    
    
   
    useEffect(()=>{
      const getBooks = async()=> {
      const response = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
      const responseJson = await response.json();
      const books = responseJson.books
      setAllBooks(books);
      console.log(books);
    }
    getBooks();
 },[]);

 
  
 
 
 return (
  <>
    <h1>Omar's Book List</h1>
   
    <ul>
    {
     
       allBooks.map((singleBook)=>{
           console.log(singleBook);
           return <li key={singleBook.id}> Title: {singleBook.title}<br />Author: {singleBook.author}<br/> <img src={singleBook.coverimage} alt="Book"/><br/> </li>
       })
     }
   </ul>
</>
 )
 
}
export default App
