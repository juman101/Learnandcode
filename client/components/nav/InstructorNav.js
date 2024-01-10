import React from 'react'
import Link from 'next/link'

const InstructorNav = () => {
  return (
    <div className='nav flex-column nav-pills mt-2'>
         <Link href="/user">
              
                Dashboard
              
            </Link>
            <Link href="/instructor/course/create">
              
              CREATE COURSE
            
          </Link>
    </div>
  )
}

export default InstructorNav;
