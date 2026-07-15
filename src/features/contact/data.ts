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

export const FORM_CONFIG = [
  {
    name: "_subject",
    value: "New message from martinviera.dev",
  },
  {
    name: "_next",
    value: "https://martinviera.dev/thanks",
  },
  {
    name: "_captcha",
    value: "true",
  },
  {
    name: "_template",
    value: "table",
  },
];