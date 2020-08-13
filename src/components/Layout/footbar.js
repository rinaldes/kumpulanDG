import React from "react";
import { Row, Col } from "antd";
import { Logo } from "components";
import { RightCircleFilled } from '@ant-design/icons';
import { IconImage } from "assets";

const FootBar = () => {
  return (
    <div className="footbox">
      <Row justify="space-between" className="bottom-container">
        <Col span={7}>
          <Logo tipe="logoHitam" />
          <p>
            Kumpulan Desain Grafis Indonesia adalah Komunitas publik untuk terus berkarya desain secara produktif
        </p>
        </Col>
        <Col span={1} />
        <Col span={7}>
          <h4>Link</h4>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li><a href="/about"><RightCircleFilled /> About Us</a></li>
            <li><a href="/contact"><RightCircleFilled /> Contact Us</a></li>
          </ul>
        </Col>
        <Col span={5}>
          <h4>Get in Touch</h4>
          <Row justify="space-between" center>
            <Col span={5}><IconImage params={"fb"} /></Col>
            <Col span={5}><IconImage params={"ig"} /></Col>
            <Col span={5}><IconImage params={"tw"} /></Col>
            <Col span={5}><IconImage params={"yt"} /></Col>
          </Row>
        </Col>
      </Row>
      <div className="bottom-sea"></div>
    </div>
  )
}

export default FootBar