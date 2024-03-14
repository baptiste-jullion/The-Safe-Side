export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const { apiToken, apiUri } = useRuntimeConfig();

  return await fetch(
    `${apiUri}/testimonies?populate=*&filters[Vertical][$eq]=${query.vertical}`,
    {
      method: "GET",
      headers: {
        Authorization: `${apiToken}`,
      },
    },
  );
});
