import React from "react";
import "./project-page.styles.scss";
import Shoppie from "../../assets/images/shoppie-tile1.png";
import Chello from "../../assets/images/chello-tile.png";
import Critter from "../../assets/images/Critter-02.png";
import Shoppie4 from "../../assets/images/oKupid.png";
import ProjectTile from "../../components/Project Tile/ProjectTile";

const ProjectPage = () => {
  return (
    <div className='project-page'>
      <ProjectTile image={Shoppie} title='Shoppie' description="Ecommerce App" />
      <ProjectTile image={Chello} title='Chello' description="Trello Clone"/>
      <ProjectTile image={Critter} title='Critter' description="Twitter Feed Clone"/>
      <ProjectTile image={Shoppie4} title='oKupid' description="Dating App"/>
    </div>
  );
};

export default ProjectPage;
