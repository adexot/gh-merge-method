import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://github.com/*"]
}

const MERGE_METHODS = {
  merge: 'merge',
  rebase: 'rebase',
  squash: 'squash'
}

// this solves my specific need
const EXCEPTIONS = [
  MERGE_METHODS.merge,
  MERGE_METHODS.rebase,
];

window.addEventListener('click', () => {
  const mergeMenu = document.querySelectorAll('.js-merge-method-menu .select-menu-item');

  if (mergeMenu) {
    console.log({ mergeMenu })

    mergeMenu.forEach(menu => {
      if (EXCEPTIONS.includes(menu.getAttribute('value'))) {
        menu.setAttribute('disabled', '')
        menu.setAttribute('aria-checked', 'false')
      }
    })
  }
});
