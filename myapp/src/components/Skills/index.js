import './index.css';

const skills = [
    {id: 1, name: "HTML5", color: "#EF9C66"},
     {id: 2, name: "CSS", color: "#430A5D"},
     {id: 3, name: "JavaScript", color:"#2C3333"},
     {id: 4, name: "Python", color: "#005B41"},
     {id: 5, name: "React JS", color: "#00337C"},
     {id: 6, name: "Bootstrap", color: "#FF9A00"},
     {id: 7, name: "Git", color: "#6F4E37"},
     {id: 8, name: "GitHub", color: "#FF6500"},
     {id: 9, name: "Node JS", color: "#A34343"},
     {id: 10, name: "Express JS", color:"#113946"},
     {id: 11, name: "SQLite", color: "#005B41"}


];

const Skills = () => {
    return (
        <div className='skills-containers'>
            <h2 className='skill-heading'>Skills</h2>
            <ul className='skill-list'>{skills.map((each) => <li className='skill' key={each.id}><p className='skill-name' style={{color: each.color}}>{each.name}</p></li>)}</ul>
        </div>
    )
};

export default Skills;