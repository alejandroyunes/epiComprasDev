import { s } from "@/components/Assets/Icons/SearchSvg"
import stylex from "@stylexjs/stylex"

export default function AdsSvg() {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6H6V11H18V6Z" {...stylex.props(s.svgStroke)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 16H18" {...stylex.props(s.svgStroke)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 2H20.5C21.3284 2 22 2.67157 22 3.5V20.5C22 21.3284 21.3284 22 20.5 22H3.5C2.67157 22 2 21.3284 2 20.5V3.5C2 2.67157 2.67157 2 3.5 2Z" {...stylex.props(s.svgStroke)} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}