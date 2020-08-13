import React, { useState, useEffect } from "react";
import { Button, Row, Col, Form, Input, Modal } from "antd";

const Setting = () => {
  const [pass, setPass] = useState("")
  const [nama, setNama] = useState(localStorage.getItem("loggedName"))

  const _onSuccess = () => {
    const tempDB = JSON.parse(localStorage.getItem("user"))
    const email = localStorage.getItem("loggedEmail");
    let filtered
    if (tempDB !== null) {
      if (tempDB[0] === undefined)
        filtered = [tempDB].filter(entry =>
          entry.email === email
        );
      else
        filtered = tempDB.filter(entry =>
          entry.email === email
        );
      if (filtered.length === 0) {
        Modal.error({
          content: 'Email tidak ditemukan, ingin mencoba mendaftar?',
        })
      }
      else {
        let tempData = tempDB
        tempData.splice(tempDB.indexOf(filtered[0], 1))
        let newArray = {
          email: localStorage.getItem("loggedEmail"),
          nama: nama,
          password: pass
        }
        localStorage.setItem("loggedName", newArray.nama)
        localStorage.setItem("token", newArray.nama)
        localStorage.setItem("user", JSON.stringify([...tempData, newArray]))
        Modal.success({
          onOk: e => window.location.replace("/"),
          content: 'Perubahan berhasil, anda akan dipindahkan ke home',
        })
      }
    }
  }

  return (
    <Form onFinish={_onSuccess} style={{ marginTop: "10%" }}>
      <Row>
        <Col span={20}>
          <Form.Item>
            <label>Nama</label>
            <Input id="name" onKeyUp={e => setNama(e.target.value)} placeholder={localStorage.getItem("loggedName")} required />
          </Form.Item>
          <Form.Item>
            <label>Email</label>
            <Input type="email" style={{ color: "#bec5d1" }} placeholder="Tulis email kamu disini" value={localStorage.getItem("loggedEmail")} disabled />
          </Form.Item>
          <Form.Item>
            <label>Password</label>
            <Input type="password" onKeyUp={e => setPass(e.target.value)} placeholder="Masukan Password Kamu" required />
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row justify="end">
        <Col span={4}>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="primary-button"> Simpan </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default Setting;