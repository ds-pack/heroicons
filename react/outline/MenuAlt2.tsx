import * as React from "react";

function MenuAlt2Icon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>;
}

const ForwardRef = React.forwardRef(MenuAlt2Icon);
export default ForwardRef;