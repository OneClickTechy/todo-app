const fetchData = async (url = "", options = null, errMsg = null) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error("⚠️ Unable to fetch data, Try to reload the page");
    const data = response.ok && response.json();
  } catch (error) {
    errMsg = error.message;
  } finally {
    return errMsg;
  }
};

export default fetchData;
