import * as React from "react";

function DotsCircleHorizontalIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}

const ForwardRef = React.forwardRef(DotsCircleHorizontalIcon);
export default ForwardRef;