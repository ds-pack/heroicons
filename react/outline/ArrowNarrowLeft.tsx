import * as React from "react";

function ArrowNarrowLeftIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>;
}

const ForwardRef = React.forwardRef(ArrowNarrowLeftIcon);
export default ForwardRef;