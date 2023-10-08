"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Bien = {
  id: string;
  lot_id: string;
  Bloc: string;
  Itage: string;
  superficie_habitable: string;
  superficie_total: string;
  prix_m2: number;
  prix_total: number;
  etat: string;
};

export const columns: ColumnDef<Bien>[] = [
  {
    accessorKey: "id",
    header: "Bien_id",
  },
  {
    accessorKey: "lot_id",
    header: "Lot",
  },
  {
    accessorKey: "Bloc",
    header: "Bloc",
  },
  {
    accessorKey: "Itage",
    header: "Itage",
  },
  {
    accessorKey: "superficie_habitable",
    header: "Superficie habitable",
  },
  {
    accessorKey: "superficie_total",
    header: "Superficie total",
  },
  {
    accessorKey: "prix_m2",
    header: "Prix/m2",
  },
  {
    accessorKey: "prix_total",
    header: "Prix total",
  },
  {
    accessorKey: "etat",
    header: "Etat",
  },
];
