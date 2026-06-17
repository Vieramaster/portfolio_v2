import type { WithIcon } from "@/shared/components/icons/types";

export interface LetsTalkItem extends WithIcon {
  type?: "status" | "link";
  iconClass: string;
  content: string;
  textClass?: string;
  href?: string;
  download?: string;
}

interface HiddenInputField {
  type: "hidden";
  name: string;
  value: string;
}

interface HoneypotField {
  type: "text";
  name: string;
  autocomplete: "off";
  hidden: true;
}

export type HiddenFormField = HiddenInputField | HoneypotField;

interface InputFormField {
  label: string;
  component: "input";
  type: "text" | "email";
  name: string;
  placeholder: string;
  autocomplete: string;
}

interface TextareaFormField {
  label: string;
  component: "textarea";
  name: string;
  placeholder: string;
  rows?: number;
}

export type FormField = InputFormField | TextareaFormField;
