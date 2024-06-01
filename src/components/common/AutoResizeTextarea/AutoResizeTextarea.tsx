import React, { useRef, useCallback, useState } from "react";
import * as Styled from "./style";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
}

export const AutoResizeTextarea: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
}) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);

  const handleResizeHeight = useCallback(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, []);

  return (
    <Styled.Textarea
      ref={ref}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onInput={handleResizeHeight}
      rows={3}
    ></Styled.Textarea>
  );
};
