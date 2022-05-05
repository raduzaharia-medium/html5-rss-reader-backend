import { CustomList } from "../shared/components/custom-list.js";
import { FeedListItem } from "../shared/components/feed-list-item.js";
import { ArticleListItem } from "../shared/components/article-list-item.js";

document.getElementById("feeds").setItems([
  { name: "The Verge", address: "https://www.theverge.com/rss/index.xml" },
  { name: "Ars Technica", address: "https://feeds.arstechnica.com/arstechnica/features" },
  { name: "Hacker News", address: "https://news.ycombinator.com/rss" },
]);

document.getElementById("articles").setItems([
  { title: "Article1", summary: "Something" },
  { title: "Article2", summary: "Another thing" },
  { title: "Article3", summary: "Whatever" },
  { title: "Article4", summary: "Yet another one" },
]);

document.getElementById("feedFilter").addEventListener("input", (e) => {
  document.getElementById("feeds").filter(e.target.value);
});

document.getElementById("feeds").addEventListener("click", (e) => {
  document.body.classList.add("feed-selected");

  const selection = document.querySelector("#feeds li.selected");
  if (selection) selection.classList.remove("selected");

  e.target.closest("li").classList.add("selected");
});

document.getElementById("articles").addEventListener("click", (e) => {
  const selection = document.querySelector("#articles li.selected");
  if (selection) selection.classList.remove("selected");

  e.target.closest("li").classList.add("selected");
});

document.querySelector(".back").addEventListener("click", () => {
  document.body.classList.remove("feed-selected");
});
