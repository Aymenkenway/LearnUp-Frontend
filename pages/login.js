import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons'
import Link from 'next/link'
import { Context } from '../context'
import { useRouter } from 'next/router'

const Login = () => {
  const [email, setEmail] = useState('aymen@gmail.com')
  const [password, setPassword] = useState('rrrrrr')
  const [loading, setLoading] = useState(false)

  const router = useRouter()

  // state
  const {
    state: { user },
    dispatch,
  } = useContext(Context)

  useEffect(() => {
    if (user !== null) router.push('/user')
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.table({ name, email, password });
    try {
      setLoading(true)
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      })
      // console.log('LOGIN RESPONSE', data)
      dispatch({
        type: 'LOGIN',
        payload: data,
      })
      // save in local storage
      window.localStorage.setItem('user', JSON.stringify(data))
      //redirect after login

      router.push('/user')
      // setLoading(false);
    } catch (err) {
      toast(err.response.data)
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>Login</h1>

      <div className='container col-md-4 offset-md-4 pb-5'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            className='form-control mb-4 p-4'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            required
          />

          <input
            type='password'
            className='form-control mb-4 p-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            required
          />

          <button
            type='submit'
            className='btn btn-block btn-primary'
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : 'Submit'}
          </button>
        </form>

        <p className='text-center p-3'>
          Not yet registered? <Link href='/register'>Register</Link>
        </p>
        <p className='text-center'>
          Forget password?{' '}
          <Link href='/forgot-password' className='text-danger'>
            Reset password
          </Link>
        </p>
      </div>
    </>
  )
}

export default Login
