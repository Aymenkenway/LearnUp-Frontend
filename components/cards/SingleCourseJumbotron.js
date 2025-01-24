import SingleCourse from '../../pages/course/[slug]'
import { currencyFormatter } from '../../utils/helpers'
import { Badge, Modal, Button } from 'antd'
import ReactPlayer from 'react-player'
import { LoadingOutlined, SafetyOutlined } from '@ant-design/icons'

const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
  loading,
  user,
  handlePaidEnrollment,
  handleFreeEnrollment,
  enrolled,
  setEnrolled,
}) => {
  // destructure
  const {
    name,
    description,
    instructor,
    updatedAt,
    lessons,
    image,
    price,
    paid,
    category,
  } = course

  return (
    <div className='jumbotron bg-primary square'>
      <div className='row'>
        <div className='col-md-8'>
          {/* Title */}
          <h1
            className='text-light font-weight-bold'
            style={{ fontSize: '2.5rem', marginBottom: '1rem' }}
          >
            {name}
          </h1>

          {/* Description */}
          <p
            className='lead text-light'
            style={{
              fontSize: '1.1rem',
              marginBottom: '1.5rem',
              lineHeight: '1.6',
            }}
          >
            {description && description.substring(0, 160)}...
          </p>

          {/* Category Badge */}
          <Badge
            count={category}
            style={{
              backgroundColor: '#03a9f4',

              fontSize: '1rem',
              fontWeight: '500',
              borderRadius: '8px',
            }}
            className='pb-4 mr-3'
          />

          {/* Author */}
          <div
            className='text-light'
            style={{
              fontSize: '1rem',
              marginTop: '1rem',
              marginBottom: '0.5rem',
              fontWeight: '500',
            }}
          >
            Created by{' '}
            <span style={{ fontWeight: '700' }}>{instructor.name}</span>
          </div>

          {/* Updated At */}
          <div
            className='text-light'
            style={{
              fontSize: '0.95rem',
              color: '#d0d0d0',
              marginBottom: '1rem',
            }}
          >
            Last updated: {new Date(updatedAt).toLocaleDateString()}
          </div>

          {/* Price */}
          <h4
            className='text-light'
            style={{
              fontSize: '1.8rem',
              fontWeight: '700',
              marginTop: '1.5rem',
              marginBottom: '0',
            }}
          >
            {paid
              ? currencyFormatter({
                  amount: price,
                  currency: 'usd',
                })
              : 'Free'}
          </h4>
        </div>

        <div className='col-md-4'>
          {/* {JSON.stringify(lessons[0])} */}
          {/* show video preview or course image */}
          {lessons[0].video && lessons[0].video.url ? (
            <div
              onClick={() => {
                setPreview(lessons[0].video.url)
                setShowModal(!showModal)
              }}
            >
              <ReactPlayer
                className='react-player-div'
                url={lessons[0].video.url}
                light={image.url}
                width='100%'
                height='225px'
              />
            </div>
          ) : (
            <>
              <img
                style={{ height: '225px', width: '100%' }}
                src={image.url}
                alt={name}
                className='img img-fluid'
              />
            </>
          )}
          {/* enroll button */}
          {loading ? (
            <div className='d-flex justify-content-center'>
              <LoadingOutlined className='h1 text-danger' />
            </div>
          ) : (
            <Button
              className='mb-3 mt-3'
              type='danger'
              block
              shape='round'
              color='danger'
              variant='solid'
              icon={<SafetyOutlined />}
              size='large'
              disabled={loading}
              onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
            >
              {user
                ? enrolled.status
                  ? 'Go to course'
                  : 'Enroll'
                : 'Login to enroll'}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default SingleCourseJumbotron
