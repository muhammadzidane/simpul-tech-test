import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  iconHeight?: number;
  iconWidth?: number;
  label?: string;
  icon?: string;
}
