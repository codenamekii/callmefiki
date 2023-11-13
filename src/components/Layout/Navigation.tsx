"use client";

import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import Link from "next/link";

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState("home");
  const menuContainer = useRef<any>(null);
  const [activeProps, setActiveProps] = useState({ width: 90.5, x: 12 });

  useEffect(() => {
    const calculateWidth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));

      const container = document.querySelector(".menu-item.active");
      if (container instanceof HTMLDivElement) {
        setActiveProps({
          width: container.getBoundingClientRect().width + 24,
          x:
            container.getBoundingClientRect().x -
            menuContainer.current?.getBoundingClientRect().x,
        });
      }
    };

    if (activeMenu) {
      calculateWidth();
    }
  }, [activeMenu]);

  return (
    <div className="nav d-flex justify-content-between align-items-center mx-auto position-relative">
      <div
        className="menu-selected position-absolute"
        style={{ width: activeProps.width, left: activeProps.x }}
      ></div>
      <div className="nav-menu d-flex position-relative" ref={menuContainer}>
        <div
          className={`menu-item ${activeMenu === "home" && "active"}`}
          onClick={() => setActiveMenu("home")}
        >
          <Link href={"/"} className="d-flex gap-1 align-items-center">
            <Icon icon="home" size={24} className="menu-icon d-block" />
            <div className="menu-label mb-0">Home</div>
          </Link>
        </div>
        <div
          className={`menu-item ${activeMenu === "projects" && "active"}`}
          onClick={() => setActiveMenu("projects")}
        >
          <Link href={"/"} className="d-flex gap-1 align-items-center">
            <Icon icon="library" size={24} className="menu-icon d-block" />
            <div className="menu-label mb-0">Projects</div>
          </Link>
        </div>
        <div
          className={`menu-item ${activeMenu === "experiences" && "active"}`}
          onClick={() => setActiveMenu("experiences")}
        >
          <Link href={"/"} className="d-flex gap-1 align-items-center">
            <Icon icon="rocket" size={24} className="menu-icon d-block" />
            <div className="menu-label mb-0">Experiences</div>
          </Link>
        </div>
        <div
          className={`menu-item ${activeMenu === "blogs" && "active"}`}
          onClick={() => setActiveMenu("blogs")}
        >
          <Link href={"/"} className="d-flex gap-1 align-items-center">
            <Icon icon="book" size={24} className="menu-icon d-block" />
            <p className="menu-label mb-0">Blogs</p>
          </Link>
        </div>
      </div>
      <div
        className={`nav-contact menu-item ${
          activeMenu === "contact" && "active"
        }`}
        onClick={() => setActiveMenu("contact")}
      >
        <Link href={"/"}>
          <p>Let&apos;s Talk!</p>
        </Link>
      </div>
    </div>
  );
}
