import React from "react";
import style from "../../../styles/components/ItemMenu.module.css";
function ItemMenu({ title, text, price }) {
  return (
    <div className={style.item}>
      <div className={style.itemmenu}>
        <div className={style.itemmenu__content}>
          <div className={style.itemmenu__title}>Green Salad</div>
          <div className={style.itemmenu__des}>
            With classic Italian dressing
          </div>
        </div>
        <div className={style.itemMenu__price}>$4.00</div>
      </div>
      <div className={style.dash}></div>
    </div>
  );
}

export default ItemMenu;
