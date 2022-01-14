import { useState, useEffect, useRef } from "react";
import { storage } from "../firebase/firebase";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

export const useStorage = () => {
  
  const [downloadUrl, setDownloadUrl] = useState(null)

  
  useEffect(() => {
    const storage = getStorage();
    const cvRef = ref(storage, 'gs://joakimwahlstrom-a13ce.appspot.com/CV_2022_1.2.pdf');

    getDownloadURL(cvRef)
      .then(url => {
        setDownloadUrl(url)
      })
  },[])


  return {downloadUrl}
}
