import { useState } from "react";

const watchObj = {
    title: "",
    brand: "",
    model: "",
    caliber: "",
    origin: "",
    notes: "",
  };

const useInputHandler = () => {
    const [watch, setWatch] = useState(watchObj);
    const [watchPic, setWatchPic] = useState();
  
    const handleInputs = (e) => {
      const obj = watch;
      if (e.target.id === "image") {
        const image = new FormData()
        image.append('image', e.target.files[0])
        setWatchPic(image);
      } else {
        obj[e.target.id] = e.target.value;
        setWatch(obj);
      }
    };
    return { handleInputs, setWatch, watch, watchPic } 
}

export default useInputHandler
