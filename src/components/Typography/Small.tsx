import React from "react";
import classNames from "classnames";
import Scramble from "../Scramble";
import type { SmallProps } from "@/types/Typography";

export default function Small({
  as: Component = "small",
  children,
  isScrambled,
  ...props
}: SmallProps) {
  const renderContent = () => {
    if (isScrambled && typeof children === "string") {
      return <Scramble>{children}</Scramble>;
    }
    return children;
  };

  return (
    <Component
      {...props}
      className={classNames("font-roboto text-xs sm:text-sm", props.className)}
    >
      {renderContent()}
    </Component>
  );
}
