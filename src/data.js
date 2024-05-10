export const getProducts = async () => {
    const url = "";
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${token}`,
      },
    });
  
    const response = await resp.json();
    return response;
  };