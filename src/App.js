import React from 'react';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Album from './pages/Album';
import './App.css';
import { Link } from "react-router-dom";
import Player from "./components/AudioPlayer";
import { Layout } from "antd";
import YourLogo from "./images/logo-main.png";
import { SearchOutlined, DownCircleOutlined } from "@ant-design/icons";
import { Header } from 'antd/lib/layout/layout';
import { Input, Space } from 'antd';
import { Button, Radio } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FaDiscord,FaHome,FaTwitter} from "react-icons/fa";
/* import {
  HomeOutlined,
  TwitterOutlined,
  MailOutlined,
} from '@ant-design/icons'; */


const { Content, Sider, Footer } = Layout;
const { Search } = Input;
const onSearch = value => console.log(value);

const App = () => {
  const [size, setSize] = useState('medium');
  const [nftAlbum, setNftAlbum] = useState();
  return (
    <>
      <Layout>
        <Header className="header">
            <img src={YourLogo} alt="Logo" className="logo"></img>
            <div className="searchBar">
              {/* <SearchOutlined /> */}
              <Search placeholder="Explore" onSearch={onSearch} style={{ width: 600 }} />
            </div>
            <Link to="/">
            <Space>
              <div style={{ fontSize: 25 }}><FaHome/></div>
            </Space>
            </Link>
            <Link to="/">
            <Space>
              <div style={{ fontSize: 25 }}><FaDiscord /></div>
            </Space>
            </Link>
            <Link to="/">
            <Space>
              <div style={{ fontSize: 25 }}><FaTwitter/></div>
            </Space>
            </Link>
            
            {/*<p> Your Music </p>
             <div className="recentPlayed">
              <p className="recentTitle">RECENTLY PLAYED</p>
            </div> */}

            <div className="wallet">
              <Button type="primary"  size={size} style={{ width: 200 }}>Connect Wallet</Button>
            </div>
        </Header>
        <Layout>
          {/*<Sider width={0} className="sideBar"></Sider> */}
          <Content className="contentWindow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/album" element={<Album setNftAlbum={setNftAlbum}/>} />
          </Routes>
          </Content>
        </Layout>
        <Footer className="footer">
          {nftAlbum &&
          <Player 
          nftAlbum={nftAlbum}
          />
          }
        </Footer>
      </Layout>
    </>
  );
}


export default App;
