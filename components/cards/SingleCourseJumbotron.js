import SingleCourse from '../../pages/course/[slug]'
import { currencyFormatter } from '../../utils/helpers'
import { Badge, Modal } from 'antd'
import ReactPlayer from 'react-player'

const SingleCourseJumbotron = ({
  course,
  showModal,
  setShowModal,
  preview,
  setPreview,
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
          {/* title */}
          <h1 className='text-light font-weight-bold'>{name}</h1>
          {/* description */}
          <div className='lead'>
            {description && description.substring(0, 160)}...
          </div>
          {/* category */}
          <Badge
            count={category}
            style={{ backgroundColor: '#03a9f4' }}
            className='pb-4 mr-2'
          />
          {/* author */}
          <div>Created by {instructor.name}</div>
          {/* updated at */}
          <div>Last udpated {new Date(updatedAt).toLocaleDateString()}</div>
          {/* price */}
          <h4 className='text-light'>
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
              <img src={image.url} alt={name} className='img img-fluid' />
            </>
          )}
          {/* enroll button */}
        </div>
      </div>
    </div>
  )
}

export default SingleCourseJumbotron
