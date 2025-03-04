async function fetchInspiration() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      
      document.getElementById('quote').innerText = `"${data.content}"`;
      document.getElementById('author').innerText = `- ${data.author}`;
    } catch (error) {
      document.getElementById('quote').innerText = "Could not load inspiration.";
      console.error("Error fetching quote:", error);
    }
  }
  
  // Load a quote on page load
  fetchInspiration();
  