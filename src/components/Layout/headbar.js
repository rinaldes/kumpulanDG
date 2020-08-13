import React from "react";
import { Menu, Row, Col, Button, Avatar } from "antd"
import { Logo } from "components";
const { SubMenu } = Menu;

const HeadBar = () => {
  const urlparameter = window.location.search;
  const params = new URLSearchParams(urlparameter);
  (params.get('sort') !== null) ?
    sessionStorage.setItem("url_parameter", params.get('sort')) :
    sessionStorage.setItem("url_parameter", "")

  return (
    <Row style={{ padding: "2%" }}>
      <Col span={19}>
        <Menu mode="horizontal" className="main-menu" defaultSelectedKeys={
          (window.location.pathname === "/works") ?
            ((sessionStorage.getItem("url_parameter") === "terbaru") ? "works:2" : "works:1") :
            ((window.location.pathname === "/") ? "home" : window.location.pathname.substring(1))
        }>
          <Menu.Item disabled><Logo tipe="logoHitam" /></Menu.Item>
          <Menu.Item key="home">
            <a href="/">Home</a>
          </Menu.Item>
          <SubMenu title="Artworks" key="works">
            <Menu.Item key="upload" hidden={!localStorage.getItem("token")}>
              <a href="/upload">Unggah Karya</a>
            </Menu.Item>
            <Menu.Item key="works:1">
              <a href="/works?sort=terpopuler">Karya Terpopuler</a>
            </Menu.Item>
            <Menu.Item key="works:2">
              <a href="/works?sort=terbaru">Karya Terbaru</a>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="about">
            <a href="/about">About Us</a>
          </Menu.Item>
          <Menu.Item key="contact">
            <a href="/contact">Contact</a>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={5}>
        <Menu mode="horizontal" className="secondary-menu" hidden={localStorage.getItem("token")} key="personal">
          <Menu.Item>
            <a href="/login">Login</a>
          </Menu.Item>
          <Menu.Item>
            <a href="/register">
              <Button className="secondary-button">
                Register
              </Button>
            </a>
          </Menu.Item>
        </Menu>
        <Menu mode="horizontal" className="secondary-menu" hidden={!localStorage.getItem("token")}
          defaultSelectedKeys={window.location.pathname.substring(1)}
        >
          <SubMenu title={(
            <div>
              <Avatar /> &nbsp; {localStorage.getItem("token")}
            </div>
          )}>
            <Menu.Item key="profile" hidden>
              <a href="/profile">My Profile</a>
            </Menu.Item>
            <Menu.Item key="setting">
              <a href="/setting">Setting</a>
            </Menu.Item>
            <Menu.Item key="logout">
              <a href="/logout">Logout</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
    </Row >
  )
}

export default HeadBar