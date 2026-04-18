type Props = {
  className?: string;
  size?: number;
};

export function TiffinLogo({ className, size = 44 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="6" y="6" width="36" height="36" rx="11" fill="#E87722" />
      <path
        d="M18 9h12a2 2 0 0 1 0 4H18a2 2 0 0 1 0-4Z"
        fill="#1F1A17"
      />
      <rect x="12" y="13.5" width="24" height="8.5" rx="2.2" fill="#FDF4E3" stroke="#B8431E" strokeWidth="1.2"/>
      <rect x="12" y="23" width="24" height="8.5" rx="2.2" fill="#FDF4E3" stroke="#B8431E" strokeWidth="1.2"/>
      <rect x="12" y="32.5" width="24" height="8.5" rx="2.2" fill="#FDF4E3" stroke="#B8431E" strokeWidth="1.2"/>
      <circle cx="17.5" cy="17.75" r="1.4" fill="#2E5D3A"/>
      <circle cx="24" cy="17.75" r="1.4" fill="#F2A81D"/>
      <circle cx="30.5" cy="17.75" r="1.4" fill="#B8431E"/>
      <path d="M14 27.2 L 34 27.2" stroke="#E87722" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
      <path d="M14 36.7 L 34 36.7" stroke="#E87722" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="2 2"/>
    </svg>
  );
}
