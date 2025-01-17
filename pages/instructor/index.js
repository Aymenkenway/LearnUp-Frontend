import { useEffect, useState } from 'react'
import axios from 'axios'
import InstructorRoute from '../../components/routes/InstructorRoute'
import { Avatar, Tooltip } from 'antd'
import Link from 'next/link'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const InstructorIndex = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    loadCourses()
  }, [])

  const loadCourses = async () => {
    const { data } = await axios.get('/api/instructor-courses')
    setCourses(data)
  }
  const myStyle = { marginTop: '-15px', fontSize: '10px' }

  return (
    <InstructorRoute>
      <h1 className='jumbotron text-center square'>Instructor Dashboard</h1>
      {/* <pre>{JSON.stringify(courses, null, 4)}</pre> */}
      {courses &&
        courses.map((course) => (
          <>
            <div className='media pt-2'>
              <Avatar
                size={80}
                src={course.image ? course.image.url : '/course.png'}
              />

              {console.log(course)}

              <div className='media-body pl-2'>
                <div className='row'>
                  <div className='col'>
                    <Link
                      legacyBehavior
                      href={`/instructor/course/view/${course.slug}`}
                      className='pointer'
                    >
                      <a className='mt-2 text-primary'>
                        <h5 className='pt-2'>{course.name}</h5>
                      </a>
                    </Link>
                    <p style={{ marginTop: '-10px' }}>
                      {course.lessons.length} Lessons
                    </p>

                    {course.lessons.length < 5 ? (
                      <p
                        style={{ marginTop: '-15px', fontSize: '10px' }}
                        className='text-warning'
                      >
                        At least 5 lessons are required to publish a course
                      </p>
                    ) : course.published ? (
                      <p
                        style={{ marginTop: '-15px', fontSize: '10px' }}
                        className='text-success'
                      >
                        Your course is live in the marketplace
                      </p>
                    ) : (
                      <p
                        style={{ marginTop: '-15px', fontSize: '10px' }}
                        className='text-success'
                      >
                        Your course is ready to be published
                      </p>
                    )}
                  </div>
                  <div className='mt-3 float-right pr-4 text-center'>
                    {course.published ? (
                      <div>
                        <CheckCircleOutlined className='h5 pointer text-success' />
                        <br />
                        <small className='text-muted'>Published</small>
                      </div>
                    ) : (
                      <div>
                        <CloseCircleOutlined className='h5 pointer text-warning' />
                        <br />
                        <small className='text-muted'>Unpublished</small>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </InstructorRoute>
  )
}

export default InstructorIndex
