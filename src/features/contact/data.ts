import type { FormField } from "./types";

export const FORM_FIELDS = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Your name",
    autocomplete: "name",
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "you@example.com",
    autocomplete: "email",
  },
  {
    type: "textarea",
    name: "message",
    label: "Message",
    placeholder: "Write your message...",
    rows: 5,
  },
] satisfies FormField[];
