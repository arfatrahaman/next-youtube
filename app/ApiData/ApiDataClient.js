const apiUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "827eb00ed9msh5a86f1c732828b8p17174djsn3d2fb52e996f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    // "X-RapidAPI-Key": "430dc15a18mshc1e407ac4ce41b1p16b3efjsn156649de6e83",
    // "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const ApiDataClient = async (url) => {
  const res = await fetch(`${apiUrl}/${url}`, options);
  if (!res.ok) {
    return <h2>Fetch Data Not Found</h2>;
  } else {
    return res.json();
  }
};

export default ApiDataClient;
