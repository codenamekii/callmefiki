"use client";

import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(pathname);
  const menuContainer = useRef<any>(null);
  const [activeProps, setActiveProps] = useState({ width: 90.5, x: 12 });

  useEffect(() => {
    const calculateWidth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));

      const container = document.querySelector(".menu-item.active");
      if (container instanceof HTMLDivElement) {
        if (activeMenu === "/contact") {
          setActiveProps({
            width: container.getBoundingClientRect().width + 36,
            x:
              container.getBoundingClientRect().x -
              menuContainer.current?.getBoundingClientRect().x -
              6,
          });
        } else {
          setActiveProps({
            width: container.getBoundingClientRect().width + 24,
            x:
              container.getBoundingClientRect().x -
              menuContainer.current?.getBoundingClientRect().x,
          });
        }
      }
    };

    if (activeMenu) {
      calculateWidth();
      router.push(activeMenu);
    }
  }, [activeMenu]);

  return (
    <motion.div
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="nav d-flex justify-content-between align-items-center mx-auto position-relative"
    >
      <div
        className="menu-selected position-absolute"
        style={{ width: activeProps.width, left: activeProps.x }}
      ></div>
      <div className="nav-menu d-flex position-relative" ref={menuContainer}>
        <div
          className={`d-flex align-items-center menu-item ${
            activeMenu === "/" && "active"
          }`}
          onClick={() => setActiveMenu("/")}
          style={{ gap: 6 }}
        >
          <Icon icon="home" size={24} className="menu-icon d-block" />
          <div className="menu-label text-body text-light-green mb-0">Home</div>
        </div>
        <div
          className={`d-flex align-items-center menu-item ${
            activeMenu === "/project" && "active"
          }`}
          onClick={() => setActiveMenu("/project")}
          style={{ gap: 6 }}
        >
          <Icon icon="library" size={24} className="menu-icon d-block" />
          <div className="menu-label text-body text-light-green mb-0">
            Projects
          </div>
        </div>
        <div
          className={`d-flex align-items-center menu-item ${
            activeMenu === "/experience" && "active"
          }`}
          onClick={() => setActiveMenu("/experience")}
          style={{ gap: 6 }}
        >
          <Icon icon="rocket" size={24} className="menu-icon d-block" />
          <div className="menu-label text-body text-light-green mb-0">
            Experiences
          </div>
        </div>
        <div
          className={`d-flex align-items-center menu-item ${
            activeMenu === "/blog" && "active"
          }`}
          onClick={() => setActiveMenu("/blog")}
          style={{ gap: 6 }}
        >
          <Icon icon="book" size={24} className="menu-icon d-block" />
          <p className="menu-label mb-0">Blogs</p>
        </div>
      </div>
      <div
        className={`nav-contact menu-item ${
          activeMenu === "/contact" && "active"
        }`}
        onClick={() => setActiveMenu("/contact")}
      >
        <p className="text-body text-light-green">Let&apos;s Talk!</p>
      </div>
    </motion.div>
  );
}
