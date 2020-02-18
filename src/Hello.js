import React from "react";
import { useCountRenders } from "./useCountRenders";

export const Hello = React.memo(({ increment }) => {
  useCountRenders();
  return (
    <React.Fragment>
      <button onClick={() => increment()}>increment</button>
    </React.Fragment>
  );
});
