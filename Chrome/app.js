
//Weather Embed code
(function(d, s, id) {
    if (d.getElementById(id)) {
        if (window.__TOMORROW__) {
            window.__TOMORROW__.renderWidget();
        }
        return;
    }
    const fjs = d.getElementsByTagName(s)[0];
    const js = d.createElement(s);
    js.id = id;
    js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";
    
    fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');
//Time embed code

setInterval(() => {
   
    var now = new Date();
    var datetime = now.toLocaleString();
    document.getElementById("datetime").innerHTML = datetime;   
    
    currentIndex++;
    
    if (currentIndex === 1)
     currentIndex = 0;
 
 }, 1000)