import React from "react";
import style from "../../../styles/components/Button.module.css";
function Button({ text, href }) {
  return (
    <div className={style.button}>
      <a className={style.button__links} href={href}>
        {text}
      </a>
    </div>
  );
}

export default Button;
