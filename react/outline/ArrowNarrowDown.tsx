import * as React from "react";

function ArrowNarrowDownIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 17l-4 4m0 0l-4-4m4 4V3" /></svg>;
}

const ForwardRef = React.forwardRef(ArrowNarrowDownIcon);
export default ForwardRef;