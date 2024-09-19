import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return(
        <>
            <h1>ABOUT US</h1>
            <h4>Masai is an outcome driven career school. Our mission is to skill 
                India’s untapped & underutilized talent, and to train them for some of 
                the most in-demand jobs in the world. We are introducing a new model of 
                higher education in which we, Masai, invest in our students’ future and 
                success. As India’s fastest growing career institute, Masai has one
                 goal: unlocking the human potential of India by making our education 
                system outcome driven.</h4>

            <button onClick={handleNavigate}>Go to HOME Page</button>
        </>
    )
}

export default About