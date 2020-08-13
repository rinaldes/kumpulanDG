import React from "react";
import { Row, Col } from "antd";
import { PhotoGrid } from "components";

const data_dummy = [
  {
    "title": "Admin",
    "anggota": [
      {
        "nama": "Jian Banjar",
        "foto": ""
      }, {
        "nama": "Chloe H",
        "foto": ""
      }, {
        "nama": "Rafazi S",
        "foto": ""
      }
    ]
  },
  {
    "title": "Moderator",
    "anggota": [
      {
        "nama": "Yustin Amanda",
        "foto": ""
      }, {
        "nama": "Regina Athalia",
        "foto": ""
      }, {
        "nama": "Monica Torik",
        "foto": ""
      }, {
        "nama": "Luna Lestari",
        "foto": ""
      }
    ]
  }, {
    "title": "Top Kontributor",
    "anggota": [
      {
        "nama": "Susi Safina",
        "foto": ""
      }, {
        "nama": "Kusnandar A",
        "foto": ""
      }, {
        "nama": "Armanto S",
        "foto": ""
      }, {
        "nama": "Lisa Selly M",
        "foto": ""
      }, {
        "nama": "Budi Setiawan",
        "foto": ""
      }, {
        "nama": "Kiki Panjaitan",
        "foto": ""
      }, {
        "nama": "Doni Parkoso",
        "foto": ""
      }, {
        "nama": "Ridwan Ahmed",
        "foto": ""
      }, {
        "nama": "Edward Manullang",
        "foto": ""
      }, {
        "nama": "Riris Silawasti",
        "foto": ""
      }
    ]
  }
]

const AboutPage = () => {
  return (
    data_dummy.map((kelompok, index) => (
      <div>
        <Row style={{ marginTop: "12%" }}>
          <Col>
            <h2>{kelompok.title}</h2>
          </Col>
        </Row>
        <Row>
          {kelompok.anggota.map((anggota, index2) => (
            <Col span={4} className="kotak-anggota">
              <div>
                <PhotoGrid limit={1} page={((10 * index + 1) + index2)} />
              </div>
              <br />
              <strong>{anggota.nama}</strong>
            </Col>
          ))}
        </Row>
      </div>
    ))
  )
}

export default AboutPage