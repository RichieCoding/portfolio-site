import React from "react";
import "./project-page.styles.scss";
import Shoppie from "../../assets/images/shoppie-tile.png";
import Chello from "../../assets/images/chello-tile.png";
import Critter from "../../assets/images/Critter-02.png";
import Shoppie4 from "../../assets/images/oKupid.png";
import ProjectTile from "../../components/Project Tile/ProjectTile";

const ProjectPage = () => {
  return (
    <div className='project-page'>
      <ProjectTile image={Shoppie} title='Shoppie' description="Shopify Clone" />
      <ProjectTile image={Chello} title='Chello' />
      <ProjectTile image={Critter} title='Critter' />
      <ProjectTile image={Shoppie4} title='oKupid' />
    </div>
  );
};

export default ProjectPage;
