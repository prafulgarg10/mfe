import { mount as Marketing } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    Marketing(ref.current);
  }, []);

  return <div ref={ref} />;
};
