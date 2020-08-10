import * as React from "react";

function LightningBoltIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
}

const ForwardRef = React.forwardRef(LightningBoltIcon);
export default ForwardRef;