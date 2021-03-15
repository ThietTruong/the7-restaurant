import React from "react";
import Style from "../../../styles/components/ItemInfor.module.css";
function ItemInfor() {
  return (
    <>
      <div className={Style.ItemInfor}>
        <div className={Style.ItemInfor__container}>
          <div className={Style.ItemInfor__header}>
            <img src="https://the7.io/restaurant/wp-content/uploads/sites/27/2016/07/logo2.png" />
          </div>
          <div className={Style.ItemInfor__content}>
            <p>
              “Сonsectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinart tellus, luctus nec ullamcorper
              mattis, pulvinar dapibus leo!”
            </p>
          </div>
          <div className={Style.ItemInfor__footer}>Johnny Laub News</div>
        </div>
      </div>
    </>
  );
}

export default ItemInfor;
