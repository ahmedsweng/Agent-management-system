// Client-side code (e.g., React component)
"use client";
import { useEffect, useState } from "react";
import Shet from "../../../components/Shet";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { DataTable } from "../../data-tables/projetTable";
import { columns } from "../../columns/clientColumns";

function page() {
  const [client, setClient] = useState([]);

  const fetchData = () => {
    const proj = window.electronAPI.getClient().then((res) => setClient(res));
    console.log(proj);
  };

  const newprojet = () => {};
  return (
    <div>
      <div className="flex gap-5 my-4">
        <Button onClick={fetchData}>Fetch</Button>
        <Shet
          children={
            <form onSubmit={newprojet} className="flex flex-col gap-5">
              <Input placeholder="Projet id" />
              <Input placeholder="Type" />
              <Input placeholder="Address" />
              <Button type="submit">Ajoute</Button>
            </form>
          }
        />
      </div>
      <DataTable columns={columns} data={client} />
    </div>
  );
}

export default page;
