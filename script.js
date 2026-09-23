/**
 * MUHAMMAD CP - PERSONAL WEBSITE INTERACTIVITY
 * Features:
 * - Theme Switcher with LocalStorage & OS color-scheme auto-detection
 * - Dynamic Icon Morphing & Accessibility attributes
 * - One-click Copy Phone Number with visual confirmation
 */

// Phone number constant
const PHONE_NUMBER = "+91 9562303634";
const RAW_PHONE = "9562303634";

/**
 * Applies the selected theme ('dark' or 'light')
 * @param {string} theme 
 */
function applyTheme(theme) {
  const body = document.body;
  const themeIcon = document.getElementById("themeIcon");
  const themeToggle = document.getElementById("themeToggle");

  if (theme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    if (themeIcon) {
      themeIcon.className = "fa-solid fa-moon";
    }
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", "Switch to Dark Mode");
      themeToggle.setAttribute("title", "Switch to Dark Mode");
    }
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    if (themeIcon) {
      themeIcon.className = "fa-solid fa-sun";
    }
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", "Switch to Light Mode");
      themeToggle.setAttribute("title", "Switch to Light Mode");
    }
  }
}

/**
 * Toggles between Dark and Light mode
 */
function toggleTheme() {
  const isLight = document.body.classList.contains("light-theme");
  const newTheme = isLight ? "dark" : "light";
  
  applyTheme(newTheme);
  try {
    localStorage.setItem("theme", newTheme);
  } catch (e) {
    console.warn("LocalStorage access failed: ", e);
  }
}

/**
 * Copy phone number to clipboard with visual feedback
 */
function copyNumber() {
  const alertBox = document.getElementById("copyAlert");
  const copyBtn = document.getElementById("copyBtn");
  const copyIcon = document.getElementById("copyIcon");
  const originalText = copyBtn ? copyBtn.querySelector(".btn-text") : null;

  // Modern Clipboard API with fallback
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(RAW_PHONE)
      .then(showCopySuccess)
      .catch(() => fallbackCopyTextToClipboard(RAW_PHONE));
  } else {
    fallbackCopyTextToClipboard(RAW_PHONE);
  }

  function showCopySuccess() {
    if (alertBox) {
      alertBox.textContent = "Copied to clipboard: " + RAW_PHONE;
      alertBox.classList.add("show");
    }

    if (copyBtn) {
      copyBtn.classList.add("copied");
    }

    if (copyIcon) {
      copyIcon.className = "fa-solid fa-check";
    }

    setTimeout(() => {
      if (alertBox) {
        alertBox.classList.remove("show");
      }
      if (copyBtn) {
        copyBtn.classList.remove("copied");
      }
      if (copyIcon) {
        copyIcon.className = "fa-regular fa-copy";
      }
    }, 2800);
  }

  function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.top = "-9999px";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        showCopySuccess();
      } else {
        alert("Phone number: " + RAW_PHONE);
      }
    } catch (err) {
      alert("Phone number: " + RAW_PHONE);
    }
    document.body.removeChild(textArea);
  }
}

/**
 * Handle image loading failure gracefully by displaying styled SVG avatar
 */
function handleImageError(img) {
  img.style.display = "none";
  const parent = img.parentElement;
  if (parent) {
    const fallback = document.createElement("div");
    fallback.className = "avatar-fallback";
    fallback.innerHTML = '<i class="fa-solid fa-user-tie"></i>';
    parent.appendChild(fallback);
  }
}

// Initialize theme on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  let initialTheme = "dark";

  try {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      initialTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      initialTheme = "light";
    }
  } catch (e) {
    console.warn("Could not retrieve saved theme preference: ", e);
  }

  applyTheme(initialTheme);

  // Listen for system theme changes if user hasn't explicitly set preference
  if (window.matchMedia) {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      try {
        if (!localStorage.getItem("theme")) {
          applyTheme(e.matches ? "dark" : "light");
        }
      } catch (err) {}
    });
  }
});
