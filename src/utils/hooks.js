import { useRef, useEffect } from "react";

export const useFormatTextHook = (elemText) => {
  const textRef = useRef();
  useEffect(() => {
    textRef.current.innerHTML = elemText;
  }, [elemText]);
  return textRef;
};
