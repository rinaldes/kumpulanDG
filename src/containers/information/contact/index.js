import React from "react";
import { Form, Input, Button, Row, Col, Modal } from "antd";
const { TextArea } = Input;

const ContactPage = () => {
  const _success = (e) => {
    Modal.success({
      content: 'Pesanmu telah kami terima, tunggu balasan dari kami, ya..',
    })
  }
  return (
    <Form onFinish={_success} style={{ marginTop: "10%" }}>
      <Row>
        <Col span={15}>
          <Form.Item>
            <label>Nama</label>
            <Input placeholder="Tulis nama asli kamu" required />
          </Form.Item>
          <Form.Item>
            <label>Email</label>
            <Input type="email" placeholder="Tulis email kamu disini" required />
          </Form.Item>
          <Form.Item>
            <label>Judul</label>
            <Input placeholder="Masukan judul pesan, minsalnya pertanyaan, kerjasama dll" required />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item>
            <label>Isi Pesan</label>
            <TextArea rows={6} placeholder="Pesan Apa yang ingin kamu sampaikan ? Tulis aja disini...." required />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="primary-button"> Kirim </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default ContactPage