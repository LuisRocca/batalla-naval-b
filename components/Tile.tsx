import React, { useState, useEffect } from "react";
export type TileProps = {
  checked: boolean;
  id: number;
};

const Tile = ({ checked, id }: TileProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);
  const [isValidator, setIsValidator] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(0);
  const [arrayValidator, setArrayValidator] = useState<number[]>([]);
  const handleClick = () => {
    if (isChecked === true) {
      setIsChecked(!isChecked);
    } else {
      setIsChecked(!isChecked);
    }
  };

  const validateSequence = (array: number[]) => {
    const sequence = array[1] - array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] !== array[i - 1] + sequence) {
        setIsValidator(false);
        alert(
          "Solo puedes escribir lineas horizontales, verticales o diagonales S; tiene que ser una seguidilla para poder avanzar"
        );
      }
    }
  };

  useEffect(() => {
    
    const checkedTiles = document.querySelectorAll(".Tile.checked");
    if (checkedTiles.length > 0 && checkedTiles.length <= 4) {
      checkedTiles.forEach((e) => {
        const id = e.getAttribute("id");
        arrayValidator.push(Number(id));
        const arrayUnrepeated: number[] = arrayValidator.filter(
          (valor, indice, arreglo) => {
            arreglo.indexOf(valor) === indice;
          }
        );
        setArrayValidator(arrayUnrepeated);
        for (let i = 1; i < arrayValidator.length; i++) {
          if (arrayValidator[i - 1] + 1 === arrayValidator[i]) {
            validateSequence(arrayValidator);
            break
          } else if (arrayValidator[i - 1] + 8 === arrayValidator[i]) {
            validateSequence(arrayValidator);
            break
          } else if (arrayValidator[i - 1] + 9 === arrayValidator[i]) {
            validateSequence(arrayValidator);
            break
          } else if (arrayValidator[i - 1] + 7 === arrayValidator[i]) {
            validateSequence(arrayValidator);
            break
          } else {
            setIsValidator(false);
            alert(
              "Solo puedes escribir lineas horizontales, verticales o diagonales S; tiene que ser una seguidilla para poder avanzar"
            );
            break
          }
        }
      });
    }
    setLimit(checkedTiles.length);
  }, [isChecked]);

  if (isValidator && isChecked && limit <= 4) {
    return (
      <div className={`Tile checked`} onClick={handleClick} id={`${id}`}></div>
    );
  } else {
    return <div className={`Tile`} onClick={handleClick} id={`${id}`} ></div>;
  }
};
export default Tile;
