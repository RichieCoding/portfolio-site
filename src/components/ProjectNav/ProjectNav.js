import React from "react";
import "./project-nav.styles.scss";
import { NavLink } from "react-router-dom";

const ProjectNav = () => {
  return (
    <div className='project-nav' style={{ paddingBottom: "75px"}}>
      <NavLink
        activeClassName='active-project active-shoppie'
        className='shoppie'
        to='/projects/Shoppie'
      >
        Shoppie
      </NavLink>
      <NavLink
        activeClassName='active-project active-chello'
        className='chello'
        to='/projects/Chello'
      >
        Chello
      </NavLink>
      <NavLink
        activeClassName='active-project active-critter'
        className='critter'
        to='/projects/Critter'
      >
        Critter
      </NavLink>
      <NavLink
        activeClassName='active-project active-okupid'
        className='okupid'
        to='/projects/oKupid'
      >
        oKupid
      </NavLink>
    </div>
  );
};

export default ProjectNav;
