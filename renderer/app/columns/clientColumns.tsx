"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Client = {
  id: string;
  date_de_naissance: string;
  lieu_de_naissance: string;
  adresse: string;
  telephone: string;
  id_piece: string;
};

export const columns: ColumnDef<Client>[] = [
  {
    accessorKey: "id",
    header: "Client_id",
  },
  {
    accessorKey: "date_de_naissance",
    header: "Date de naissance",
  },
  {
    accessorKey: "lieu_de_naissance",
    header: "Lieu de naissance",
  },
  {
    accessorKey: "adresse",
    header: "Address",
  },
  {
    accessorKey: "telephone",
    header: "Telephone",
  },
  {
    accessorKey: "id_piece",
    header: "Carte nationale",
  },
];
