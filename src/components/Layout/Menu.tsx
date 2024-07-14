import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import Typography from "../Typography";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";

interface MenuItemType {
  name: string;
  icon: string;
  pathname: string[];
}

const menuItem: MenuItemType[] = [
  {
    name: "Home",
    icon: "home",
    pathname: ["/", "/about"],
  },
  {
    name: "Experiences",
    icon: "skills",
    pathname: ["/experience"],
  },
  {
    name: "Skills",
    icon: "stack",
    pathname: ["/skills"],
  },
  {
    name: "Projects",
    icon: "project",
    pathname: ["/project"],
  },
  {
    name: "Blog",
    icon: "blog",
    pathname: ["/blog"],
  },
  {
    name: "Contact",
    icon: "contact",
    pathname: ["/contact"],
  },
];

export default function Menu() {
  const pathname = usePathname();
  const menuContainer = useRef<any>(null);
  const [activeProps, setActiveProps] = useState({
    x: 10,
  });

  const changePage = () => {
    const container = document.getElementById("itemActive");
    if (container instanceof HTMLAnchorElement) {
      setActiveProps({
        x:
          container.getBoundingClientRect().x -
          menuContainer.current?.getBoundingClientRect().x -
          1,
      });
    }
  };

  useEffect(() => {
    changePage();
  }, [pathname]);

  const isActive = (list: string[]) => list.includes(pathname);

  return (
    <div className="fixed left-0 right-0 top-0 py-4 flex justify-center z-50">
      <div
        className="relative flex flex-row gap-2 bg-black border border-solid border-green-primary rounded-[50px] py-2 px-2.5 w-fit transition-all"
        ref={menuContainer}
      >
        <div
          className="absolute w-10 h-10 content-none bg-green-primary rounded-[50px] transition-all duration-300"
          style={{ left: activeProps.x }}
        ></div>
        {menuItem.map((item: MenuItemType, index: number) => (
          <Link
            href={item.pathname[0]}
            key={index}
            id={isActive(item.pathname) ? "itemActive" : ""}
            className={classNames(
              "relative flex items-center gap-1.5 p-2 rounded-[30px] group transition duration-300 hover:bg-green-primary/50"
            )}
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <Icon
                icon={item.icon}
                size={24}
                className="text-green-secondary"
              />
            </div>
            <div className="absolute -bottom-3 translate-y-full left-1/2 -translate-x-1/2 bg-green-primary/50 py-1.5 px-3 rounded-[30px] transition-all duration-300 opacity-0 group-hover:opacity-100">
              <Typography.Paragraph
                as="span"
                className={classNames("text-green-secondary")}
              >
                {item.name}
              </Typography.Paragraph>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
