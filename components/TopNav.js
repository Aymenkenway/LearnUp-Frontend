import { useState, useEffect, useContext } from 'react'
import { Menu, Dropdown } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
  LogoutOutlined,
  DownOutlined,
  CoffeeOutlined,
} from '@ant-design/icons'
const { Item, SubMenu, ItemGroup } = Menu

import { Context } from '../context'
import axios from 'axios'
import { toast } from 'react-toastify'

const TopNav = () => {
  const [current, setCurrent] = useState('')
  const router = useRouter()
  const { state, dispatch } = useContext(Context)
  const { user } = state

  useEffect(() => {
    // Update the current state whenever the route changes
    setCurrent(router.pathname)
  }, [router.pathname])

  const logout = async () => {
    dispatch({ type: 'LOGOUT' })
    window.localStorage.removeItem('user')
    const { data } = await axios.get('/api/logout')
    toast(data.message)
    router.push('/login')
  }
  // const menuItems = [
  //   {
  //     key: '/',
  //     icon: <AppstoreOutlined />,
  //     label: <Link href='/'>App</Link>,
  //   },
  //   {
  //     key: '/login',
  //     icon: <LoginOutlined />,
  //     label: <Link href='/login'>Login</Link>,
  //   },
  //   {
  //     key: '/register',
  //     icon: <UserAddOutlined />,
  //     label: <Link href='/register'>Register</Link>,
  //   },
  //   {
  //     key: '/logout',
  //     icon: <UserAddOutlined />,
  //     label: 'Logout',
  //     onClick: logout,
  //   },
  // ]

  return (
    <Menu mode='horizontal' selectedKeys={[current]}>
      <Item
        key='/'
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link href='/'>LearnUp</Link>
      </Item>

      {user === null && (
        <>
          <Item
            key='/login'
            onClick={(e) => setCurrent(e.key)}
            icon={<LoginOutlined />}
          >
            <Link href='/login'>Login</Link>
          </Item>

          <Item
            key='/register'
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
          >
            <Link href='/register'>Register</Link>
          </Item>
        </>
      )}

      {user !== null && (
        <SubMenu
          icon={<CoffeeOutlined />}
          title={user && user.name}
          className='float-right'
        >
          <ItemGroup>
            <Item key='/user'>
              <Link href='/user'>Dashboard</Link>
            </Item>
            <Item onClick={logout}>Logout</Item>
          </ItemGroup>
        </SubMenu>
      )}
    </Menu>
  )
}

export default TopNav
