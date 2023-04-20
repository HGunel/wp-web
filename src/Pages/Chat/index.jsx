
// import _users_ from '../../@jyson/users.json';

// delete olacag//
import React, { useState, useEffect, useContext } from 'react'
import './style.css'
import { ChatContext } from '../../Context'
import axios from 'axios';
import { UserInfo, Search, Archive, ChatUser, MessageInput, MessageText, ChatListHeader } from '../../Components';
import { Layout, Drawer } from 'antd';
import EmojiPicker from 'emoji-picker-react';
const { Header, Footer, Sider, Content } = Layout;


const Index = () => {

  const [photo, setPhoto] = useState("https://picsum.photos/200")
  const [fullName, setFullName] = useState()
  const [email, setEmail] = useState()

  const [smile, setSmile] = useState(false)
  const [modal, setModal] = useState(false)

  const [id, setId] = useState(null)


  const show = () => setModal(true)
  const hidden = () => setModal(false)

  const smileShowHidden = () => setSmile(!smile)
  useEffect(() => {
    getOwner();
    getUsers();
  }, [])

  const getOwner = () => {
    const user = JSON.parse(atob(localStorage.getItem('user').replace('%salam%', '').replace('%salam%', ''))) || {}
    const { fullName, photo, email } = user;
    setFullName(fullName)
    setEmail(email)
    setPhoto(`https://aticiliqkursu.az/v2.0.0/img/${photo}`)
  }

  const getUsers = (pag = -1) => {
    const url = "https://aticiliqkursu.az/v2.0.0//selectUser.php?pag=1"
    axios.get(url, { params: { pag } }).then(res => {
      const { data } = res.data;
      const [_count, _users] = data;
      setUsers(_users);
      setCount(_count)
    })
  }
  
  

  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);

  const selectUser = (id) => {
   .setId(id);
  }

  return (
    <ChatContext.Provider value={{ chat: {id, setId} }}>

      <Layout style={{ height: "100vh" }}>
        {/* left */}
        <Sider width={350} theme='light'>
          <ChatListHeader
            photo={photo}
            fullname={fullName}
            email={email}
          />

          <Search />


          <Content style={{ height: "calc(100% - 110px)", overflow: "auto", backgroundColor: "white" }} >
            <Archive count={count} />
            {
              users.map((value, index) =>
                <UserInfo key={index}
                  photo={value.photo}
                  name={value.fullName}
                  message={value.email}
                  time={value.id}
                  onClick={() => selectUser(value.id)}
                />
              )


            }

          </Content>

        </Sider>
        {/* right */}
        <Layout >
          <Header style={{ backgroundColor: "#F0F2F5", lineHeight: 0, borderLeft: "1px solid black" }} >
            <ChatUser search={show} photo={"https://picsum.photos/200/300"} name="Gunel" status="online" />
          </Header>
          <Content style={{
            backgroundColor: "#EFEAE2",
            position: 'relative',
            overflow: smile ? 'hidden' : 'auto ',
            textAlign: 'center',

          }} >
            <MessageText message="salam necesen" time="15:00" status={3} user={true} />
            <MessageText message="salam necesen" time="15:00" status={2} user={false} />
            <MessageText message="salam necesen" time="15:00" status={2} user={false} />
            <MessageText message="salam necesen" time="15:00" status={2} user={false} />
            <MessageText message="salam necesen" time="14:00" status={1} user={true} />
            <MessageText message="salam necesen" time="14:00" status={1} user={true} />
            <MessageText message="salam necesen" time="14:00" status={1} user={true} />
            <MessageText message="salam necesen" time="14:00" status={1} user={true} />

            <Drawer
              placement="bottom"
              closable={false}
              mask={false}
              open={smile}
              getContainer={false}
              style={{ backgroundColor: "transparent" }}


            >
              <EmojiPicker height="100%" width="100%" />

            </Drawer>
          </Content>
          <Footer style={{ backgroundColor: "#F0F2F5" }} >
            <MessageInput smile={smileShowHidden} />
          </Footer>
        </Layout>
        <Drawer
          width={500}
          title="Basic Drawer"
          placement="right"
          closable={true}
          onClose={hidden}
          open={modal}
          mask={false}
          style={{ padding: "0px" }}
        >
        </Drawer>


      </Layout>

    </ChatContext.Provider>
  )
}

export default Index
