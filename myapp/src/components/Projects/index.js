import './index.css'
import { v4 as uuidv4 } from 'uuid';

const projectsData = [
    {id: uuidv4(), name: "Todos Application", technologiesUsed: ["HTML","CSS", "JavaScript"], gitHubLink: "", liveLink: "", imgUrl: "https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718349686/oz0xqg51z3iibnbe7cer.png" },
    {id: uuidv4(), name: "IPL Dashboard Application", technologiesUsed: ["HTML","CSS", "JavaScript", "React Js", "REST APIs"], gitHubLink: "https://github.com/krishnapraveen84/IPL-DashBoard-App", liveLink: "https://ipldashboard84.ccbp.tech/", imgUrl: "https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718348693/i7hxgsarqkhj6jfqhczu.png" },
    {id: uuidv4(), name: "Covid19 Dashboard Application", technologiesUsed: ["HTML","CSS", "JavaScript", "React Js", "REST APIs", "Recharts"], gitHubLink: "https://github.com/krishnapraveen84/Covid19-DashBoard-APP84", liveLink: "https://covid19db84.ccbp.tech/", imgUrl: "https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718348756/fmjezid93lxfbywdd1sj.png" },
    {id: uuidv4(), name: "NxtTrends Application", technologiesUsed: ["HTML","CSS", "JavaScript", "React Js", "REST APIs", "JWT Token", "Cookies"], gitHubLink: "https://github.com/krishnapraveen84/NxtTrndsApp", liveLink: "", imgUrl: "https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718348925/hox2rj9ui1hi6jhuii6u.png" },
    {id: uuidv4(), name: "Jobby Application", technologiesUsed: ["HTML","CSS", "JavaScript", "React Js", "REST APIs", "Cookies"], gitHubLink: "https://github.com/krishnapraveen84/Jobby-Application", liveLink: "https://jobbyapp84.ccbp.tech/", imgUrl: "https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718348793/aucdxxvqxjpvf4zek7gs.png" },
    {id: uuidv4(), name: "MovieDB Application", technologiesUsed: ["HTML","CSS", "JavaScript", "React Js", "REST APIs"], gitHubLink: "https://github.com/krishnapraveen84/MovieDataBase-App", liveLink: "", imgUrl: "https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718349010/sqbqbc6g4fn4wvtfovtz.png" },
    {id: uuidv4(), name: "NxtWatch Application", technologiesUsed: ["HTML","CSS", "JavaScript", "React Js", "REST APIs", "React Context", "Third-party-packes"], gitHubLink: "https://github.com/krishnapraveen84/Youtube-Clone-App-NxtWatch", liveLink: "", imgUrl: "https://res.cloudinary.com/dnwwyvtjx/image/upload/v1718349126/vej4gd9sz17fqnniybgm.png" },





]

const Projects = () => {
    return(
        <div className='projects-container'>
            <h3 className='skill-heading project-heading'>Projects</h3>
            <ul className='project-list-container'>
                {projectsData.map((each) => 
                <li key={each.id} className='project'>
                    <img className='project-img' src={each.imgUrl} />
                    <div className='project-details'>
                        <h4 className='project-name'>{each.name}</h4>
                        <div className='links-div'>
                            <a className='anchor-link' target="_blank" href={each.liveLink}><p className='link-name'>Live Link</p></a>
                            <a className='anchor-link' target="_blank" href={each.gitHubLink}><p className='link-name'>gitHub Link</p></a>
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default Projects