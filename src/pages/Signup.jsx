import React, { useRef, useState } from "react";

import Header from "../common/Header";

import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

function Signup() {
  const { loading, signup } = useSignup();

  const inputRef = useRef();
  const [imageSrc, setImageSrc] = useState(null);

  // Handle file input change event
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
        setUserInfo({ ...userInfo, imgfile: inputRef.current.files[0] });
      };
      reader.readAsDataURL(file);
    }
  };

  const [userInfo, setUserInfo] = useState({
    imgfile: {},
    userName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [isPass, setPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(userInfo);
  };
  return (
    <div className="w-full  h-full   bg-[#d6d9f1]   p-2">
      <div className="flex justify-center items-center p-1 h-[full] ">
        <form
          onSubmit={handleSubmit}
          className=" w-full  h-full  md:w-[700px] md:h-[100%] border bg-slate-50 shadow-md rounded-xl p-3"
        >
          <h1 className="text-center text-5xl font-semibold capitalize">
            Signup Here
          </h1>
          <div className="divider"></div>

          <div className=" mb-1  flex items-center md:justify-evenly  justify-center flex-col sm:flex-row ">
            <h1 className=" sm:text-5xl  text-xl capitalize font-bold">
              add your profile picture
            </h1>
            <span
              className="flex    p-1 flex-col gap-1 border rounded-md  
             "
            >
              <input
                className="hidden"
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
              />
              <img
                src={imageSrc ? imageSrc : "/default.png"}
                className="  min-w-[200px] h-[200px] object object-cover rounded-md   "
              />

              <span
                onClick={() => {
                  if (inputRef.current) {
                    inputRef.current.click();
                  }
                }}
                className=" cursor-pointer  bg-slate-700 rounded-md flex-1 border border-black py-2 text-center   bottom-0 right-0"
              >
                choose image
              </span>
            </span>
          </div>

          <input
            className="input    w-full mb-3 bg-[#eee]  text-[18px] text-[#383838]  "
            placeholder="Enter fullName"
            type="text"
            value={userInfo.fullName}
            onChange={(e) => {
              setUserInfo({ ...userInfo, fullName: e.target.value });
            }}
            required
          />

          <input
            className="input    w-full mb-3 bg-[#eee]  text-[18px] text-[#383838]  "
            placeholder="Enter userName"
            type="text"
            value={userInfo.userName}
            onChange={(e) => {
              setUserInfo({ ...userInfo, userName: e.target.value });
            }}
            required
          />
          <input
            className="input   w-full mb-3 bg-[#eee]  text-[18px] text-[#383838]  "
            placeholder="Enter email"
            type="text"
            value={userInfo.email}
            onChange={(e) => {
              setUserInfo({ ...userInfo, email: e.target.value });
            }}
            required
          />

          <span className="relative">
            <input
              className="input  bg-[#eee] w-full mb-3  text-[18px] text-[#383838] "
              placeholder="Enter password"
              type={isPass ? "password" : "text"}
              value={userInfo.password}
              onChange={(e) => {
                setUserInfo({ ...userInfo, password: e.target.value });
              }}
              required
            />
            <span
              onClick={() => {
                setPass(!isPass);
              }}
              className="absolute top-[-8px] cursor-pointer right-2 border text-[#353535] text-[30px] bg-[#f5f4f4] p-1 rounded-full "
            >
              {isPass ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
            </span>
          </span>

          <input
            className="input   bg-[#eee] w-full mb-2 text-[18px] text-[#383838] "
            placeholder="confirm  password"
            type="password"
            value={userInfo.confirmPassword}
            onChange={(e) => {
              setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            }}
            required
          />

          <Gender userInfo={userInfo} setUserInfo={setUserInfo} />
          <div className="w-full flex items-center justify-center">
            <button type="submit" className="btn   capitalize  w-1/2">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "signup"
              )}
            </button>
          </div>

          <Link
            to="/login"
            className="  text-sm  hover:underline hover:text-blue-600"
          >
            Already have an account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;

const Gender = ({ setUserInfo, userInfo }) => {
  return (
    <div className=" flex justify-start items-center sm:text-[18px] text-[13px] ">
      <label className=" text-black mb-2">Gender :</label>

      <div className="flex justify-center items-center mb-2 p-2">
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          onChange={(e) => {
            setUserInfo({ ...userInfo, gender: e.target.value });
          }}
          className="radio radio-primary  mr-2"
        />
        <label htmlFor="male" className="text-gray-600">
          Male
        </label>
      </div>
      <div className="flex justify-center items-center mb-2 p-2">
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          onChange={(e) => {
            setUserInfo({ ...userInfo, gender: e.target.value });
          }}
          className="radio radio-primary  mr-2"
        />
        <label htmlFor="female" className="text-gray-600">
          Female
        </label>
      </div>
      <div className="flex p-2 items-center  justify-center mb-2">
        <input
          type="radio"
          id="other"
          name="gender"
          value="other"
          onChange={(e) => {
            setUserInfo({ ...userInfo, gender: e.target.value });
          }}
          className="radio radio-primary  mr-2"
        />
        <label htmlFor="other" className="text-gray-600">
          Other
        </label>
      </div>
    </div>
  );
};
