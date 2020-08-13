import React from "react";
import { Row, Col } from "antd";
import { TitleImage } from "assets";
import { LeftOutlined } from '@ant-design/icons';

const TitleBox = (props) => {
  let title = {
    "Judul": "",
    "Deskripsi": ""
  }
  switch (props.page) {
    case "home":
      title = {
        "Judul": "Welcome",
        "Deskripsi": "Kumpulan Desain Grafis Indonesia yang merupakan Komunitas wadah publik bagi para desainer untuk terus berkarya dan produktif"
      }
      break;
    case "works":
      if (sessionStorage.getItem("url_parameter") === "terpopuler") {
        title = {
          "Judul": "Karya Terpopuler",
          "Deskripsi": "Ini loh karya terkece and hits minggu ini. Yuk terus berkarya dan ciptakan visual yang kece abis"
        }
      }
      else {
        title = {
          "Judul": "Karya Terbaru",
          "Deskripsi": "Biar tetap update dan produktif yuk cek karya terbaru dari Komunitas."
        }
      }
      break;
    case "about":
      title = {
        "Judul": "Who we are?",
        "Deskripsi": "Jangan sampai gak tau siapa kita. Supaya makin akrab dibaca dulu yuk..."
      }
      break;
    case "contact":
      title = {
        "Judul": "Contact Us",
        "Deskripsi": "Hubungi kami kapanpun juga, Yuk capcus yang pengen kerja sama sampe tanya tanya doang..."
      }
      break;
    case "login":
      title = {
        "Judul": "Login",
        "Deskripsi": "Biar kamu tetap produktif yuk login biar kamu bisa upload karya kamu!"
      }
      break;
    case "register":
      title = {
        "Judul": "Register",
        "Deskripsi": "Join dong gak usah malu malu, kami adalah komunitas publik yang siapa aja bisa gabung, gratis kok tidak berpajak ;)"
      }
      break;
    case "forgot":
      title = {
        "Judul": "Lupa Password",
        "Deskripsi": "Namanya juga manusia kadang suka lupa haha, tapi jangan kuatir sob, pake fitur reset password ini biar kamu bisa buat password baru !"
      }
      break;
    case "setting":
      title = {
        "Judul": "Setting",
        "Deskripsi": "Ingin mengganti informasi akunmu? Yuk ganti sekarang.."
      }
      break;
    case "profile":
      title = {
        "Judul": "Edit Profile",
        "Deskripsi": "Ubah biodata-mu agar selalu terus terupdate!"
      }
      break;
    case "upload":
      title = {
        "Judul": "Unggah Karya",
        "Deskripsi": "Yuk, unggah karyamu, perlihatkan pada dunia :)"
      }
      break;
    default:
      title = {
        "Judul": "",
        "Deskripsi": ""
      }
      break;
  }
  switch (props.page) {
    case ("register"):
    case ("login"):
    case ("forgot"):
      return (
        <Row justify="center">
          <Col span={20} style={{ marginTop: "7%" }}>
            <a href="/">
              <h3><LeftOutlined /> Kembali</h3>
            </a>
            <Row align="top" justify="space-between" style={{ marginTop: "15%", marginBottom: "5%" }}>
              <Col span={24} align="center">
                <TitleImage page={props.page} />
              </Col>
            </Row>
            <Row justify="center">
              <Col span={14}>
                <p style={{ fontSize: 16 }}>{title.Deskripsi}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      );
      break;
    case ("myProfile"):
      return (
        <Row justify="center">
          <Col span={16}>
            <Row align="top" justify="space-between">
              <Col span={14}>
                <h1>{title.Judul}</h1>
                <p>{title.Deskripsi}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      );
      break;
    default:
      return (
        <Row justify="center">
          <Col span={16}>
            <Row align="top" justify="space-between">
              <Col span={14}>
                <h1>{title.Judul}</h1>
                <p style={{ fontSize: 18 }}>{title.Deskripsi}</p>
              </Col>
              <Col span={10} align="center">
                <TitleImage page={props.page} params={sessionStorage.getItem("url_parameter")} />
              </Col>
            </Row>
          </Col>
        </Row>
      );
      break;
  }
}

export default TitleBox