import * as React from "react";

function BookmarkIcon(props, svgRef) {
  return <svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" /></svg>;
}

const ForwardRef = React.forwardRef(BookmarkIcon);
export default ForwardRef;