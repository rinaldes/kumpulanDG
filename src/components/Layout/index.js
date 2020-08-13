import React from "react";
import HeadBar from "./headbar"
import FootBar from "./footbar"
import { Mapper } from "configs"
import { Layout, Row, Col } from "antd"
import { TitleBox } from "components";
const { Header, Content, Footer, Sider } = Layout

const WebContainer = (props) => {
  const appContain = (!props.auth) ?
    <Layout>
      <Header>
        <HeadBar />
        <TitleBox page={props.page} />
      </Header>
      <Content>
        <Row justify="center">
          <Col span={16}><Mapper page={props.page} /></Col>
        </Row>
      </Content>
      <Footer>
        <FootBar />
      </Footer>
    </Layout>
    :
    <Layout>
      <Sider width="30vw">
        <TitleBox page={props.page} />
      </Sider>
      <Content>
        <Row justify="center">
          <Col span={24}><Mapper page={props.page} /></Col>
        </Row>
      </Content>
    </Layout>

  return appContain
}

export default WebContainer