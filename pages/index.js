import React from 'react'
import axios from 'axios'
import { Row, Col, Button, Typography, Layout, Carousel } from 'antd'
import CourseCard from '@/components/cards/CourseCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const { Title, Paragraph } = Typography
const { Footer } = Layout

const Index = ({ courses }) => {
  return (
    <>
      {/* Hero Section */}
      <div
        style={{
          background: '#f0f2f5',
          padding: '40px 20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Row gutter={32} align='middle' style={{ width: '100%' }}>
          <Col
            xs={24}
            md={12}
            style={{ textAlign: 'left', paddingLeft: '30px' }}
          >
            <Title level={1} style={{ marginBottom: '20px' }}>
              Welcome to LearnUp
            </Title>
            <Paragraph
              style={{
                fontSize: '20px',
                marginBottom: '20px',
                maxWidth: '50%',
              }}
            >
              Your one-stop platform for enriching online courses tailored to
              your learning needs. Start your journey with us today!
            </Paragraph>
            <Button type='primary' size='large'>
              Explore More
            </Button>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: 'center' }}>
            <img
              src='/hero.png' // Replace with the actual illustration URL
              alt='Hero Illustration'
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '500px', // Restrict max height to make it proportional
                objectFit: 'contain',
              }}
            />
          </Col>
        </Row>
      </div>
      \{/* CSS for Animation */}
      <style jsx>{`
        @keyframes scrollCategories {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
      {/* Courses Section */}
      <div style={{ padding: '50px 20px' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
          Our Courses
        </Title>
        <Row gutter={[16, 16]}>
          {courses.map((course) => (
            <Col key={course._id} xs={24} sm={12} lg={8}>
              <CourseCard course={course} />
            </Col>
          ))}
        </Row>
      </div>
      {/* Testimonials Section */}
      <div
        style={{
          background: '#f9fafc',
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <Title level={2}>What Our Students Say</Title>
        <Carousel autoplay style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div>
            <Paragraph style={{ fontSize: '20px' }}>
              "LearnUp has been a game-changer for me. The courses are
              well-structured and the instructors are amazing!"
            </Paragraph>
            <p>- Sarah M.</p>
          </div>
          <div>
            <Paragraph style={{ fontSize: '20px' }}>
              "I love the flexibility of learning at my own pace. The platform
              is super easy to use!"
            </Paragraph>
            <p>- John D.</p>
          </div>
        </Carousel>
      </div>
      {/* Swiper Courses Section */}
      <div
        style={{
          padding: '50px 20px',
          marginBottom: '30px',
        }}
      >
        <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
          Featured Courses
        </Title>
        <Swiper
          style={{
            paddingBottom: '10px',
          }}
          spaceBetween={16}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {courses.map((course) => (
            <SwiperSlide key={course._id}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Instructors Section */}
      <div
        style={{
          background: '#f9fafc',
          padding: '50px 20px',
          textAlign: 'center',
        }}
      >
        <Title level={2}>What Our Instructors say</Title>
        <Carousel autoplay style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div>
            <Paragraph style={{ fontSize: '20px' }}>
              "As an instructor on LearnUp, I’ve seen firsthand the amazing
              impact of this platform on students' learning journeys. The tools
              provided make it easy to connect and engage with students."
            </Paragraph>
            <p>- Amir Kahtani</p>
          </div>
          <div>
            <Paragraph style={{ fontSize: '20px' }}>
              "I love the flexibility to teach on my terms. LearnUp allows me to
              personalize the learning experience, helping students achieve
              their goals."
            </Paragraph>
            <p>- Robert Dowrer</p>
          </div>
        </Carousel>
      </div>
      {/* Footer */}
      <Footer style={{ textAlign: 'center' }}>
        <Row>
          <Col xs={24} sm={12}>
            <Paragraph>&copy; 2025 LearnUp. All rights reserved.</Paragraph>
          </Col>
          <Col xs={24} sm={12}>
            <a href='/about'>About Us</a> | <a href='/contact'>Contact</a> |{' '}
            <a href='/privacy'>Privacy Policy</a>
          </Col>
        </Row>
      </Footer>
    </>
  )
}

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`)
  return {
    props: {
      courses: data,
    },
  }
}

export default Index
