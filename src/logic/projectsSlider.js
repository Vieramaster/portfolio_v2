const INSTANCES = new Map();

export const projectsSlider = () => {
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    if (INSTANCES.has(slider)) return;

    const track = slider.querySelector("[data-slider-track]");
    const prevBtn = slider.querySelector("[data-slider-prev]");
    const nextBtn = slider.querySelector("[data-slider-next]");
    const statusEl = slider
      .closest("section")
      ?.querySelector("[data-slider-status]");

    if (!track || !prevBtn || !nextBtn) return;

    const slides = track.querySelectorAll("article");

    if (!slides.length) {
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }

    slider.classList.add("js-initialized");

    slides.forEach((slide) => {
      slide.removeAttribute("hidden");
    });

    let currentIndex = 0;

    const updateRegionLabel = () => {
      slider.setAttribute(
        "aria-label",
        `Projects, slide ${currentIndex + 1} of ${slides.length}`,
      );
    };

    const updateStatus = () => {
      if (statusEl) {
        statusEl.textContent = `${currentIndex + 1} / ${slides.length}`;
      }
    };

    const updateSlideVisibility = () => {
      slides.forEach((slide, index) => {
        const isActive = index === currentIndex;

        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
        slide.toggleAttribute("inert", !isActive);
      });
    };

    const getStep = () => {
      const { columnGap, gap } = getComputedStyle(track);
      const gapPx = parseFloat(columnGap || gap) || 0;
      return slider.clientWidth + gapPx;
    };

    const updatePosition = () => {
      track.style.transform = `translateX(-${currentIndex * getStep()}px)`;
    };

    const updateButtons = () => {
      const isFirst = currentIndex <= 0;
      const isLast = currentIndex >= slides.length - 1;

      prevBtn.disabled = isFirst;
      nextBtn.disabled = isLast;
    };

    const goTo = (index) => {
      currentIndex = Math.max(0, Math.min(index, slides.length - 1));
      updatePosition();
      updateButtons();
      updateSlideVisibility();
      updateRegionLabel();
      updateStatus();
    };

    const handleKeydown = (event) => {
      if (event.key === "ArrowLeft" && currentIndex > 0) {
        event.preventDefault();
        goTo(currentIndex - 1);
        return;
      }

      if (event.key === "ArrowRight" && currentIndex < slides.length - 1) {
        event.preventDefault();
        goTo(currentIndex + 1);
        return;
      }

      if (event.key === "Home") {
        event.preventDefault();
        goTo(0);
        return;
      }

      if (event.key === "End") {
        event.preventDefault();
        goTo(slides.length - 1);
      }
    };

    prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
    nextBtn.addEventListener("click", () => goTo(currentIndex + 1));
    slider.addEventListener("keydown", handleKeydown);

    new ResizeObserver(() => updatePosition()).observe(slider);

    updatePosition();
    updateButtons();
    updateSlideVisibility();
    updateRegionLabel();
    updateStatus();

    INSTANCES.set(slider, {
      destroy: () => {
        slider.removeEventListener("keydown", handleKeydown);
        INSTANCES.delete(slider);
      },
    });
  });
};
