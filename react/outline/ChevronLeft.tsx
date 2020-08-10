import * as React from "react";

function ChevronLeftIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
}

const ForwardRef = React.forwardRef(ChevronLeftIcon);
export default ForwardRef;