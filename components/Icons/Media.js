import * as React from "react";

function SvgMedia(props) {
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
        d="M21.396 2.167H4.604a2.441 2.441 0 00-2.437 2.437v16.792a2.441 2.441 0 002.437 2.437h16.792a2.441 2.441 0 002.437-2.437V4.604a2.441 2.441 0 00-2.437-2.437zM4.604 3.792h16.792c.447 0 .812.365.812.812v10.482l-4.18-4.179a.812.812 0 00-.573-.238h-.004a.801.801 0 00-.576.242l-4.677 4.75-1.964-1.957a.812.812 0 00-.574-.238c-.209-.033-.428.087-.58.246l-5.288 5.4V4.604c0-.447.365-.812.812-.812zm-.806 17.636l5.87-5.995 6.805 6.775H4.604a.811.811 0 01-.806-.78zm17.598.78h-2.622l-5.424-5.402 4.108-4.171 4.75 4.75v4.01a.814.814 0 01-.812.813z"
        fill="currentColor"
      />
      <path
        d="M9.607 10.672a1.67 1.67 0 100-3.341 1.67 1.67 0 000 3.34z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgMedia;
