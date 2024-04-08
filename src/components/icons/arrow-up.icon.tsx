import { IconProps } from "@/types/common.type";

const ArrowUpIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 40 40"
      className={className}
    >
      <path fill="currentColor" d="M4.659 28.167h30.682L20 7.833z" />
    </svg>
  );
};

export default ArrowUpIcon;
