import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function getModalStyle() {
  return {
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "100vw",
    height: "100vh",
  },
  modal: {
    "&:focus": {
      outline: "none",
    },
  },
}));
function LoadImg({ src }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper} onClick={handleClose}>
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: "100%",

          backgroundColor: "#121212",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            cursor: "pointer",
            position: "absolute",
            width: "1.6rem",
            height: "1.6rem",
            right: "1.5%",
            top: "10%",
            color: "#fff",
          }}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            class="svg-inline--fa fa-times fa-w-11"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path
              fill="currentColor"
              d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <img
          style={{
            width: "100rem",
            objectFit: "cover",

            position: "absolute",
            top: `${50}%`,
            left: `${50}%`,
            transform: `translate(-${50}%, -${50}%)`,
          }}
          src={src}
        ></img>
      </div>
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#121212",
          padding: "1rem 0",
        }}
      >
        <div
          style={{
            color: "#fff",
            marginBottom: "0.5rem",
            fontSize: "1.7rem",
          }}
        >
          Seven Resto - Large Romm
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        <img src={src} style={{ width: "36.3rem", height: "24.3rem" }}></img>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{ outline: "none" }}
        // aria-labelledby="simple-modal-title"
        // aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default LoadImg;
