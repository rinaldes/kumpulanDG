import React, { useState, useEffect } from "react";
import StackGrid from "react-stack-grid";
import PhotoImage from "./image";
import { PhotoGallery } from "utilities";

const PhotoGrid = ({ limit, page = 1 }) => {
  const [photoList, setPhotoList] = useState([])
  const [isDone, setIsDone] = useState(false)
  const grid = React.useRef(null);

  useEffect(() => {
    if (!isDone) {
      setIsDone(true)
      PhotoGallery("portrait", page, limit, "relevant").then(function (result) {
        result.map((i) => (
          setPhotoList(result)
        ))
      })
    }
  }, [isDone]);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (grid.current) {
        grid.current.updateLayout();
      }
    });
  }, [grid]);

  const _daftarGaleri = (
    photoList.map((x, i) => (
      <PhotoImage i={i} prop={x} />
    )))

  return (
    <StackGrid gridRef={r => (grid.current = r)} monitorImagesLoaded={true}>
      {_daftarGaleri}
    </StackGrid >
  );
}

export default PhotoGrid