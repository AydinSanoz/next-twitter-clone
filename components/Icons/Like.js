import * as React from "react";

function SvgLike(props) {
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
        d="M13 23.441h-.015C10.187 23.39 2.112 16.094 2.112 9.184c0-3.319 2.736-6.233 5.854-6.233 2.48 0 4.149 1.712 5.033 2.957.882-1.243 2.55-2.957 5.032-2.957 3.12 0 5.854 2.914 5.854 6.235 0 6.907-8.075 14.202-10.873 14.253H13v.002zM7.967 4.577c-2.254 0-4.228 2.154-4.228 4.61 0 6.218 7.62 12.562 9.262 12.63 1.645-.068 9.263-6.41 9.263-12.63 0-2.456-1.975-4.61-4.229-4.61-2.738 0-4.268 3.18-4.281 3.212-.25.609-1.252.609-1.503 0-.015-.032-1.543-3.212-4.283-3.212h-.001z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLike;
