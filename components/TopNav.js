import { useState, useEffect, useContext } from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import {
  AppstoreOutlined,
  CoffeeOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from '@ant-design/icons'
import { Context } from '../context'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

const { Item, SubMenu, ItemGroup } = Menu

const TopNav = () => {
  const [current, setCurrent] = useState('')

  const { state, dispatch } = useContext(Context)
  const { user } = state

  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrent(window.location.pathname)
    }
  }, [typeof window !== 'undefined' && window.location.pathname])

  const logout = async () => {
    dispatch({ type: 'LOGOUT' })
    window.localStorage.removeItem('user')
    const { data } = await axios.get('/api/logout')
    toast(data.message)
    router.push('/login')
  }

  return (
    <Menu mode='horizontal' selectedKeys={[current]} className='mb-2'>
      <Item
        key='/'
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link legacyBehavior href='/'>
          <a>App</a>
        </Link>
      </Item>

      {user && user.role && user.role.includes('Instructor') ? (
        <Item
          key='/instructor/course/create'
          onClick={(e) => setCurrent(e.key)}
          icon={<CarryOutOutlined />}
        >
          <Link legacyBehavior href='/instructor/course/create'>
            <a>Create Course</a>
          </Link>
        </Item>
      ) : (
        <Item
          key='/user/become-instructor'
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
        >
          <Link legacyBehavior href='/user/become-instructor'>
            <a>Become Instructor</a>
          </Link>
        </Item>
      )}

      {user === null && (
        <>
          <Item
            key='/login'
            onClick={(e) => setCurrent(e.key)}
            icon={<LoginOutlined />}
          >
            <Link legacyBehavior href='/login'>
              <a>Login</a>
            </Link>
          </Item>

          <Item
            key='/register'
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
          >
            <Link legacyBehavior href='/register'>
              <a>Register</a>
            </Link>
          </Item>
        </>
      )}

      {user && user.role && user.role.includes('Instructor') && (
        <Item
          key='/instructor'
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
          style={{ marginLeft: 'auto' }}
        >
          <Link legacyBehavior href='/instructor'>
            <a>Instructor</a>
          </Link>
        </Item>
      )}

      {user !== null && (
        <SubMenu
          key='submenu'
          icon={<CoffeeOutlined />}
          title={user && user.name}
        >
          <ItemGroup key='itemgroup'>
            <Item key='user-dashboard'>
              <Link legacyBehavior href='/user'>
                <a>Dashboard</a>
              </Link>
            </Item>
            <Item key='logout' onClick={logout}>
              Logout
            </Item>
          </ItemGroup>
        </SubMenu>
      )}
    </Menu>
  )
}

export default TopNav
