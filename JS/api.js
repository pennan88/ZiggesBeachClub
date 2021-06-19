"use strict";
const short_tok =
  "IGQVJVdFBBZA2xTOVFfVm0xMjIzOTY2UXhDNXZAQNGRwNGpXd0h3N0Nmamlna2tTLXl3UXNYeGQ5SGVLNzZAUWjdVVTNtUm9WT2RpYkJTNFZAMcGk0cjkxbVpVYjlRYi1FdzVwRi0tNXQ1cDlnRjFnQUZACTwZDZD";
const url = `https://v1.nocodeapi.com/pennan88/instagram/SwxgfVAgzdHEOWNd`;

const test = document.querySelector("#instafeedtest");

async function InstaAPI() {
  const url = `https://v1.nocodeapi.com/pennan88/instagram/SwxgfVAgzdHEOWNd`;

  const response = await fetch(url);
  let urlData = await response.json();

  return urlData;
}

InstaAPI().then(function ApiData(urlData) {
  const JsonArray = [];
  const StringJson = JSON.stringify(urlData);
  const ParseJson = JSON.parse(StringJson);
  JsonArray.push(ParseJson);

  for (let i = 0; i < 3; i++) {
    let RandomNum = Math.floor(Math.random() * JsonArray[0].data.length);

    console.log(urlData);
    FeedArray[i].Description.innerHTML = urlData.data[RandomNum].caption ?? "";
    FeedArray[i].background.style.background = `url(${
      urlData.data[RandomNum].thumbnail_url ?? urlData.data[RandomNum].media_url
    })`;
    FeedArray[i].background.style.backgroundPosition = "center";
    FeedArray[i].background.style.backgroundSize = "cover";
    FeedArray[i].background.style.backgroundRepeat = "no-repeat";
    FeedArray[i].feedurl.href = urlData.data[RandomNum].permalink;
    console.log(RandomNum);
  }
});
