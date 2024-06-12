import './index.css'
import { v4 as uuidv4 } from 'uuid';

const projectsData = [
    {id: uuidv4(), name: "Todos Application", technologiesUsed: ["HTML","CSS", "JavaScript"], gitHubLink: "", liveLink: "", imgUrl: "" },
    {id: uuidv4(), name: "Todos Application", technologiesUsed: ["HTML","CSS", "JavaScript"], gitHubLink: "", liveLink: "", imgUrl: "" }

]

const Projects = () => {
    return(
        <div className='projects-container'>
            <h3 className='skill-heading project-heading'>Projects</h3>
        </div>
    )
}

export default Projects