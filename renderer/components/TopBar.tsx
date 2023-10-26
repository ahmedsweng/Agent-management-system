import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Input } from "./ui/input";
import React from "react";
import { UserNav } from "./UserNav";

function TopBar() {
  const date = new Date();

  return (
    <div>
      <div className="relative flex flex-1 justify-between items-center pb-2">
        <div className="absolute right-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 dark:from-gray-900 dark:via-gray-500 dark:to-gray-900 " />
        <div>
          <h1 className="text-2xl">GOOD MORNING </h1>
          <h1 className="text-gray-500">{date.toDateString()}</h1>
        </div>
        <p className="text-sm text-muted-foreground">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">Ctrl</span>K
          </kbd>
        </p>
        <UserNav />
      </div>
    </div>
  );
}

export default TopBar;
