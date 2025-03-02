export default async function cartoons(img) {
  try {
    for (let element of Object.keys(img)) {
      let fetchData = await fetch(
        `https://api.pexels.com/v1/search?query=${element.toLowerCase()}`,
        {
          headers: {
            Authorization:
              "cVXQcrGSG1LR3lOWrZcrOcJC6Hr6hwRfhL9wYw2fsEVOprEGT4rZw7N9",
          },
        }
      );

      if (!fetchData.ok) {
        console.log(`Response status: ${fetchData.status}`);
        continue;
      }

      let result = await fetchData.json();
      if (result.photos.length === 0) continue;
      img[element] = result.photos[0].src.original;
    }
  } catch (err) {
    console.error("Error fetching images:", err);
  }
  return img;
}
