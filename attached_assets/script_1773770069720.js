const translations = window.siteTranslations || {};
const languageConfig = window.siteLanguageConfig || {};
const page = document.body?.dataset?.page || "home";

const metaDescription = document.querySelector('meta[name="description"]');
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const langSwitcher = document.querySelector(".lang-switcher");
const langTrigger = document.querySelector(".lang-trigger");
const langMenu = document.querySelector(".lang-menu");
const langTriggerText = document.querySelector(".lang-trigger-text");
const langTriggerCode = document.querySelector(".lang-trigger-code");
const langButtons = Array.from(document.querySelectorAll(".lang-button"));
const revealElements = Array.from(document.querySelectorAll(".reveal"));
const counters = Array.from(document.querySelectorAll(".counter"));

const getPath = (source, path) =>
  path.split(".").reduce((value, key) => (value == null ? undefined : value[key]), source);

const applyText = (copy) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getPath(copy, element.dataset.i18n);
    if (value !== undefined) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = getPath(copy, element.dataset.i18nHtml);
    if (value !== undefined) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const definitions = element.dataset.i18nAttr.split(";");
    definitions.forEach((definition) => {
      const [attribute, path] = definition.split(":");
      if (!attribute || !path) {
        return;
      }

      const value = getPath(copy, path.trim());
      if (value !== undefined) {
        element.setAttribute(attribute.trim(), value);
      }
    });
  });
};

const applyMeta = (copy) => {
  const meta = copy?.meta?.[page];
  if (!meta) {
    return;
  }

  if (meta.title) {
    document.title = meta.title;
  }

  if (metaDescription && meta.description) {
    metaDescription.setAttribute("content", meta.description);
  }
};

const updateLanguageTrigger = (lang) => {
  const config = languageConfig[lang];
  if (!config) {
    return;
  }

  if (langTriggerText) {
    langTriggerText.textContent = config.label;
  }

  if (langTriggerCode) {
    langTriggerCode.textContent = config.code;
  }

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const applyTranslations = (lang) => {
  const copy = translations[lang] || translations.ar;
  const config = languageConfig[lang] || languageConfig.ar || { dir: "rtl" };

  document.documentElement.lang = lang;
  document.documentElement.dir = config.dir;

  applyMeta(copy);
  applyText(copy);
  updateLanguageTrigger(lang);

  try {
    localStorage.setItem("site-language", lang);
  } catch {}
};

const closeLanguageMenu = () => {
  if (!langTrigger || !langMenu) {
    return;
  }

  langTrigger.setAttribute("aria-expanded", "false");
  langMenu.classList.remove("is-open");
};

const openLanguageMenu = () => {
  if (!langTrigger || !langMenu) {
    return;
  }

  langTrigger.setAttribute("aria-expanded", "true");
  langMenu.classList.add("is-open");
};

const updateHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    siteNav.classList.toggle("is-open", !isOpen);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    });
  });
}

if (langTrigger && langMenu && langSwitcher) {
  langTrigger.addEventListener("click", () => {
    const isOpen = langTrigger.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeLanguageMenu();
    } else {
      openLanguageMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!langSwitcher.contains(event.target)) {
      closeLanguageMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLanguageMenu();
    }
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyTranslations(button.dataset.lang);
    closeLanguageMenu();
  });
});

revealElements.forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 320)}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const counter = entry.target;
        const target = Number(counter.dataset.target || 0);
        const prefix = counter.dataset.prefix || "";
        const suffix = counter.dataset.suffix || "";
        const duration = 1400;
        const startTime = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const value = Math.floor(progress * target);
          counter.textContent = `${prefix}${value}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            counter.textContent = `${prefix}${target}${suffix}`;
          }
        };

        requestAnimationFrame(tick);
        observer.unobserve(counter);
      });
    },
    { threshold: 0.45 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
  counters.forEach((counter) => {
    const prefix = counter.dataset.prefix || "";
    const suffix = counter.dataset.suffix || "";
    counter.textContent = `${prefix}${counter.dataset.target || 0}${suffix}`;
  });
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

const initialLanguage = (() => {
  try {
    const stored = localStorage.getItem("site-language");
    if (stored && translations[stored]) {
      return stored;
    }
  } catch {}

  return document.documentElement.lang || "ar";
})();

applyTranslations(initialLanguage);
