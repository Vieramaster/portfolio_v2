import type { WithIcon } from "@/shared/types/with-icon";

export interface LetsTalkItem extends WithIcon {
  type?: "status" | "link";
  iconClass: string;
  content: string;
  textClass?: string;
  href?: string;
  download?: string;
}

export interface TextArea {
  type: "textarea";
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
};

export interface TextAndMail {
  type: "text" | "email";
  name: string;
  label: string;
  placeholder?: string;
  autocomplete?: string;
}

export type FormField = TextArea | TextAndMail

interface BaseField {
  name: string;
}

interface HiddenField extends BaseField {
  type: "hidden";
  value: string;
}

interface HoneypotField extends BaseField {
  type: "text";
  autocomplete: "off";
  hidden: true;
}

export type HiddenFormField = HiddenField | HoneypotField;