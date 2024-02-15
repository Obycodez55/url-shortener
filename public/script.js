$("button").click(()=> { 
    const text = $("#short_link").text();
    navigator.clipboard.writeText(text);
    alert("Copied the text: " + text);
});