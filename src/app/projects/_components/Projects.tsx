"use client";

import React from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import { useMobile } from "@/hooks/useMobile.hook";
import type { ProjectDataType } from "@/types/Content";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useProject } from "../_hooks/useProject.hook";

import projects from "@/data/projects.json";
import { useGtag } from "@/hooks/useGtag.hook";

export default function Projects() {
  const { isMobile } = useMobile();
  const { gridLayout, gridSize } = useProject();
  const { event } = useGtag();

  React.useEffect(() => {
    event("page_view", {
      page_name: "projects",
    });
  }, [event]);

  return (
    <section className="pt-[100px] pb-[80px] min-h-dvh flex justify-center items-center">
      <div className="container mx-auto xl:w-[1024px] lg:w-[1024px] md:w-[768px] sm:w-[540px] w-[370px] pb-8">
        <ResponsiveGridLayout
          className="mx-auto relative"
          layouts={gridLayout}
          width={projects.width[gridSize]}
          rowHeight={projects.height[gridSize]}
          margin={isMobile ? [12, 12] : [24, 24]}
          breakpoints={projects.breakpoints}
          cols={projects.columns}
          useCSSTransforms={true}
          isResizable={false}
          isDraggable={!isMobile}
          draggableCancel=".non-draggable"
          onDragStart={() => {
            event("card_drag", {
              page_name: "projects",
              component_name: "project_grid",
              action: "drag_start",
            });
          }}
          onDragStop={() => {
            event("card_drag", {
              page_name: "projects",
              component_name: "project_grid",
              action: "drag_stop",
            });
          }}
        >
          {(projects.data as ProjectDataType[]).map(
            (data: ProjectDataType, index: number) => (
              <div key={data.id} onClick={() => {
                event("card_click", {
                  page_name: "projects",
                  component_name: "project_grid",
                  card_name: `project_grid_click_${data.id}`,
                });
              }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + 0.1 * index,
                    type: "tween",
                  }}
                  className="w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <ProjectCard data={data} />
                </motion.div>
              </div>
            )
          )}
        </ResponsiveGridLayout>
      </div>
    </section>
  );
}
