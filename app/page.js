"use client";

import Image from "next/image";
import HeartIcon from  "../public/images/heart.png";

import { useEffect, useState } from "react";

/**
 * ex) `app/entry/page.js` is the UI for the `/entry` URL
 */

export default function Page() {
  const textBoxStyle = "flex basis-1/5 items-center justify-center";
  const imageBoxStyle = "flex items-center justify-center";
  const textInputStyle = "w-full h-[5vh] m-[10px] text-center font-bold";

  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [code3, setCode3] = useState("");
  const [code4, setCode4] = useState("");
  const [hideBtn, setHideBtn] = useState("invisible");

  function handleClick(event) {
    event.preventDefault();

    if (code1.toLowerCase() === 'k' && code2.toLowerCase() === 't' && code3.toLowerCase() === 'g' && code4.toLowerCase() === 'y') {
      window.location.href = "/bride";
    } else {
      //
      alert('다시 입력해주세요');
    }
  }

  useEffect(() => {
    if (code1 && code2 && code3 && code4) {
      setHideBtn("visible opacity-100 transition-opacity duration-300 ease-in-out");

      // transition: opacity .3s ease-in-out
    } else {
      setHideBtn("invisible");
    }
  }, [code1, code2, code3, code4])

  return (
    <main className="container h-screen flex flex-col justify-center items-center bg-black">
      <section className="intro p-2">
        <div>
          <h1 className="text-2xl text-white md:text-xl">코드를 입력해주세요</h1>
        </div>
      </section>

      <section className="code p-2">
        <form className="flex flex-row flex-wrap justify-center" action="" method="get">
          <div className={textBoxStyle}>
            <label htmlFor="H" />
            <input type="text" name="H" id="H" className={textInputStyle} required onChange={(evt) => { setCode1(evt.target.value)}} />
          </div>
          <div className={textBoxStyle}>
            <label htmlFor="I" />
            <input type="text" name="I" id="I" className={textInputStyle} required onChange={(evt) => { setCode2(evt.target.value)}} />
          </div>
          <div className={imageBoxStyle}>
            <Image src={HeartIcon} alt="heart icon" className="h-10 w-10 object-cover sm:h-15 sm:w-15" />
          </div>
          <div className={textBoxStyle}>
            <label htmlFor="N" />
            <input type="text" name="N" id="N" className={textInputStyle} required onChange={(evt) => { setCode3(evt.target.value)}} />
          </div>
          <div className={textBoxStyle}>
            <label htmlFor="T" />
            <input type="text" name="T" id="T" className={textInputStyle} required onChange={(evt) => { setCode4(evt.target.value)}} />
          </div>
        </form>
        <div className={`text-center mt-5 ${hideBtn}`}>
          <button className="w-32 h-[5vh] bg-sky-700 border-box text-white rounded-lg" onClick={handleClick}><a href="/main"/>입장하기</button>
        </div>
      </section>

      <section className="hint p-2">
        <div className="text-white">
          <h1>힌트: 이니셜</h1>
        </div>
      </section>

    </main>
  );
}