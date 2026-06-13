const INSTANCES = new Map();
const GRID_MEDIA = "(min-width: 112.5rem)";

export const projectsSlider = () => {
  document.querySelectorAll("[data-slider]").forEach((slider) => {
    if (INSTANCES.has(slider)) return;

    const track = slider.querySelector("[data-slider-track]");
    const prevBtn = slider.querySelector("[data-slider-prev]");
    const nextBtn = slider.querySelector("[data-slider-next]");
    const statusEl = slider
      .closest("section")
      ?.querySelector("[data-slider-status]");
    const gridMedia = window.matchMedia(GRID_MEDIA);

    if (!track || !prevBtn || !nextBtn) return;

    const slides = track.querySelectorAll("[data-slider-slide]");

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

    const isGridView = () => gridMedia.matches;

    const updateRegionLabel = () => {
      if (isGridView()) {
        slider.setAttribute("aria-label", "Projects");
        return;
      }

      slider.setAttribute(
        "aria-label",
        `Projects, slide ${currentIndex + 1} of ${slides.length}`,
      );
    };

    const updateStatus = () => {
      if (!statusEl || isGridView()) return;

      statusEl.textContent = `${currentIndex + 1} / ${slides.length}`;
    };

    const techLists = slider.querySelectorAll("[data-slide-techs]");

    const updateSlideVisibility = () => {
      if (isGridView()) {
        slides.forEach((slide) => {
          slide.removeAttribute("inert");
          slide.setAttribute("aria-hidden", "false");
        });

        techLists.forEach((list) => {
          list.removeAttribute("hidden");
          list.setAttribute("aria-hidden", "false");
        });

        return;
      }

      slides.forEach((slide, index) => {
        const isActive = index === currentIndex;

        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
        slide.toggleAttribute("inert", !isActive);
      });

      techLists.forEach((list, index) => {
        const isActive = index === currentIndex;

        list.toggleAttribute("hidden", !isActive);
        list.setAttribute("aria-hidden", isActive ? "false" : "true");
      });
    };

    const getStep = () => {
      const { columnGap, gap } = getComputedStyle(track);
      const gapPx = parseFloat(columnGap || gap) || 0;
      return slider.clientWidth + gapPx;
    };

    const updatePosition = () => {
      track.style.transform = isGridView()
        ? "none"
        : `translateX(-${currentIndex * getStep()}px)`;
    };

    const updateButtons = () => {
      if (isGridView()) {
        prevBtn.disabled = true;
        nextBtn.disabled = true;
        return;
      }

      const isFirst = currentIndex <= 0;
      const isLast = currentIndex >= slides.length - 1;

      prevBtn.disabled = isFirst;
      nextBtn.disabled = isLast;
    };

    const updateSlider = () => {
      updatePosition();
      updateButtons();
      updateSlideVisibility();
      updateRegionLabel();
      updateStatus();
    };

    const goTo = (index) => {
      if (isGridView()) return;

      currentIndex = Math.max(0, Math.min(index, slides.length - 1));
      updateSlider();
    };

    const handleKeydown = (event) => {
      if (isGridView()) return;

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

    const handleGridChange = () => {
      updateSlider();
    };

    prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
    nextBtn.addEventListener("click", () => goTo(currentIndex + 1));
    slider.addEventListener("keydown", handleKeydown);
    gridMedia.addEventListener("change", handleGridChange);

    new ResizeObserver(() => updatePosition()).observe(slider);

    updateSlider();

    INSTANCES.set(slider, {
      destroy: () => {
        slider.removeEventListener("keydown", handleKeydown);
        gridMedia.removeEventListener("change", handleGridChange);
        INSTANCES.delete(slider);
      },
    });
  });
};
