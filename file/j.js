window.addEventListener("load", function () {
  const iframes = document.querySelectorAll("iframe");
  iframes.forEach((iframe) => {
    iframe.addEventListener("load", function () {
      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const iframeHeight = iframeDoc.body.scrollHeight;
        iframe.style.height = iframeHeight + "px";
      } catch (e) {
        console.warn("Tidak bisa mengakses isi iframe karena beda origin.");
      }
    });
  });
});
