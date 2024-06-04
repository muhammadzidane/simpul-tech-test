import React from "react";

import classNames from "classnames";

const Card: React.FC<CardProps> = ({ className, children, height, width }) => {
  const cardClassName = classNames(
    className,
    "bg-white-1 mb-4 py-4 px-6 rounded-sm"
  );

  return (
    <div className={cardClassName} style={{ height, width }}>
      {children}
    </div>
  );
};

export default Card;
