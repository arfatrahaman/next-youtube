const apiUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const ApiData = async (url) => {
  const res = await fetch(`${apiUrl}/${url}`, options);
  if (!res.ok) {
    return <h2>Fetch Data Not Found</h2>;
  } else {
    return res.json();
  }
};

export default ApiData;
