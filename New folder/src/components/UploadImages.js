import React, { useState } from "react";

function UploadImages() {
  const [image, setImage] = useState("");
  const convertToBase64 = (e) => {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); // base64encode string

      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  return (
    <div className="auth-wrapper">
      <div className="auth-inner" style={{ width: "auto" }}>
        Lets Upload UploadImages
        <input accept="images/*" type="file" onChange={convertToBase64} />{" "}
        {image === "" || image === null ? (
          ""
        ) : (
          <img src={image} width={100} height={100} alt =""/>
        )}
      </div>
    </div>
  );
}

export default UploadImages;
