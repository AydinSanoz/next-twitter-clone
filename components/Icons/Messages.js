import * as React from "react";

function SvgMessages(props) {
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
        d="M20.854 3.27H5.146a2.983 2.983 0 00-2.98 2.98v13.537a2.984 2.984 0 002.98 2.983h15.708a2.984 2.984 0 002.98-2.983V6.251a2.983 2.983 0 00-2.98-2.982zM5.146 4.893h15.708c.748 0 1.354.607 1.354 1.355v.773l-8.72 5.814a.878.878 0 01-.976-.002l-8.72-5.812V6.25c0-.748.606-1.354 1.354-1.354zm15.708 16.248H5.146a1.355 1.355 0 01-1.354-1.354V8.927l7.843 5.232a2.454 2.454 0 002.73.001l7.843-5.232v10.857c0 .747-.606 1.354-1.354 1.354v.003z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMessages;
