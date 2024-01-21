
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import axios from "axios";

const SingleCourse = ()=>
{


    const[loading , setLoading]=useState(false);
    const[course, setCourse]=useState({lessons:[]});
const router =useRouter()
const {slug}=router.query;

useEffect(()=>
{
    if(slug)loadCourse()

},[slug])

const loadCourse=async()=>
{
    const{data}=await axios.get(`/api/course/${slug}`);
    setCourse(data);
};

    return (
        <>
        <h1>
            Course Slug is {JSON.stringify(router.query.slug)}
        </h1>
        
        </>
    )
}

export default  SingleCourse