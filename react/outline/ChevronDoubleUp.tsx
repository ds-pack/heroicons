import * as React from "react";

function ChevronDoubleUpIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11l7-7 7 7M5 19l7-7 7 7" /></svg>;
}

const ForwardRef = React.forwardRef(ChevronDoubleUpIcon);
export default ForwardRef;