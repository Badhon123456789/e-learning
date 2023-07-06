import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Course.css";

const Course = (props) => {
  const {title, price} = props.item;
  const handleAddCourse = props.handleAddCourse;
  return (
         <div className="course ">
            
        <h4 id="title">{title}</h4>
        <h5 id="price">Price: {price}TK</h5>
       <button onClick={()=>{handleAddCourse(props.item)}}  className="btn btn-success">Enroll Now</button>
       
      </div>
    
  );
};

export default Course;
