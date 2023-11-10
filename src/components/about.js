import React from "react";
import ProfileClassBase from "./Profileclassbase";
import Profilefunctionalcompo from "./profile";
import { Outlet } from "react-router-dom";

class About extends React.Component {
  constructor(props){
    super(props)  
  }
  
  render () {
    return(
      <div> 
      <h1>About us Page</h1>
      <p>
      This is ana about Page
      </p>
      {/* <Profilefunctionalcompo name={"Onkar Shelke of functional component"} /> */}
      <ProfileClassBase name={"Onkar Shelke of ClassBase component"} />
    </div>
    )
  }
}

export default About;