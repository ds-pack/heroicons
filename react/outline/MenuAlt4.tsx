import * as React from "react";

function MenuAlt4Icon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" /></svg>;
}

const ForwardRef = React.forwardRef(MenuAlt4Icon);
export default ForwardRef;