
import React, { useContext } from "react";
import { RiImageAiLine, RiImageAddLine } from "react-icons/ri";
import { MdChatBubbleOutline } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaArrowUpLong } from "react-icons/fa6";
import { dataContext, prevUser, user } from "./UserContextChat";
import Chat from "./Chat";
import { generateResponse } from "./gemini";
import { query } from "./huggingFace";

function HomeChat() {
  let {
    startRes,
    setStartRes,
    popUp,
    setPopUP,
    input,
    setInput,
    feature,
    setFeature,
    showResult,
    setShowResult,
    prevFeature,
    setPrevFeature,
    genImgUrl,
    setGenImgUrl,
  } = useContext(dataContext);

  async function handleSubmit(e) {
    setStartRes(true);
    setPrevFeature(feature);

    setShowResult("");
    prevUser.data = user.data;
    prevUser.mime_type = user.mime_type;
    prevUser.imgUrl = user.imgUrl;
    prevUser.prompt = input;
    user.data = null;
    user.mime_type = null;
    user.imgUrl = null;
    setInput("");
    let result = await generateResponse();
    setShowResult(result);
    setFeature("chat");
  }

  function handleImage(e) {
    setFeature("upimg");
    let file = e.target.files[0];

    let reader = new FileReader();
    reader.onload = (event) => {
      let base64 = event.target.result.split(",")[1];
      user.data = base64;
      user.mime_type = file.type;
      user.imgUrl = `data:${user.mime_type};base64,${user.data}`;
    };
    console.log(user.imgUrl);
    reader.readAsDataURL(file);
  }

  async function handleGenerateImg() {
    setStartRes(true);
    setPrevFeature(feature);
    setGenImgUrl("");
    prevUser.prompt = input;
    let result = await query().then((e) => {
      let url = URL.createObjectURL(e);
      setGenImgUrl(url);
    });
    setInput("");
    setFeature("chat");
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-black text-white">
      <nav className="w-full h-20 flex items-center justify-start px-8 text-2xl font-bold cursor-pointer">
        {/* <div
          onClick={() => {
            setStartRes(false);
            setFeature("chat");
            user.data = null;
            user.mime_type = null;
            user.imgUrl = null;
            setPopUP(false);
          }}
        >
          Smart AI Bot
        </div> */}
      </nav>
      <input
        type="file"
        accept="image/*"
        hidden
        id="inputImg"
        onChange={handleImage}
      />
      {!startRes ? (
        <div className="w-full h-[70%] flex flex-col items-center justify-center gap-5 px-5">
          <span id="tag" className="text-4xl">
            What can I help with?
          </span>
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <div
              className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-white rounded-full cursor-pointer hover:bg-white/10"
              onClick={() => {
                document.getElementById("inputImg").click();
              }}
            >
              <RiImageAddLine className="w-6 h-6 text-green-400" />
              <span>Upload Image</span>
            </div>
            <div
              className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-white rounded-full cursor-pointer hover:bg-white/10"
              onClick={() => setFeature("genimg")}
            >
              <RiImageAiLine className="w-6 h-6 text-cyan-400" />
              <span>Generate Image</span>
            </div>
            <div
              className="flex items-center justify-center gap-2 px-5 py-2 border-2 border-white rounded-full cursor-pointer hover:bg-white/10"
              onClick={() => setFeature("chat")}
            >
              <MdChatBubbleOutline className="w-6 h-6 text-orange-400" />
              <span>Let's Chat</span>
            </div>
          </div>
        </div>
      ) : (
        <Chat />
      )}

      <form
        className="w-full  bottom-6 flex items-center justify-center gap-5 px-5"
        onSubmit={(e) => {
          e.preventDefault();
          if (input) {
            if (feature === "genimg") {
              handleGenerateImg();
            } else {
              handleSubmit(e);
            }
          }
        }}
      >
        <img
          src={user.imgUrl}
          alt=""
          id="im"
          className="h-24 rounded-lg shadow-lg absolute left-10 bottom-20 lg:bottom-16 lg:left-48"
        />

        {popUp ? (
          <div className="absolute lg:bottom-16 left-10 bottom-15 lg:left-48 bg-gray-800 border border-white/20 rounded-lg flex flex-col items-start gap-2 p-3">
            <div
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10"
              onClick={() => {
                setPopUP(false);
                setFeature("chat");
                document.getElementById("inputImg").click();
              }}
            >
              <RiImageAddLine className="w-6 h-6 text-green-400" />
              <span>Upload Image</span>
            </div>
            <div
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg cursor-pointer hover:bg-white/10"
              onClick={() => {
                setFeature("genimg");
                setPopUP(false);
              }}
            >
              <RiImageAiLine className="w-6 h-6 text-cyan-400" />
              <span>Generate Image</span>
            </div>
          </div>
        ) : null}

        <div
          id="add"
          className="w-14 h-14 border-2 border-white/30 rounded-full bg-black text-white flex items-center justify-center cursor-pointer"
          onClick={() => {
            setPopUP((prev) => !prev);
          }}
        >
          {feature === "genimg" ? (
            <RiImageAiLine id="genImg" className="w-6 h-6 text-cyan-400" />
          ) : (
            <FiPlus className="w-6 h-6" />
          )}
        </div>
        <input
          type="text"
          placeholder="Ask Something..."
          className="w-[calc(100%-120px)] max-w-[60%] h-14 bg-black border-2 border-white/30 rounded-full px-5 text-lg text-white outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        {input ? (
          <button
            id="submit"
            className="w-14 h-14 border-2 border-white/30 rounded-full bg-black text-white flex items-center justify-center"
          >
            <FaArrowUpLong className="w-6 h-6" />
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default HomeChat;