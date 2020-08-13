import React from "react";
import { Button, Row, Col, Form, Input } from "antd";

const Profile = ({ success }) => {
  return (
    <Form onFinish={success} style={{ marginTop: "10%" }}>
      <Row>
        <Col span={24}>
          <Form.Item>
            <label>Username</label>
            <Input placeholder="Tulis Username Kamu" required />
          </Form.Item>
          <Form.Item>
            <label>Email</label>
            <Input type="email" placeholder="Tulis email kamu disini" required />
          </Form.Item>
          <Form.Item>
            <label>Password</label>
            <Input type="password" placeholder="Masukan Password Kamu" required />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="primary-button"> Simpan </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Profile;