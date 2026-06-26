export interface FormField {
  type: "text" | "email" | "textarea";
  name: string;
  label: string;
  placeholder?: string;
  autocomplete?: string;
  rows?: number;
}
