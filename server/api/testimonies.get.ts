export default defineEventHandler(async (event) => {
  try {
    const { data } = await fetch(process.env.STRAPI_URL + "/testimonies", {
      method: "GET",
      headers: {
        Authorization: `${process.env.STRAPI_TOKEN}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});
