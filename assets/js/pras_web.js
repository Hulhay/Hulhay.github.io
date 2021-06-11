function readMore(nomer_idx) {
  let dots = document.querySelector(`.summary[idx="${nomer_idx}"] .dots`);
  let moreText = document.querySelector(`.summary[idx="${nomer_idx}"] .more`);
  let btnText = document.querySelector(`.summary[idx="${nomer_idx}"] .myBtn`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.textContent = "Lebih banyak";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.textContent = "Lebih sedikit";
    moreText.style.display = "inline";
  }
}