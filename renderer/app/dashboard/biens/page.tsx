// Client-side code (e.g., React component)
"use client";
import { useEffect, useState } from "react";
import Shet from "../../../components/Shet";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { DataTable } from "../../data-tables/projectTable";
import { columns } from "../../columns/bienColumns";

function page() {
  const [bien, setBien] = useState([]);

  const fetchData = () => {
    const proj = window.electronAPI.getBien().then((res) => setBien(res));
    console.log(proj);
  };

  const newproject = () => {};
  return (
    <div className="felx  ">
      <h1>Users</h1>
      <div className="flex gap-5 my-4   ">
        <Button className="flex-grow-1" onClick={fetchData}>
          Fetch
        </Button>
        <Shet
          children={
            <form onSubmit={newproject} className="flex flex-col   gap-5">
              <Input className="flex-grow-1" placeholder="project id" />
              <Input className="flex-grow-1" placeholder="Type" />
              <Input className="flex-grow-1" placeholder="Address" />
              <Button className="flex-grow-1" type="submit">
                Ajoute
              </Button>
            </form>
          }
        />
      </div>
      <DataTable columns={columns} data={bien} />
    </div>
  );
}

export default page;
