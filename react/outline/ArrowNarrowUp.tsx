import * as React from "react";

function ArrowNarrowUpIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" /></svg>;
}

const ForwardRef = React.forwardRef(ArrowNarrowUpIcon);
export default ForwardRef;