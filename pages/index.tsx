import React, { useEffect, useState } from "react";
import Matriz from "../components/Matriz";
import Button from "@components/global/Button";
import { WithResponsiveHook } from "helpers/hooks";

WithResponsiveHook(Home);
function Home(props) {
  const Tiles = Array(8 * 8)
    .fill(0)
    .map((_, i) => ({ checked: false, id: i }));
  const reflech = () => {
    window.location.reload();
  };

  return (
    <div className="Home">
      <h1 className="titlle">Guerra Naval Borracha</h1>
      <Matriz tiles={Tiles} />
      <Button buttonType="borrado-gestios" text="Refrescar" onClick={reflech} icon="svg-icon" />
    </div>
  );
}

export default Home;
