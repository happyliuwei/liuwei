import React, { useState } from 'react';
import { Input, Button, Layout, Menu } from 'antd';



const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));


const App = () => {

  const init = [
    {
      key: '1',
      label: '菜单一',
      children: [
        {
          key: '1-1',
          label: '菜单1-1'
        },
        {
          key: '1-2',
          label: '菜单1-2'
        }
      ]
    },
    {
      key: '2',
      label: '菜单二',
      children: [
        {
          key: '2-1',
          label: '菜单2-1'
        },
        {
          key: '2-2',
          label: '菜单2-2'
        }
      ]
    }
  ]

  const [items, setItems] = useState(init)
  const [text, setText] = useState('菜单1-1')
  const [key, setKey] = useState('1-1')

   const handleMenu = ({item, key}: any) => {
    items.map(it => {
      it.children.map(i => {
        if (i.key == key) {
          setText(i.label)
          setKey(i.key)
        }
      })
    })
   }

   const handleSave = () => {
    items.map(it => {
      it.children.map(i => {
        if (i.key == key) {
          i.label = text
        }
      })
    })
    setItems([...items])
   }

  return(
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1-1']}
            defaultOpenKeys={['1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items}
            onClick={handleMenu}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Input value={text} style={{ width: 200, marginRight: 10 }} onChange={e => setText(e.target.value)} />
            <Button type='primary' onClick={handleSave}>保存</Button>
          </Content>
        </Layout>
      </Layout>
    </Layout>
)}

export default App;