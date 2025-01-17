import React from 'react'
import { useEffect, useState } from 'react'

import axios from 'axios'
import CourseCard from '@/components/cards/CourseCard'
const Index = ({ courses, router }) => {
  //const [courses, setCourses] = useState([])

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     const { data } = await axios.get('/api/courses')
  //     setCourses(data)
  //   }
  //   fetchCourses()
  // })
  return (
    <>
      <h1 className='jumbotron text-center square'>LearnUp</h1>

      <div className='container-fluid'>
        <div className='row'>
          {courses.map((course) => (
            <div key={course._id} className='col-md-4'>
              <CourseCard course={course} />
              {<pre>{JSON.stringify(course, null, 4)}</pre>}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`)
  // console.log("DATA LENGTH =====> ", data.length);
  return {
    props: {
      courses: data,
    },
  }
}

export default Index
