import React ,{useState, useRef} from 'react'
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function
const App = () => {
  const [inputVal, setInputVal] = useState("");

  const textareaRef = useRef();

  const handleInputChange = (value) => {
    setInputVal(value);
  };

  const handleClick = () => {
    console.log("textareaRef", textareaRef);

    textareaRef.current.value = inputVal;

    setInputVal("");
  };

  return (
    <div id="main">
      <input
        id="input"
        value={inputVal}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      ></input>
      <br />
      <PortalButton buttonclick={handleClick} />
      <br />
      <PortalTextArea textareaRef={textareaRef} value={""} />
    </div>
  );
};

export default App;