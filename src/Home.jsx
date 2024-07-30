import { useEffect, useState } from "react"
import Booklist from "./BookList";

const Home = () => {
    const [allBooks, setAllBooks] = useState([]);    

    useEffect(()=>{
        const getBooks = async() => {
            const response = await fetch ("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
            const responseJson = await response.json();
            const books = responseJson.books
            setAllBooks(books);
            console.log(books);
        }
        getBooks();
    },[]);

    const isLogged = () => {
        const user = localStorage.getItem('loggedIn')
        return user ?? false;
    }

    return (
    <>
        <h1>Omar's Book List</h1>
        {!isLogged() && <>Please Log In</>}
        {isLogged() && <Booklist allBooks={allBooks} />}
    </>
    )
}

export default Home;