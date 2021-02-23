import * as React from "react";

function SvgShare(props) {
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
        d="M20.189 6.891l-6.5-6.6a.963.963 0 00-1.378 0l-6.5 6.6a.997.997 0 000 1.4.963.963 0 001.378 0l4.836-4.912v13.453c0 .547.437.99.975.99a.983.983 0 00.975-.99V3.38l4.836 4.912a.96.96 0 001.378 0 1 1 0 000-1.4z"
        fill="currentColor"
      />
      <path
        d="M23.02 26H2.98C1.336 26 0 24.643 0 22.974v-7.462c0-.546.437-.99.975-.99s.975.444.975.99v7.462c0 .577.462 1.046 1.03 1.046h20.04c.569 0 1.03-.469 1.03-1.046v-7.462c0-.546.437-.99.975-.99s.975.444.975.99v7.462C26 24.643 24.664 26 23.02 26z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgShare;
