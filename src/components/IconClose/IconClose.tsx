interface IconProps {
  width?: number;
  height?: number;
  classname?: string;
}

export default function IconClose({ width, height, classname }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="35" height="35" rx="7.5" fill="white" />
      <rect
        x="0.5"
        y="0.5"
        width="35"
        height="35"
        rx="7.5"
        stroke="#E2E8F0"
        stroke-linecap="round"
      />
      <path
        d="M22.669 13.3334L13.3357 22.6667M13.3357 13.3334L22.669 22.6667"
        stroke="black"
        stroke-width="1.14286"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
