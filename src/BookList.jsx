import React from 'react';
import { Link } from 'react-router-dom';

const Booklist = ({allBooks})=>{
  return (
    <>
    {allBooks.length === 0 && <ul></ul>}
    {allBooks.length > 0 && <ul>
    {
    
      allBooks.map((singleBook)=>{
          //console.log(singleBook);
          return <li key={singleBook.id}> <Link to="/book-detail" state={{bookData: singleBook}}> Title: {singleBook.title}<br />Author: {singleBook.author}<br/>Availability: {singleBook.available} <br /> <img src={singleBook.coverimage} alt="Book"/></Link><br/></li>
      })
    }
    </ul>}
    </>
  )

}

export default Booklist; 