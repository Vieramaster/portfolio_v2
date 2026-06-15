export const dialogHandler = () => {

    const dialog = document.getElementById("contact-modal")

    if (dialog instanceof HTMLDialogElement) {
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
    }

}