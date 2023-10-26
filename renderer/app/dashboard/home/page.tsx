"use client";

import { useEffect, useState } from "react";

const Main = () => {
  const [allproject, setAllproject] = useState();
  const [allclient, setAllClient] = useState();
  const [allbien, setAllBien] = useState();

  useEffect(() => {
    try {
      window.electronAPI.getAllProj().then((res) => setAllproject(res));
      window.electronAPI.getAllClient().then((res) => setAllClient(res));
      window.electronAPI.getAllBien().then((res) => setAllBien(res));
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <div className="border-2 flex-grow-1 basis-auto rounded pr-40 pl-6 py-10 text-left my-4 border-gray-300">
          <p className="text-5xl"> {allproject} </p>
          <p> Tous les projects </p>
        </div>
        <div className="border-2 flex-grow-1 basis-auto rounded pr-40 pl-6 py-10 text-left my-4 border-gray-300">
          <p className="text-5xl"> {allclient} </p>
          <p> Tous les clients </p>
        </div>
        <div className="border-2 flex-grow-1  basis-auto rounded pr-40 pl-6 py-10 text-left my-4 border-gray-300">
          <p className="text-5xl"> {allbien} </p>
          <p> Tous les biens </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
