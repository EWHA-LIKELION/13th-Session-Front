import { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };
  return (
    <div>
      <hr />
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <h2>값:{text}</h2>
    </div>
  );
};
export default Input;
