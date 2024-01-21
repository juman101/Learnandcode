import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SingleCourseJumbotron from "../../components/cards/SingleCourseJumbotron";
import PreviewModal from "../../components/modal/PreviewModal";
import SingleCourseLessons from "../../components/cards/SingleCourseLessons";
import { Context } from "../../context";
import { toast } from "react-toastify";
import Script from "next/script";

// import { checkEnrollment } from "../../../server/controllers/course";

const SingleCourse = ({ course }) => {
//  // router
 const router = useRouter();
 const {slug}=router.query;

//  state
const [preview,setPreview]=useState("");
const [showModal,setShowModal]=useState(false);
const [loading,setLoading]=useState(false);
const [enrolled,setEnrolled]=useState({});
// context
const {state:{user},
}=useContext(Context);

useEffect(()=>
{
    if(user && course) checkEnrollment()
},[user,course])

const checkEnrollment=async ()=>
{
    const {data}=await axios.get(`/api/check-enrollment/${course._id}`);
    // console.log(data);
    setEnrolled(data);
}

const handlePaidEnrollment=async()=>{
    try{
        if(!user) router.push("/login");

        if(enrolled.status) return router.push(`/user/course/${enrolled.course.slug}`);
        setLoading(true);

        const {data} = await axios.post(`/api/paid-enrollment/${course._id}`);
        // console.log(data);
        // initPayment(data);
        router.push(`/user/course/${enrolled.course.slug}`);
    }catch(err){
        console.log(err);
    }
}

const handleFreeEnrollment=async (e)=>
{
    e.preventDefault();
    try{
        if(!user) router.push("/login");

        if(enrolled.status) return router.push(`/user/course/${enrolled.course.slug}`);
        setLoading(true);
        const {data}=await axios.post(`/api/free-enrollment/${course._id}`);
        toast(data.message);
        setLoading(false);
        router.push(`/user/course/${data.course.slug}`);
    }catch(err)
    {
        toast("Enrollment failed");
        console.log(err);
        setLoading(false);
    }
}

 return (
    <>
       

        <SingleCourseJumbotron
        course={course}
        showModal={showModal}
        setShowModal={setShowModal}
        preview={preview}
        setPreview={setPreview} 
        user={user}
        loading={loading}
        handleFreeEnrollment={handleFreeEnrollment}
        handlePaidEnrollment={handlePaidEnrollment}
        enrolled={enrolled}
        setEnrolled={setEnrolled}/>


        <PreviewModal
            showModal={showModal}
            setShowModal={setShowModal}
            preview={preview} />

        { course.lessons && (
                <SingleCourseLessons lessons={course.lessons} 
                setPreview={setPreview} 
                showModal={showModal}
                setShowModal={setShowModal} />
            )
        }
    </>
 );
};
export async function getServerSideProps({ query }) 
{
   
    const { data } = await axios.get(`http://localhost:3000/api/course/${query.slug}`);
    console.log(data);
    return {
      props: {
        course: data,

      },

    };
  }

  export default SingleCourse;