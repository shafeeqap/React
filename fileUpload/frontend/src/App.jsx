import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:8080/getImage")
    .then((res) =>{
      console.log(res);
      setImageUrl(res.data[0].imageUrl)
    }).catch((error) =>{
      console.log(error);
    })
  }, [])


  const upload = () => {
    const formData = new FormData();
    formData.append("images", file);
    axios.post("http://localhost:8080/upload", formData)
      .then((response) => {
        if(response.data.message ==="Success"){
          console.log("Succeded");
          setImageUrl(response.data.user.image);
          localStorage.setItem('userInfo', response.data.user.image)
        }else{
          console.log("Failed");
        }
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
      <div>
          <img
            src={`http://localhost:8080/images/`+ imageUrl}
            alt="Uploaded file"
            style={{ width: "500px", height: "500px" }}
          />
      </div>
    </div>
  );
};

export default App;
