import logo from "./logo.svg";
import "./App.css";
import Course from "./Components/Course/Course";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

function App() {
  const list = [
    {
       title: "Introduction to Online Learning and Digital Skills",
      price: 10000
     }, 
    { 
      title: "Effective Online Communication and Collaboration",
      price: 5500 
    },
    {
      title: "Digital Marketing Fundamentals",
      price: 8000 
    },
    {
      title: "Website Design and Development",
      price: 5000,
    },
    {
      title: "Social Media Management and Strategy",
      price: 4500,
    },
    {
      title: "Content Creation and Copywriting for the Web",
      price: 3000,
    },
    {
      title: "Search Engine Optimization (SEO) Basics",
      price: 6000,
    },
    {
      title: "E-commerce and Online Business Management",
      price: 4000,
    },
    {
      title: "Data Analytics and Insights for Online Success",
      price: 5000,
    },
    {
      title: "Cybersecurity and Online Privacy",
      price: 9000,
    },
    {
      title: "Online Teaching and Instructional Design",
      price: 7000,
    },
    {
      title: "Remote Work and Virtual Team Management",
      price: 8000,
    },
  ];

  const style = {
    borderRadius: "10px",
    boxShadow: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  };
  const [count, setCount] = useState([])
  const handleAddCourse = (num)=> {
    setCount([...count, num])
  }
  const all = count.reduce((total,sum)=>total + sum.price,0)
  return (
    <div className="App">
      <h2>Your Courses: {count.length}</h2>
      <h3>Total Price: {all}</h3>
      <div style={style}>
        {
        list.map((item) => 
          <Course item={item} handleAddCourse={handleAddCourse} key={item.title}></Course>
        )
        }

        {/* <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course>
        <Course></Course> */}
      </div>
    </div>
  );
}

export default App;
