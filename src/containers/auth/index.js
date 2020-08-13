import React from "react";
import { Row, Col, Modal } from "antd";
import AuthForm from "./form";

const Auth = ({ page }) => {

  const _sendFeedback = (variables) => {
    window.emailjs.send(
      "rinal_id",
      "forgot_password",
      variables,
      "user_050w0ENHLXixShOVGRgid"
    ).then(res => {
      console.log('Email successfully sent!')
      Modal.success({
        onOk: e => window.location.replace("/login"),
        content: 'Kami sudah mengirimkan passwordmu ke email kamu, segeralah cek dan ganti passwordmu ya..',
      })
    })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  const _login = (item) => {
    const tempDB = JSON.parse(localStorage.getItem("user"))
    const email = item.email;
    const password = item.password;
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
      else if (filtered[0].password !== password) {
        Modal.error({
          content: 'Password salah',
        })
      }
      else {
        localStorage.setItem("loggedEmail", email)
        localStorage.setItem("loggedName", filtered[0]?.nama)
        localStorage.setItem("token", filtered[0]?.nama)
        Modal.success({
          onOk: e => window.location.replace("/"),
          content: 'Login berhasil, anda akan dipindahkan ke home',
        })
      }
    }
    else {
      Modal.error({
        content: 'Email tidak ditemukan, ingin mencoba mendaftar?',
      })
    }
  }

  const _register = (item) => {
    const tempDB = JSON.parse(localStorage.getItem("user"))
    const email = item.email;
    const password = item.password;
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
      if (filtered.length !== 0) {
        Modal.error({
          content: 'Email sudah terdaftar, ingin mencoba login?',
        })
      }
      else {
        if (localStorage.getItem("user") !== null) {
          let tempData
          if (JSON.parse(localStorage.getItem("user"))[0] === undefined)
            tempData = [JSON.parse(localStorage.getItem("user"))]
          else
            tempData = JSON.parse(localStorage.getItem("user"))
          localStorage.setItem("user", JSON.stringify([...tempData, item]))
        }
        else
          localStorage.setItem("user", JSON.stringify(item))
        localStorage.setItem("Tutor", "true");
        Modal.success({
          onOk: e => window.location.replace("/login"),
          content: 'Akunmu telah berhasil dibuat, silahkan login..',
        })
      }
    }
    else {
      if (localStorage.getItem("user") !== null) {
        let tempData
        if (JSON.parse(localStorage.getItem("user"))[0] === undefined)
          tempData = [JSON.parse(localStorage.getItem("user"))]
        else
          tempData = JSON.parse(localStorage.getItem("user"))
        localStorage.setItem("user", JSON.stringify([...tempData, item]))
      }
      else
        localStorage.setItem("user", JSON.stringify(item))
    }
  }

  const _forgotPassword = (item) => {
    const tempDB = JSON.parse(localStorage.getItem("user"))
    const email = item.reply_to;
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
        _sendFeedback({ reply_to: email, nama: filtered[0]?.nama, password: filtered[0]?.password })
      }
    }
    else {
      Modal.error({
        content: 'Email tidak ditemukan, ingin mencoba mendaftar?',
      })
    }
  }

  return (
    <div>
      <Row>
        <Col span={11} className="auth-title">
          <h1>
            {(page === "Forgot") ? "Lupa Password" : page}
          </h1>
        </Col >
      </Row >
      <Row justify="center" style={{ marginTop: "10%", marginRight: "25%" }}>
        <Col span={16}>
          <AuthForm page={page} login={_login} register={_register} forgotPassword={_forgotPassword} />
        </Col>
      </Row>
    </div>
  )
}

export default Auth;