import * as React from "react";

function ChevronDoubleDownIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" /></svg>;
}

const ForwardRef = React.forwardRef(ChevronDoubleDownIcon);
export default ForwardRef;