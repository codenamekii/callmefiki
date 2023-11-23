"use client";

import { GradientCard } from "@/components/Card";
import React from "react";
import CardContact from "./CardContact";
import { motion } from "framer-motion";

export default function SocialContact() {
  return (
    <div className="d-flex justify-content-lg-end justify-content-center">
      <div className="social-grid mb-2 mb-sm-4 mb-lg-0">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
        >
          <GradientCard style={{ maxWidth: 267 }} shape="square">
            <CardContact
              icon="instagram"
              title="Instagram"
              detail="@daffakurniaf11"
            />
          </GradientCard>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.2 }}
        >
          <GradientCard style={{ maxWidth: 267 }} shape="square">
            <CardContact
              icon="whatsapp"
              title="Whatsapp"
              detail="+6285156317473"
            />
          </GradientCard>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.4 }}
        >
          <GradientCard style={{ maxWidth: 267 }} shape="square">
            <CardContact icon="github" title="Github" detail="daffakurniaf11" />
          </GradientCard>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5, delay: 0.6 }}
        >
          <GradientCard style={{ maxWidth: 267 }} shape="square">
            <CardContact
              icon="linkedin"
              title="LinkedIn"
              detail="Daffa Kurnia F"
            />
          </GradientCard>
        </motion.div>
      </div>
    </div>
  );
}
