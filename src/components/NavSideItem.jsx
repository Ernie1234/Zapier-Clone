import React from "react";
import AppIcon from "./AppIcon";

function NavSideItem({ cat, task = 0 }) {
  const taskEl = task === 0 ? "" : task;
  return (
    <div>
      <div className="flex justify-between m-3">
        <div className="flex gap-2 items-center">
          <AppIcon />
          <h3 className="font-bold capitalize text-base">{cat}</h3>
        </div>
        <p className="text-slate-500">{taskEl}</p>
      </div>
    </div>
  );
}

export default NavSideItem;
