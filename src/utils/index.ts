function downloadSurvey(url: string) {
  const anchor = document.createElement("a");
  anchor.style.display = "none";
  document.body.appendChild(anchor);

  anchor.href = url;

  anchor.download = "MozDevz Survey 1st Edition";

  anchor.click();

  document.body.removeChild(anchor);
}

export { downloadSurvey };
