import React, { useState } from "react";
import { ArtworkGrid } from "components";
import { Pagination, Row, Col } from "antd";

const WorkPage = () => {
  const [page, setPage] = useState(1)
  return (
    <div style={{ marginTop: "5%" }}>
      <ArtworkGrid sort={sessionStorage.getItem("url_parameter")} limit={25} page={page} />
      <Row align="bottom" justify="center" style={{ marginTop: "5%" }}>
        <Col span={20} align="center">
          <Pagination defaultCurrent={page} total={50} onChange={e => setPage(e)} />
        </Col>
      </Row>
    </div>
  )
}

export default WorkPage