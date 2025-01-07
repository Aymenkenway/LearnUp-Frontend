import { useState, useEffect } from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  AppstoreOutlined,
  LoginOutlined,
  UserAddOutlined,
} from '@ant-design/icons'

const TopNav = () => {
  const [current, setCurrent] = useState('')
  const router = useRouter()

  useEffect(() => {
    // Update the current state whenever the route changes
    setCurrent(router.pathname)
  }, [router.pathname])

  const menuItems = [
    {
      key: '/',
      icon: <AppstoreOutlined />,
      label: <Link href='/'>App</Link>,
    },
    {
      key: '/login',
      icon: <LoginOutlined />,
      label: <Link href='/login'>Login</Link>,
    },
    {
      key: '/register',
      icon: <UserAddOutlined />,
      label: <Link href='/register'>Register</Link>,
    },
  ]

  return <Menu mode='horizontal' selectedKeys={[current]} items={menuItems} />
}

export default TopNav
