import React, { useState, useEffect } from "react";
import StackGrid from "react-stack-grid";
import PhotoImage from "./image";
import { PhotoGallery } from "utilities";
import { IconImage } from "assets";

const ArtworkGrid = ({ sort, limit, page = 1 }) => {
  const [judulGaleri, setJudulGaleri] = useState("")
  const [deskripsiGaleri, setDeskripsiGaleri] = useState("")
  const [photoList, setPhotoList] = useState([])
  const [isDone, setIsDone] = useState(false)
  const grid = React.useRef(null);

  useEffect(() => {
    if (!isDone) {
      setIsDone(true)
      PhotoGallery("artwork", page, limit, ((sort === "terbaru") ? "latest" : "relevant")).then(function (result) {
        result.map((i) => (
          setPhotoList(result)
        ))
      })
    }
    if (sort === "terpopuler") {
      setJudulGaleri("Karya Terpopuler")
      setDeskripsiGaleri("Ini loh karya terkece and hits minggu ini...")
    }
    else if (sort === "terbaru") {
      setJudulGaleri("Karya Terbaru")
      setDeskripsiGaleri("Biar tetap update dan produktif yuk cek karya terbaru dari Komunitas")
    }
  }, [isDone]);
  useEffect(() => {
    requestAnimationFrame(() => {
      if (grid.current) {
        grid.current.updateLayout();
      }
    });
  }, [grid]);

  const _judulGaleri = (
    <div className="kotak-judul-galeri">
      <h2>{judulGaleri}</h2>
      <p>{deskripsiGaleri}</p>
      <IconImage params={sort} />
    </div>
  )

  const _daftarGaleri = (
    photoList.map((x, i) => (
      <PhotoImage i={i} prop={x} />
    )))

  return (
    <StackGrid columnWidth={"25%"} gridRef={r => (grid.current = r)} monitorImagesLoaded={true}>
      {(window.location.pathname === "/works") ? null : _judulGaleri}
      {_daftarGaleri}
    </StackGrid >
  );
}

export default ArtworkGrid