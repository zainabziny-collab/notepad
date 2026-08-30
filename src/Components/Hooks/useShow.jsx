import { useState } from "react";

function useShow() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [elementId, setElementId] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  return {
    title,
    text,
    setTitle,
    setText,
    elementId,
    setElementId,
    error,
    setError,
    show, setShow
  };
}

export default useShow;
