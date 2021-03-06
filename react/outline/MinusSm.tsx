import * as React from "react";

function MinusSmIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" /></svg>;
}

const ForwardRef = React.forwardRef(MinusSmIcon);
export default ForwardRef;