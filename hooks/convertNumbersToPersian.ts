export const convertNumbersToPersian = () => {
    // Check if running in a browser (Next.js also runs on the server initially)
    if (typeof window === "undefined") return;
  
    // Mapping for Persian numerals
    const persian: { [key: string]: string } = {
      0: "۰",
      1: "۱",
      2: "۲",
      3: "۳",
      4: "۴",
      5: "۵",
      6: "۶",
      7: "۷",
      8: "۸",
      9: "۹",
    };
  
    // Traverse the DOM and replace numbers with Persian digits
    const traverse = (el: Node) => {
      if (el.nodeType === 3) { // Text nodes only
        const list = el.nodeValue?.match(/[0-9]/g);
        if (list) {
          list.forEach((num) => {
            el.nodeValue = el.nodeValue!.replace(num, persian[num]);
          });
        }
      } else {
        el.childNodes.forEach((child) => traverse(child));
      }
    };
  
    const convertNumbers = () => {
      traverse(document.body); // Replace numbers throughout the document body
    };
  
    // Initial conversion
    convertNumbers();
  
    // Observe changes in the DOM and apply conversion
    const observer = new MutationObserver(() => {
      convertNumbers();
    });
  
    // Observe mutations on the body for dynamic content
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  
    // Return a cleanup function to disconnect the observer if needed
    return () => {
      observer.disconnect();
    };
  };
  