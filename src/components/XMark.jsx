export default function XMark({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="rgba(0,194,255,0.12)" />
      <path
        d="M9 9L16 16M16 16L23 23M16 16L23 9M16 16L9 23"
        stroke="#00c2ff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
