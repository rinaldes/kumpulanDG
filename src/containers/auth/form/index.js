import React, { useState } from "react";
import { Form, Input, Button, Row, Col, Modal } from "antd";
const { TextArea } = Input;

const AuthForm = ({ page, login, register, forgotPassword }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [nama, setNama] = useState("")

  const _successForgot = (e) => {
    forgotPassword({ reply_to: email })
  }

  const _successLogin = (e) => {
    login({
      "email": email,
      "password": pass
    })
  }
  const _successReg = (e) => {
    register({
      "nama": nama,
      "email": email,
      "password": pass
    })
  }
  switch (page) {
    case "Register":
      return (
        <Form onFinish={e => _successReg(e)}>
          <Row>
            <Col span={24}>
              <Form.Item>
                <label>Nama</label>
                <Input placeholder="Tulis nama asli kamu.." onKeyUp={e => setNama(e.target.value)} required />
              </Form.Item>
              <Form.Item>
                <label>Email</label>
                <Input type="email" placeholder="email@kamu.com" onKeyUp={e => setEmail(e.target.value)} required />
              </Form.Item>
              <Form.Item>
                <label>Password</label>
                <Input pattern=".{8,}" title="Minimal 8 karakter" type="password" placeholder="Masukan kata sandimu" onKeyUp={e => setPass(e.target.value)} required />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" align="top">
            <Col>
              <label className="auth-text">
                Kamu sudah punya akun? <span><a href="/login">Login</a></span>
              </label><br />
              <label className="auth-text">
                Lupa kata sandi? <span><a href="/forgot">Lupa Password</a></span>
              </label>
            </Col>
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="primary-button"> Daftar </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )
      break;
    case "Login":
      return (
        <Form onFinish={e => _successLogin(e)}>
          <Row>
            <Col span={24}>
              <Form.Item>
                <label>Email</label>
                <Input type="email" placeholder="email@kamu.com" onKeyUp={e => setEmail(e.target.value)} required />
              </Form.Item>
              <Form.Item>
                <label>Password</label>
                <Input type="password" pattern=".{8,}" title="Minimal 8 karakter" placeholder="Masukan kata sandimu" onKeyUp={e => setPass(e.target.value)} required />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" align="top">
            <Col>
              <label className="auth-text">
                Kamu belum punya akun? <span><a href="/register">Register</a></span>
              </label><br />
              <label className="auth-text">
                Lupa kata sandi? <span><a href="/forgot">Lupa Password</a></span>
              </label>
            </Col>
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="primary-button"> Masuk </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )
      break;
    case "Forgot":
      return (
        <Form onFinish={e => _successForgot(e)}>
          <Row>
            <Col span={24}>
              <Form.Item>
                <label>Email</label>
                <Input type="email" placeholder="email@kamu.com" onKeyUp={e => setEmail(e.target.value)} required />
              </Form.Item>
            </Col>
          </Row>
          <Row justify="space-between" align="top">
            <Col>
              <label className="auth-text">
                Kamu belum punya akun? <span><a href="/register">Register</a></span>
              </label><br />
              <label className="auth-text">
                Kamu sudah punya akun? <span><a href="/login">Login</a></span>
              </label>
            </Col>
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="primary-button"> Kirim </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )
      break;
    default:
      break;
  }
}

export default AuthForm