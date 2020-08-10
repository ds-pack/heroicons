import * as React from "react";

function MenuAlt1Icon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>;
}

const ForwardRef = React.forwardRef(MenuAlt1Icon);
export default ForwardRef;