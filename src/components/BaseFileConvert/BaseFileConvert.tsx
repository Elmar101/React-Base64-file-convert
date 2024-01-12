import React from "react";
export const BaseFileConvert = () => {
  const [imgPath, setImgPath] = React.useState("");
  const uploadFile: React.ChangeEventHandler<HTMLInputElement> = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target?.files?.[0];
    const base64 = (await base64FileConvert(file)) as string;
    setImgPath(base64);
  };
  const base64FileConvert = (file?: File) => {
    if (file) {
      return new Promise((resolve, reject) => {
        const fileReder = new FileReader();
        fileReder.readAsDataURL(file);
        fileReder.onload = () => {
          resolve(fileReder.result);
        };
        fileReder.onerror = (error) => {
          reject(error);
        };
      });
    } else {
      console.log("IT IS NOT FILE");
    }
  };
  return (
    <>
      <input type="file" onChange={uploadFile} />
      <br />
      <img src={imgPath} style={{ width: "200px", height: "200px" }} />
    </>
  );
};
