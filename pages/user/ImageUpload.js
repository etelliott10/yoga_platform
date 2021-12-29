import React, {useState, useEffect, useRef} from 'react'
import styles from "../../styles/Upload.module.css"
function ImageUpload(props) {
    

    const fileInputRef = useRef();
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (image) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreview(reader.result);
          };
          reader.readAsDataURL(image);
        } else {
          setPreview(null)
        }
      }, [image]);

    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const filePickerRef = useRef();

    // useEffect(() => {
    //     if (!file){
    //         return;
    //     }
    //     const fileReader = new FileReader();
    //     fileReader.onload=() => {
    //         setPreviewUrl(fileReader.result)
    //     }
    //     fileReader.readAsDataURL(file);
    // },[file]) 

    

    function pickedHandler(event) {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1){
            pickedFile = event.target.files[0];
            setFile(pickedFile)
        }
    }

    function pickedImageHandler() {
        filePickerRef.current.click();
    }

    return (
        <>
        <div className={styles.container}>
            <form accept="image/*"
                onChange={(event) => {
                const file = event.target.files[0];
                if (file && file.type.substr(0, 5) === "image") {
                    setImage(file);
                } else {
                    setImage(null);
                }
            }}>
            {preview ? (
                <img src={preview} alt={"preview"} style={{ objectFit: "cover" }} />
            ) : (
                <>
                <button className={styles.button} onClick={(event) => {
                    event.preventDefault();
                    fileInputRef.current.click();
                }}> Add Image</button>
                <input type="file" style={{ display: "none" }} ref={fileInputRef}/>
                </>
            )}
      </form>
      <p> {preview}</p>
    </div>

        {/* <div className="">
            <input id={props.id} 
                ref={filePickerRef} 
                
                type="file" 
                accept=".jpeg, .jpg, .png" 
                onChange={pickedHandler}/>
                <div className="">
                    <div className="">
                        {previewUrl &&  <Image 
                                            priority 
                                            src=""
                                            width="40%" 
                                            height="40%" 
                                            layout="intrinsic" 
                                            alt=""/>
                        }
                        {!previewUrl && (
                            <div className="">
                                <button className="" type="button" onClick={pickedImageHandler}>+</button>
                            </div>
                        )}
                    </div>
                    <div className="">
                        {previewUrl && (
                            <div className="">
                            <button className="" type="button" onClick={pickedImageHandler}>Edit</button>
                        </div>
                        )}
                    </div>
                </div>
        </div> */}
        </>
    )
}

export default ImageUpload
