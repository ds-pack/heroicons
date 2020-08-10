import * as React from "react";

function ArrowNarrowRightIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>;
}

const ForwardRef = React.forwardRef(ArrowNarrowRightIcon);
export default ForwardRef;