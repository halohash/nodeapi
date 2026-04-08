// index.js

async function fetchWorldOfText() {
  try {
    const response = await fetch("https://ourworldoftext.com/worldofhash?fetch=1");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text(); // or .json() if you expect JSON
    console.log("Response:\n", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchWorldOfText();
