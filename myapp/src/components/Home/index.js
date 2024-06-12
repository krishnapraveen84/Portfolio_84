import {Component} from 'react'
import './index.css'
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

class Home extends Component{
    render(){
        return(
            <div className='bg-container'>
                <div className='content-section'>
                    <div className='details-container'>
                        <h1 className='heading'>I'm Krishna Praveen</h1>
                        <p className='profession'>Front-End Enthusiastic</p>
                        <p className='description'>Enthusiastic and quick-learning aspiring web developer with strong knowledge of front-end technologies.
                            Passionate about web    development and eager to create impactful and maintainable web applications.
                        </p>   
                        <div className='icons-div'>
                            <a href='https://www.linkedin.com/in/krishnapraveentumpala/' target='_blank'><IoLogoLinkedin className='icon' /></a>
                            <a href='https://github.com/krishnapraveen84/' target='_blank'><FaGithub className='icon' /></a>
                            <a href='mailto:sureshradha084@gmail.com' target='_blank'><MdEmail className='icon' /></a>
                        </div>
                    </div>
                    <img className='boy-img' src='https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718181382/kqr6jqadxslsih7l0qsz.png'/>
                </div>
                
            </div>
        )
    }
};
export default Home