import React from 'react'
import './projects.css';
function Projects(props) {
  const {projects_data}=props;
 
  const mediaQuerymain={
    flexDirection:"column",
    display: "grid",
    gridTemplateColumns: "repeat(1, minmax(200px, 500px))",
    gridGap: "5px",
    justifyContent: "space-around"
  }

  return (
    <section className='main-card-container' style={{...(window.innerWidth <= 998 && mediaQuerymain)}}>
    {projects_data.map((item,index)=>{
         const {id, name, link,frontend_technologies, image } = item;

        return(
          <>
          <div className="card-container" key={id}>
            <div className="card ">
                  <div className="card-body">
       
       
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-description">Frontend technologies:{frontend_technologies}</p>
          <img className="card-image" src={image} alt="no img" />
         <div className='img'>
         <p>See Live project:</p><a href={link}>Click here</a>
         </div>
          
        </div>
   </div>
   </div>
   </div>
    </>
    );
})}
    </section>
  );
};
export default Projects
