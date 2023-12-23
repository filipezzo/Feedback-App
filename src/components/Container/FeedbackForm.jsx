import { useRef, useState } from "react";
import Button from "../Button";

function FeedbackForm({ onAddingToList }) {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const textEl = useRef(null);
  const charCount = 150 - value.length;
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length > 150) {
      return;
    }
    setValid(false);
    setInvalid(false);
    setValue(newValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.includes("#") && value.length >= 5) {
      setValid(true);
      setInvalid(false);
      setTimeout(() => {
        setValid(false);
        textEl.current.focus();
      }, 1000);
    } else {
      setInvalid(true);
      setValid(false);
      return;
    }

    if (!value.length) {
      setInvalid(false);
      setValid(false);
    }
    onAddingToList(value);
    setValue("");
  };

  return (
    <form
      className={`flex flex-col gap-4 max-w-2xl rounded-md mx-auto p-4 bg-slate-800 f h-full 
      ${valid ? "border-green-500 border" : ""}
      ${invalid ? "border-red-500 border" : ""}`}
      onSubmit={handleSubmit}
    >
      <textarea
        placeholder="Provide your feedback with  #company"
        className={`resize-none outline-none bg-transparent  flex-1 `}
        value={value}
        onChange={handleChange}
        ref={textEl}
      />
      <div className="flex justify-between w-full items-center">
        <span>{charCount}</span>
        <Button>Submit</Button>
      </div>
    </form>
  );
}

export default FeedbackForm;
