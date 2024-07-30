import { Link } from 'react-router-dom';

const Nav = () => {
    const logout = () => {
        localStorage.removeItem('loggedIn')
        window.location.href = '/';
    }

    const isLogged = () => {
        const user = localStorage.getItem('loggedIn')
        return user ?? false;
    }
    
    return (
        <>
        <div>Navigation</div>
        {isLogged() && <div><button onClick={logout}>Logout</button></div>}
        {!isLogged() && <div><Link to="/login">Login</Link></div>}
    
        </>
    )
}

export default Nav