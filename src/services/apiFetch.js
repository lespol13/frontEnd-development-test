export const handleApiFetch = async (url, config) => {
  try {
    const responseFetch = await fetch(url, { ...config });
    const json = await responseFetch.json();
    return json;
  } catch (error) {
    return error;
  }
};
