import { CustomListItem } from "./custom-list-item.js";

export class FeedListItem extends CustomListItem {
  set data(newValue) {
    this.innerText = newValue.name;

    this.dataset.item = newValue.name;
    this.dataset.address = newValue.address;
  }

  constructor() {
    super();
    this.classList.add("feed-list-item");
  }
}

customElements.define("feed-list-item", FeedListItem, { extends: "li" });
