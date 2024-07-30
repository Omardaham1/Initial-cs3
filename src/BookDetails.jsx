
import { useLocation } from 'react-router-dom';

const BookDetail = () => {
    const location = useLocation();
    const { bookData } = location.state || {};
    return (
        <>
            Description: {bookData.description}
        </>
    )
}

export default BookDetail;