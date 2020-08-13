import React from "react";
import { Row, Col } from "antd";
import AboutPage from "./aboutUs";
import ContactPage from "./contact";

const InformationPage = (props) => {
  const pesanParagraf1 = (props.page === "about") ?
    (
      <p>
        Di bentuk Pada tanggal 4 September 2013 dan terus berkembang tumbuh untuk mewadah,
        kini total komunitas KDGI sekitar 13 ribu orang terhitung dengan anggota aktif maupun pasif.
        <br /><br />
          KumpulanDG kini mewadahi karya dengan lebih maksimal di website ini. Website ini memungkinkan
          kamu mengupload karya terbaik untuk dijadikan portofolio dan wadah apresiasi karya desain sesama desainer.
      </p>
    ) :
    (
      <p>
        Get a response today ! Tak perlu segan apalagi malu, mari bicarakan bersama melalui pesan.  Siapa tau
        berkelanjutan.  Kamu bisa bicarakan unek- unek, saran, tanggapan,  masalah akunmu, curhat, tanya tanya doang,
        pengen kerja sama pun, yuk  atau tentang kami.  Apapun itu kirimkan saja gratis kok ! tidak berpajak.
        Gapake lama lagi yuk langsung  tulis pesanmu di bawah ini. Lalu capcuss  klik kirim !
      </p>
    )

  const pesanParagraf2 = (props.page === "about") ?
    (
      <p>
        KumpulanDG adalah tempat sharing karya desain baik berupa visual statis maupun bergerak dan juga Tempat
        diskusi dan berbagi ilmu pengetahuan desain. Kumpulan Desain Grafis Indonesia merupakan ruang atau
        komunitas para desainer Indonesia untuk bisa berbagai kreatifitas, masukan saran dan menjalin komunikasi
        dalam ruang lingkup desain grafis . Kumpulan desain grafis ini berisi berbagai ilmu pengetahuan dan
        imajinasi, seperti Vector, Digital Imaging, Digital Sketch, Painting, Typography, dan lainnya.
      </p>
    ) :
    (
      <p>
        Kami Senang mengeluarkan ide-ide baru yang menarik. Pesan yang kamu berikan di kirim secara rahasia loh.
        Gaperlu khawatir pesanmu terbongkar apalagi di umbar-umbar 100% amaan...
      </p>
    )

  return (
    <div>
      <Row style={{ marginTop: "10%" }}>
        <Col span={11}>
          {pesanParagraf1}
        </Col>
        <Col span={1}></Col>
        <Col span={11}>
          {pesanParagraf2}
        </Col>
      </Row>
      {(props.page === "about") ? <AboutPage /> : <ContactPage />}
    </div>
  )
}

export default InformationPage