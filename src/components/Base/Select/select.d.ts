interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  onChange?: (value: string) => void;
  selectClassName?: string;
  options: SelectOption[];
  placeholder?: string;
}
