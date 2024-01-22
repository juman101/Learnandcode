import React, { useState, useEffect, createElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StudentRoute from "../../../components/routes/StudentRoute";
import {  ListGroup } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Button, List, ListItem, Avatar } from '@mui/material'; 
import ReactMarkdown from "react-markdown";
import { BsPlay, BsCheckCircle, BsDashCircle } from "react-icons/bs"; // Import Bootstrap icons

const SingleCourse = () => {
  const [clicked, setClicked] = useState(-1);
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({ lessons: [] });
  const [completedLessons, setCompletedLessons] = useState([]);
  const [updateState, setUpdateState] = useState(false);

  const markCompleted = async () => {
    const { data } = await axios.post(`/api/mark-completed`, {
      courseId: course._id,
      lessonId: course.lessons[clicked]._id,
    });
    console.log(data);
    setCompletedLessons([...completedLessons, course.lessons[clicked]._id]);
  };

  const markIncompleted = async () => {
    try {
      const { data } = await axios.post(`/api/mark-incomplete`, {
        courseId: course._id,
        lessonId: course.lessons[clicked]._id,
      });
      console.log(data);
      const all = completedLessons;
      console.log("ALL => ", all);
      const index = all.indexOf(course.lessons[clicked]._id);
      if (index > -1) {
        all.splice(index, 1);
        console.log("ALL WITHOUT REMOVED => ", all);
        setCompletedLessons(all);
        setUpdateState(!updateState);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // router
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) loadCourse();
  }, [slug]);

  useEffect(() => {
    if (course) loadCompletedLessons();
  }, [course]);

  const loadCourse = async () => {
    const { data } = await axios.get(`/api/user/course/${slug}`);
    setCourse(data);
  };

  const loadCompletedLessons = async () => {
    const {data}=await axios.post(`/api/list-completed`,{
      courseId:course._id
  });
  setCompletedLessons(data);
  };

  return (
    <StudentRoute>
      <div className="row">
        <div className="col-md-2" style={{ maxWidth: 320 }}>
        <Button
            
            className="text-primary mt-1 btn-block mb-2"
            
          >
           
            {!collapsed && "Lessons"}
          </Button>

          {/* how many completed */}
          {!collapsed && course && (
            <div className="pt-2" style={{ borderBottom: "3px solid #222" }}>
              
              <span className="text-success">{completedLessons.length}</span>
              {" / "}
              <span className="text-danger">{course.lessons.length}</span>{" "}
              lessons completed
            </div>
          )}
          <ListGroup
            defaultActiveKey={clicked}
            style={{ height: "80vh", overflow: "scroll" }}
          >
            {course.lessons.map((lesson, index) => (
             <List>
                      
                           
                                <ListItem
                                button
                                onClick={() => setClicked(index)}
                                key={index}
                                sx={{ display: "flex", alignItems: "center",
                                backgroundColor: clicked === index ? "#ADD8E6" : "inherit",
                               color:clicked === index ? "#0000FF" : "inherit",  }}
                            >
                            
                                <Avatar sx={{ marginRight: 1 }}>{index + 1}</Avatar>
                                {lesson.title.substring(0, 30)}
                      
                                {completedLessons.includes(lesson._id)?(<BsCheckCircle
                                className="float-right text-primary ml-2" style={{marginTop:"13px"}}/>):
                                (< BsDashCircle
                                  className="float-right text-danger ml-2" style={{marginTop:"13px"}}/>)}
                            </ListItem>
                        
                    </List>
            ))}
          </ListGroup>
        </div>

        <div className="col-md-10">
          {clicked !== -1 ? (
            <>
            <div className="col alert alert-primary square">
                <b>{course.lessons[clicked].title.substring(0,30)}</b>

                {
                completedLessons.includes(course.lessons[clicked]._id) ?
                 (
                <span className="pointer"
                style={{float:"right"}}
                 onClick={markIncompleted}>
                  Mark as Incompleted
                </span> 
                ) : (<span className="pointer"
                style={{float:"right"}}
                 onClick={markCompleted}>
                  Mark as Completed
                </span> )
                }
            </div>
              {course.lessons[clicked].video &&
                course.lessons[clicked].video.Location && (
                  <>
                    <div className="wrapper">
                      <ReactPlayer
                        className="player"
                        url={course.lessons[clicked].video.Location}
                        width="100%"
                        height="500px"
                        controls
                      />
                    </div>
                  </>
                )}

              <ReactMarkdown
                children={course.lessons[clicked].content}
                className="single-post"
              />
            </>
          ) : (
            <div className="d-flex justify-content-center p-5">
              <div className="text-center p-5">
                <BsPlay className="text-primary display-1 p-5" />
                <p className="lead">Click on the lessons to start learning</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </StudentRoute>
  );
};

export default SingleCourse;
