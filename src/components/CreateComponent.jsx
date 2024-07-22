import React, { useRef, useState } from "react";
import useDoPost from "../hooks/useDoPost";
import { useNavigate } from "react-router-dom";

function CreateComponent() {
  const inputRef = useRef();
  const [imageSrc, setImageSrc] = useState(null);

  const navigate = useNavigate();
  const [post, setPost] = useState({
    file: {},
    desc: "",
  });

  const { loading, doPost } = useDoPost();
  // Handle file input change event
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setPost({ ...post, file: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doPost(post);
    navigate("/")
  };

  return (
    <form
      className="w-full h-full  p-2 overflow-y-auto  "
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-4xl rounded-md  p-2 text-white font-bold capitalize bg-[#1d1b1f]">
        create a post
      </h1>

      <br />

      <div className="w-full  flex items-center flex-col justify-center gap-2  ">
        <div className="  p-1 shadow flex items-center justify-center  w-full  overflow-hidden ">
          <span className="relative  md:h-[400px] h-[250px]   flex items-center justify-center  min-w-[100px]">
            <img
              src={imageSrc ? imageSrc : "/bgDemo.jpg"}
              className="object h-full object-cover rounded-md  "
            />
            <input
              className="hidden"
              type="file"
              ref={inputRef}
              onChange={handleFileChange}
            />
            <span
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.click();
                }
              }}
              className="  cursor-pointer btn bg-slate-50 rounded-md p-2 text-center absolute bottom-1 right-1 capitalize "
            >
              choose image
            </span>
          </span>
        </div>

        <div className="w-full  h-[200px] flex items-center justify-between md:flex-row border flex-col gap-2 p-2 ">
          <span className="h-full flex flex-col w-full  ">
            <h1 className=" capitalize  text-[16px]  font-semibold ">
              add description
            </h1>
            <textarea
              className=" w-full  flex-1 bg-slate-200 rounded-md px-1 resize-none"
              value={post.desc}
              onChange={(e) => setPost({ ...post, desc: e.target.value })}
            ></textarea>
          </span>

          <span className="flex  w-full md:h-full justify-end items-center md:items-end">
            <button className="btn  bg-black text-[17px] w-[180px] ">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Post"
              )}
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}

export default CreateComponent;
