// import { Menu } from 'antd'
// import Link from 'next/link'
// import { LoginOutlined, HomeOutlined } from '@ant-design/icons'

// const { Item } = Menu
// const TopNav = () => {
//   return (
//     <Menu mode='horizontal'>
//       <Item icon={HomeOutlined}>
//         <Link href='/'>App</Link>
//       </Item>
//       <Item icon={LoginOutlined}>
//         <Link href='/login'>Login</Link>
//       </Item>
//       <Item icon={LoginOutlined}>
//         <Link href='/register'>Register</Link>
//       </Item>
//     </Menu>
//   )
// }

// export default TopNav

import { useState } from 'react'
import { SettingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
const items = [
  {
    key: 'home',
    label: (
      <a href='/home' target='_blank'>
        Home
      </a>
    ),
    icon: <SettingOutlined />,
  },

  {
    key: 'login',
    label: <a href='/login'>Login</a>,
    icon: <SettingOutlined />,
  },
  {
    key: 'register',
    label: (
      <a href='/register' rel='noopener noreferrer'>
        Register
      </a>
    ),
    icon: <SettingOutlined />,
  },
]
const TopNav = () => {
  const [current, setCurrent] = useState('mail')
  const onClick = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  )
}
export default TopNav
