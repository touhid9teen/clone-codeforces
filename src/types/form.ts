export type FormFieldType = {
  name: string;
  type?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  selectOptions?: { label: string; value: string }[];
  defaultValue?: string;
  placeholder?: string;
  hideSelectClearButton?: boolean;
};
