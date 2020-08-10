import * as React from "react";

function FolderAddIcon(props, svgRef) {
  return <svg viewBox="0 0 20 20" fill="currentColor" width="1em" height="1em" ref={svgRef} {...props}><path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h4m-2-2v4" /></svg>;
}

const ForwardRef = React.forwardRef(FolderAddIcon);
export default ForwardRef;