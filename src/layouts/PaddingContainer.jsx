import { twMerge } from "tailwind-merge"

const PaddingContainer = ({children, className}) => {
  return (
    <div className={`${twMerge('px-8 mx-auto max-w-7xl',className)}`}>{children}</div>
  )
}

export default PaddingContainer