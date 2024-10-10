"use client";

import { useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const [openId, setOpenId] = useState(null);
  const pathname = usePathname();

  const isMinimized = useSelector(
    (state) => state?.sidebarReducer?.isMinimized
  );

  const SideBarData = [
    {
      id: 1,
      title: "Sales",
      childrenLink: [
        {
          id: 1,
          title: "Dashboard",
          href: "/",
        },
        {
          id: 2,
          title: "Addon PI",
          href: "/addon_pi",
        },
        {
          id: 3,
          title: "Center Tour",
          href: "/center_tour",
        },
        {
          id: 4,
          title: "Sales Customization",
          href: "/sales_customization",
        },
        {
          id: 5,
          title: "CRM Teams",
          href: "/crm_teams",
        },
        {
          id: 6,
          title: "CRM My Team",
          href: "/crm_my_team",
        },
        {
          id: 7,
          title: "Center Team",
          href: "/center_team",
        },
        {
          id: 8,
          title: "CRM",
          href: "/crm/leads",
        },
        {
          id: 9,
          title: "Space Codes",
          href: "/space_codes",
        },
        {
          id: 10,
          title: "Knowlarity",
          href: "/knowlarity",
        },
        {
          id: 11,
          title: "Lead Auto Sign",
          href: "/lead_auto",
        },
      ],
    },
    {
      id: 2,
      title: "Accounts",
      childrenLink: [],
    },
    {
      id: 3,
      title: "Operations",
      childrenLink: [],
    },
    {
      id: 4,
      title: "Legal",
      childrenLink: [],
    },
    {
      id: 5,
      title: "Proc",
      childrenLink: [],
    },
    {
      id: 6,
      title: "Proj",
      childrenLink: [],
    },
    {
      id: 7,
      title: "Analytics",
      childrenLink: [],
    },
    {
      id: 8,
      title: "Marketing",
      childrenLink: [],
    },
    {
      id: 10,
      title: "Ticket",
      childrenLink: [],
    },
    {
      id: 11,
      title: "Payments",
      childrenLink: [],
    },
    {
      id: 12,
      title: "HR",
      childrenLink: [],
    },
    {
      id: 13,
      title: "FM",
      childrenLink: [],
    },
    {
      id: 14,
      title: "Admin",
      childrenLink: [],
    },
  ];

  SideBarData.forEach((item) => {
    item.isActive = item.childrenLink.some((link) => pathname === link.href);
    item.childrenLink.forEach((link) => {
      link.isActive = pathname === link.href;
    });
  });

  return (
    <aside
      className={`relative text-white hidden h-screen flex-none border-r bg-dark transition-[width] duration-500 md:block hover:overflow-y-auto overflow-hidden ${
        !isMinimized ? "w-40" : "w-0"
      }`}
    >
      <div className="py-4">
        <nav className="grid items-start gap-2">
          {SideBarData?.map((item) => (
            <div
              key={item?.id}
              href="/dashboard"
              className={`py-2 px-3 rounded-md gap-2 text-sm font-medium hover:bg-custom-gradient hover:text-accent-foreground ${
                item?.isActive
                  ? "bg-custom-gradient border-l-4 border-l-blue-500"
                  : "bg-transparent"
              } cursor-pointer`}
            >
              <div
                className="flex items-center justify-between"
                onClick={() => {
                  if (openId !== item?.id) {
                    setOpenId(item?.id);
                  } else {
                    setOpenId(null);
                  }
                }}
              >
                <span className="mr-2 truncate">{item?.title}</span>
                {openId === item?.id ? <FaAngleUp /> : <FaAngleDown />}
              </div>
              {openId === item?.id && (
                <div className="overflow-hidden">
                  <ul className="mt-4 mb-5.5 flex flex-col gap-2.5">
                    {item?.childrenLink?.map((item) => (
                      <li
                        className={`hover:text-black ${
                          item?.isActive && "bg-white text-dark"
                        } hover:bg-white pl-1 rounded-md`}
                        key={item?.id}
                      >
                        <Link className="py-1 block" href={item?.href}>
                          {item?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
