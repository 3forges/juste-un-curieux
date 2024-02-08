import React from 'preact/compat';
import { IconContext } from "react-icons";
import { BsMoon, BsMoonStarsFill } from "react-icons/bs";

export interface ThemeSwitcherMoonIconProps {
  className?: string;
  icon_size?: number;
  color?: string;
}

export function ThemeSwitcherMoonIcon({ className = "", icon_size = 18, color = "currentColor" }: ThemeSwitcherMoonIconProps) {
  return (
    <>
      <IconContext.Provider
        value={{ color: color, className: className, size: icon_size }}
      >
        <BsMoonStarsFill />

      </IconContext.Provider>
    </>
  )
}