export const dialogHandler = () => {
  const dialog = document.getElementById("contact-modal");
  const trigger = document.querySelector<HTMLButtonElement>(
    '[aria-controls="contact-modal"]',
  );

  if (!(dialog instanceof HTMLDialogElement) || !trigger) return;

  const firstField = dialog.querySelector<HTMLInputElement>('input[name="name"]');
  const cancelBtn = dialog.querySelector<HTMLButtonElement>(
    "[data-contact-cancel]",
  );
  const form = dialog.querySelector("form");

  const setExpanded = (expanded: boolean) => {
    trigger.setAttribute("aria-expanded", String(expanded));
  };

  trigger.addEventListener("click", () => {
    dialog.showModal();
  });

  dialog.addEventListener("toggle", () => {
    if (dialog.open) {
      setExpanded(true);
      firstField?.focus();
    } else {
      setExpanded(false);
      trigger.focus();
    }
  });

  cancelBtn?.addEventListener("click", () => {
    dialog.close();
  });

  form?.addEventListener("submit", () => {
    dialog.close();
  });

  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();

    const isInDialog =
      rect.top <= event.clientY &&
      event.clientY <= rect.bottom &&
      rect.left <= event.clientX &&
      event.clientX <= rect.right;

    if (!isInDialog) {
      dialog.close();
    }
  });

  setExpanded(false);
};
