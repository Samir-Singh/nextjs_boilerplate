"use client";

import { MdMenu } from "react-icons/md";
import UserNav from "../UserNav/UserNav";
import Avatar from "@mui/material/Avatar";
import { toggle } from "@/store/slices/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-6 py-2">
        <MdMenu
          className="text-2xl cursor-pointer"
          onClick={() => dispatch(toggle())}
        />

        <Avatar>J</Avatar>
        {/* <UserNav /> */}
      </nav>
    </header>
  );
};

export default Header;
