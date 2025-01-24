import { Card, Badge, Typography, Space, Avatar } from 'antd'
import Link from 'next/link'
import { currencyFormatter } from '../../utils/helpers'

const { Title, Paragraph } = Typography

const CourseCard = ({ course }) => {
  const { name, instructor, price, image, slug, paid, category } = course

  return (
    <Link legacyBehavior href={`/course/${slug}`}>
      <a>
        <Card
          hoverable
          style={{
            borderRadius: '10px',
            overflow: 'hidden',
            width: '460px', // Reduced width for a compact look
            height: 'auto',
            margin: '0 auto', // Center the card if space allows
          }}
          cover={
            <img
              src={image.url}
              alt={name}
              style={{
                height: '160px',
                objectFit: 'cover',
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '10px',
              }}
            />
          }
        >
          <Space direction='vertical' size='small' style={{ width: '100%' }}>
            {/* Title */}
            <Title level={5} ellipsis style={{ margin: 0 }}>
              {name}
            </Title>

            {/* Instructor */}
            <Space align='center'>
              <Avatar size='small' style={{ backgroundColor: '#87d068' }}>
                {instructor.name[0].toUpperCase()}
              </Avatar>
              <Paragraph style={{ margin: 0 }} ellipsis>
                {instructor.name}
              </Paragraph>
            </Space>

            {/* Category */}
            <Badge
              count={category}
              style={{
                backgroundColor: '#1890ff',
                color: 'white',
              }}
            />

            {/* Price */}
            <Title level={5} style={{ marginTop: 8, marginBottom: 0 }}>
              {paid
                ? currencyFormatter({
                    amount: price,
                    currency: 'usd',
                  })
                : 'Free'}
            </Title>
          </Space>
        </Card>
      </a>
    </Link>
  )
}

export default CourseCard
