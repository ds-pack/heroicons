import * as React from "react";

function ChevronDoubleLeftIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>;
}

const ForwardRef = React.forwardRef(ChevronDoubleLeftIcon);
export default ForwardRef;