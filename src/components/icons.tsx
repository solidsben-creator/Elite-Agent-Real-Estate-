export const Icons = {
  equalHousing: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      role="img"
      aria-label="Equal housing opportunity"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
        <path d="M21 8.5l-9-6-9 6v11h18v-11zm-17 10v-9l8-5.33 8 5.33v9h-16zm5-8h2v6h-2v-6zm3 0h2v6h-2v-6zm3 0h2v6h-2v-6z" />
    </svg>
  ),
  mls: (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
      role="img"
      aria-label="Multiple listing service"
      viewBox="0 0 40 20" 
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <rect x="1" y="1" width="38" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="7" y="14" fontFamily="sans-serif" fontSize="10" fontWeight="bold">MLS</text>
    </svg>
  ),
};
