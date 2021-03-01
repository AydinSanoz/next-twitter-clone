import * as React from "react";

function SvgList(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.075 26H2.925A2.93 2.93 0 010 23.075V2.925A2.93 2.93 0 012.925 0h20.15A2.93 2.93 0 0126 2.925v20.15A2.93 2.93 0 0123.075 26zM2.925 1.95a.976.976 0 00-.975.975v20.15c0 .537.437.975.975.975h20.15a.976.976 0 00.975-.975V2.925a.976.976 0 00-.975-.975H2.925z"
        fill="currentColor"
      />
      <path
        d="M19.5 8.632h-13a.976.976 0 010-1.95h13a.975.975 0 110 1.95zm0 5.343h-13a.975.975 0 010-1.95h13a.975.975 0 010 1.95zM13 19.318H6.5a.975.975 0 110-1.95H13a.976.976 0 010 1.95z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgList;
