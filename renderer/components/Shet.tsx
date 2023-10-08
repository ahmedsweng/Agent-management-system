"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";

function Shet({ children }) {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>Ajouter</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>form</SheetTitle>
          <SheetDescription className="flex flex-col gap-4">
            {children}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Shet;
