import React, { useEffect, useState } from "react";
import Matriz from "../components/Matriz";
import Button from "@components/global/Button";
import { WithResponsiveHook } from "helpers/hooks";


WithResponsiveHook(Home);
function Home(props) {
  const Tiles = Array(8 * 8)
    .fill(0)
    .map((_, i) => ({ checked: false, id: i }));

  const [arrayValidator, setArrayValidator] = useState<number[]>([]);
  const refresh = () => {
    window.location.reload();
  };
  const rotateRight = () => {
    const checkedTiles = document.querySelectorAll(".Tile.checked");
    if (checkedTiles.length <= 2) {
      alert(
        "el barco tioene que tener un largo de almenos tres para poderlo rotar agrega mas casillas y podras rotar"
      );
    }
    checkedTiles.forEach((e) => {
      const id = e.getAttribute("id");
      arrayValidator.push(Number(id));
    });
    if (arrayValidator[1] - arrayValidator[2] === -1) {
      for (let i = 0; i < arrayValidator.length; i++) {
        if (i === 2) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] + 7}`)
            ?.classList.add("checked");
        } else if (i === 3) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] + 14}`)
            ?.classList.add("checked");
        } else if (i === 0) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] - 7}`)
            ?.classList.add("checked");
        }
      }
    } else if (arrayValidator[1] - arrayValidator[2] === -8) {
      for (let i = 0; i < arrayValidator.length; i++) {
        if (i === 2) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] - 7}`)
            ?.classList.add("checked");
        } else if (i === 3) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] - 14}`)
            ?.classList.add("checked");
        } else if (i === 0) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] + 7}`)
            ?.classList.add("checked");
        }
      }
    }
    setArrayValidator([]);
  };

  const rotateLeft = () => {
    const checkedTiles = document.querySelectorAll(".Tile.checked");
    if (checkedTiles.length <= 2) {
      alert(
        "el barco tioene que tener un largo de almenos tres para poderlo rotar agrega mas casillas y podras rotar"
      );
    }
    checkedTiles.forEach((e) => {
      const id = e.getAttribute("id");
      arrayValidator.push(Number(id));
    });
    if (arrayValidator[1] - arrayValidator[2] === -1) {
      for (let i = 0; i < arrayValidator.length; i++) {
        if (i === 3) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] + 14}`)
            ?.classList.add("checked");
        } else if (i === 2) {
          console.log("este", arrayValidator[i], "menos este", 7);
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] + 7}`)
            ?.classList.add("checked");
        } else if (i === 0) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] - 7}`)
            ?.classList.add("checked");
        }
      }
    } else if (arrayValidator[1] - arrayValidator[2] === -8) {
      for (let i = 0; i < arrayValidator.length; i++) {
        if (i === 3) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] - 14}`)
            ?.classList.add("checked");
        } else if (i === 2) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] - 7}`)
            ?.classList.add("checked");
        } else if (i === 0) {
          document
            .getElementById(`${arrayValidator[i]}`)
            ?.classList.remove("checked");
          document
            .getElementById(`${arrayValidator[i] + 7}`)
            ?.classList.add("checked");
        }
      }
    }
    setArrayValidator([]);
  };

  const deleteLast = () => {
    const checkedTiles = document.querySelectorAll(".Tile.checked");
    if (checkedTiles.length === 0) {
      alert("ya no hay mas registros para borrar");
    }
    checkedTiles.forEach((e) => {
      const id = e.getAttribute("id");
      arrayValidator.push(Number(id));
    });
    document
      .getElementById(`${arrayValidator[arrayValidator.length - 1]}`)
      ?.classList.remove("checked");
    setArrayValidator([]);
  };

  return (
    <div className="Home animate__backInLeft">
      <h1 className="titlle">Guerra Naval Borracha</h1>
      <Matriz tiles={Tiles} />
      <Button
        buttonType="borrado-gestios"
        text="Refresh"
        onClick={refresh}
        icon="svg-icon"
      />
      <Button
        buttonType="borrado-gestios"
        text="Delete the last"
        onClick={deleteLast}
        icon="svg-icon3"
      />
      <div className="buttonRotate">
        <Button
          buttonType="Rotate-button"
          text="Rotate left"
          onClick={rotateLeft}
          icon="svg-icon2"
        />
        <Button
          buttonType="Rotate-button"
          text="Rotate right"
          onClick={rotateRight}
          icon="svg-icon1"
        />
      </div>
    </div>
  );
}

export default Home;
