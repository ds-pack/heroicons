import * as React from "react";

function MailIcon(props, svgRef) {
  return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}

const ForwardRef = React.forwardRef(MailIcon);
export default ForwardRef;