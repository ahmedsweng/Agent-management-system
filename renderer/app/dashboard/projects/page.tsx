// Client-side code (e.g., React component)
"use client";
import { useEffect, useState } from "react";
import Shet from "../../../components/Shet";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { DataTable } from "../../data-tables/projectTable";
import { columns } from "../../columns/projectColumns";

function page() {
  const [project, setproject] = useState([]);

  const fetchData = () => {
    const proj = window.electronAPI.getProj().then((res) => setproject(res));
    console.log(proj);
  };

  const newproject = () => {};
  return (
    <div>
      <h1>Users</h1>
      <div className="flex gap-5 my-4">
        <Button onClick={fetchData}>Fetch</Button>
        <Shet
          children={
            <form onSubmit={newproject} className="flex flex-col gap-5">
              <Input placeholder="project id" />
              <Input placeholder="Type" />
              <Input placeholder="Address" />
              <Button type="submit">Ajoute</Button>
            </form>
          }
        />
      </div>
      <DataTable columns={columns} data={project} />
    </div>
  );
}

export default page;
