import {Link} from 'react-router-dom'

const Contact =() => {
    return(
        <>
        <h1>Contact Us</h1>
        <h3>We know that choosing the right institute or a career path can be a 
            difficult and tiring process, and that's why we're here for you. Contact 
            us to ask any questions, we'll respond over email as soon as possible!</h3>
        <br />
        <h4>Write to us at</h4>
        <Link to='/'>admissions@masaischool.com</Link>
        </>
    )
}

export default Contact