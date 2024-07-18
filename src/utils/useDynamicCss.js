import { useEffect } from "react";

const useDynamicCSSImport = (urlToCssMap) => {
  useEffect(() => {
    // Get the current URL
    const currentURL = window.location.href;
    console.log(currentURL);

    // Get the corresponding CSS file based on the URL
    const cssFile = urlToCssMap[currentURL] || "default.css"; // Default CSS if no match found

    // Dynamically import the CSS file from the local folder
    import(`../styles/${cssFile}`)
      .then(() => {
        console.log(`${cssFile} imported successfully`);
      })
      .catch((error) => {
        console.error("Error importing CSS file:", error);
      });
  }, [urlToCssMap]); // Re-run effect if urlToCssMap changes
};

export default useDynamicCSSImport;
