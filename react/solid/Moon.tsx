import * as React from "react";

function MoonIcon(props, svgRef) {
  return <svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>;
}

const ForwardRef = React.forwardRef(MoonIcon);
export default ForwardRef;