export const getGifsFetch = async (category) => {
  const clave = "EMkLUTqDMhIksWGffC42PtHNNshPjgwj";
  const link = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=6&api_key=${clave}`;

  const response = await fetch(link);
  const body = await response.json();

  const newData = body?.data?.map((value) => ({
    id: value.id,
    url: value.images.downsized_medium.url,
    title: value.title,
  }));
  return newData;
};
