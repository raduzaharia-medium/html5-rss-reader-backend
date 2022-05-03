import { CustomListItem } from "./custom-list-item.js";

export class ArticleListItem extends CustomListItem {
  set data(newValue) {
    this.dataset.item = newValue.title;
    this.dataset.summary = newValue.summary;

    this.querySelector("section").innerText = newValue.summary;
    this.querySelector("span").innerText = newValue.title;
  }

  constructor() {
    super();
    this.classList.add("article-list-item");

    this.innerHTML = `<details>
      <summary>
        <span></span>
      </summary>
      <section></section>
    </details>`;
  }
}

customElements.define("article-list-item", ArticleListItem, { extends: "li" });
