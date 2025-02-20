import React, { useCallback, useState } from "react";
import "./ImageUploader.module.css";

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  }, []);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setError("");
      };
      reader.readAsDataURL(file);
    } else {
      setError("Zəhmət olmasa şəkil faylı seçin.");
    }
  };

  return (
    <div className="upload-container">
      <div
        className="drop-area"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        {image ? (
          <img src={image} alt="Uploaded" className="preview-image" />
        ) : (
          <p>
            Şəkili buraya sürükləyib buraxın və ya{" "}
            <span
              className="browse-link"
              onClick={() => document.getElementById("file-input").click()}
            >
              seçin
            </span>
          </p>
        )}
        <input
          type="file"
          id="file-input"
          accept="image/*"
          onChange={handleFileInput}
          hidden
        />
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default ImageUploader;