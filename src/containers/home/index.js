import React from "react";
import { ArtworkGrid } from "components";
import { Button, Modal } from "antd";
import Tutorial from 'assets/image/up.jpg';

const HomePage = (props) => {
  return (
    <div>
      {["terpopuler", "terbaru"].map((item) => (
        <div style={{ marginTop: "5%" }}>
          <ArtworkGrid sort={item} limit={10} />
          <div style={{ marginTop: "2%", display: "flex", justifyContent: "flex-end" }}>
            <Button
              className="primary-button"
              onClick={e => (window.location.replace("/works?sort=" + item))}
            >
              Selengkapnya
            </Button>
          </div>
        </div>
      ))}
      <Modal
        visible={localStorage.getItem("Tutor") === "true"}
        onOk={e => (localStorage.setItem("Tutor", false), window.location.reload())}
        cancelButtonProps={{ hidden: true }}
      >
        <img src={Tutorial} style={{ width: "100%" }} />
        <h3 style={{ color: "#FF3185" }}>Terimakasih telah mendaftar, Yuk Upload Karyamu sekarang!</h3>
        <p><i>Pop-up ini hanya muncul 1x</i></p>
      </Modal>
    </div>
  )
}

export default HomePage