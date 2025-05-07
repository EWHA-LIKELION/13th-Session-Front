import { useState } from "react";
import Name from "./component/Name";
import Input from "./component/Input";
import Modal from "./component/Modal";

function App() {
  const lionList = [
    { name: "아기사자", nth: "11", isFE: true },
    { name: "아기사자", nth: "12", isFE: false },
    { name: "아기사자", nth: "13", isFE: true },
  ];
  //데이터셋은 자유롭게 추가 및 변경이 가능합니다! 다양한 데이터를 만들어 띄워보세요 :)
  return (
    <>
      <Name name="아기사자" nth="13" isFE="true" />
      <Input />
    </>
  );
}

export default App;
