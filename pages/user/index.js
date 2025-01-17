import { useContext } from 'react'
import { Context } from '../../context'
import UserRoute from '../../components/routes/UserRoute'

const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context)

  return (
    <UserRoute>
      <h1 className='text-center text-light p-5 mb-4 jumbotrons'>
        User dashboard
      </h1>
    </UserRoute>
  )
}

export default UserIndex
