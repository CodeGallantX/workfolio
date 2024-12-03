import CodeIcon from '../../assets/images/code-icon.png'
import Education from '../../assets/images/edu-icon.png'
import Projects from '../../assets/images/project-icon.png'
import { Link } from 'react-router-dom'
import './MoreInfo.css'

const MoreInfo = () => {
  return (
    <div className='more-info'>
              <div className='languages' data-aos="fade-up">
                <img src={CodeIcon} alt="" /> 
                <h4>Stack</h4>
                <p>Full-Stack, Data Science, AI/ML</p>
              </div>
              <div className='education' data-aos="fade-up" data-aos-delay="200">
                <img src={Education} alt="" />
                <h4>Education</h4>
                <p><span className="font-bold">Computer Science</span> <br/> Lagos University of Science and Technology</p>
              </div>
              <div className='projects' data-aos="fade-up" data-aos-delay="400">
                <img src={Projects} alt="" />
                <h4>Projects</h4>
                <p className='viewp'><Link to='/portfolio'>Click to View All My Projects</Link></p>
              </div>
            </div>
  )
}

export default MoreInfo