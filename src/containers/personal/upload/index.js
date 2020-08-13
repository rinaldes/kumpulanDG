import React, { useState } from "react";
import { Button, Row, Col, Form, Input, Upload, message, Modal } from "antd";
import { InboxOutlined } from '@ant-design/icons';
const { Dragger } = Upload;

const { TextArea } = Input;

const WorkUpload = () => {
  const [imageUrl, setImageUrl] = useState()

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('Maaf, hanya file JPG/PNG.');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Maaf, ukuran maksimal 2MB.');
    }
    return isJpgOrPng && isLt2M;
  }

  const _onSuccess = () => {
    if (!imageUrl) {
      message.error("Silahkan unggah karyamu terlebih dahulu.");
    } else {
      Modal.success({
        onOk: e => (window.location.replace("/")),
        content: 'Karyamu sudah terunggah, namun butuh waktu untuk tayang karena sedang dalam verifikasi oleh tim kami :)',
      })
    }
  }

  const props = {
    name: 'avatar',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    showUploadList: false,
    listType: "picture-card",
    className: "avatar-uploader",
    beforeUpload: beforeUpload,
    onChange(info) {
      if (info.file.status === 'uploading') {
        return;
      }
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, imageUrls => {
          setImageUrl(imageUrls)
        }
        );
        message.success(`${info.file.name} telah terunggah dengan sempurna.`);
      }
      else {
        message.error(`${info.file.name} telah gagal terunggah. Coba gunakan file lain.`);
      }
    }
  }

  return (
    <Form onFinish={_onSuccess} style={{ marginTop: "10%" }} >
      <Row>
        <Col span={24}>
          <Form.Item>
            <div className="border-gray">
              <div className="bordered-box">
                <Dragger {...props} style={{ minHeight: "50vh" }}>
                  {
                    imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> :
                      <div>
                        <p className="ant-upload-drag-icon" style={{ marginTop: "15vh" }}>
                          <InboxOutlined />
                        </p>
                        <h3 className="ant-upload-text">Seret file atau klik <br /> untuk upload</h3>
                      </div>
                  }
                </Dragger>
              </div>
            </div>
          </Form.Item>
        </Col>
      </Row>
      <br />
      <Row>
        <Col span={15}>
          <Form.Item>
            <label>Judul *</label>
            <Input placeholder="Tulis judul karyamu" required />
          </Form.Item>
          <Form.Item>
            <label>Kategori</label>
            <Input placeholder="Masukan Kategori Karyamu" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item>
            <label>Deskripsi</label>
            <TextArea rows={5} placeholder="Ceritakan apa yang ingin kamu sampaikan" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="end">
        <Col>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="primary-button" > Kirim </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form >
  )
}

export default WorkUpload;