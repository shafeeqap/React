import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState([]);

  // useEffect(() =>{
  //   axios.get("http://localhost:5000/")
  //   .then((res) =>{
  //     setImageUrl(res.data[0])
  //   }).catch((error) =>{
  //     console.log(error);
  //   })
  // }, [])


  const upload = () => {
    const formData = new FormData();
    formData.append("images", file);
    axios.post("http://localhost:5000/upload", formData)
      .then((response) => {
        if(response.data.message ==="Success"){
          console.log("Succeded");
        }else{
          console.log("Failed");
        }
        setImageUrl(`http://localhost:5000/images/${response.data.user.image}`);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload</button>
      <div>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Uploaded file"
            style={{ width: "150px", height: "150px" }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
