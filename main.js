function setupCSS() {
  const styles = document.createElement("style");
  styles.innerHTML = `
    .focusedElement {
        position: relative;
        background: red;
        mix-blend-mode: multiply;
    }
  `;
  document.head.append(styles);
}

function main() {
  setupCSS();
  const opts = { capture: true };

  document.addEventListener(
    "focusout",
    (evt) => {
      evt.target.classList.remove("focusedElement");
    },
    opts
  );
  document.addEventListener(
    "focusin",
    () => {
      document.activeElement.classList.add("focusedElement");
    },
    opts
  );
}

main();
