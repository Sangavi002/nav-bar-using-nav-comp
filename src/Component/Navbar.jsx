import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <>
        <div style={{display:'flex',justifyContent: 'space-evenly'}}>
            <Link to='/'>Home </Link>
            <Link to='/product'>Products </Link>
            <Link to='/about'>About </Link>
            <Link to='/contact'>Contact </Link>
        </div>
        </>
    )
}

export default Navbar