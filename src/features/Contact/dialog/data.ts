import type { FormField, HiddenFormField } from "../types";

export const FORM_FIELDS = [
    {
        label: "Name",
        component: "input",
        type: "text",
        name: "name",
        placeholder: "Your name",
        autocomplete: "name",
    },
    {
        label: "Email",
        component: "input",
        type: "email",
        name: "email",
        placeholder: "you@example.com",
        autocomplete: "email",
    },
    {
        label: "Message",
        component: "textarea",
        name: "message",
        placeholder: "Write your message...",
        rows: 5,
    },
] satisfies FormField[];





export const HIDDEN_FORM_FIELDS = [
    { type: "hidden", name: "_subject", value: "new message" },
    { type: "hidden", name: "_redirect", value: "/thanks" },
    { type: "text", name: "_gotcha", autocomplete: "off", hidden: true },
] satisfies HiddenFormField[];
