import React from "react";
import Error from "../components/Error";
import TitleManager from "../components/TitleManager";

const Not_Found = () => {
  return (
    <>
      <TitleManager title={`VirtualParadise | Not Found`} />
      <Error />
    </>
  );
};

export default Not_Found;
