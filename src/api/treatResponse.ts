export const ParseResponse = async (response: any) => {
  try {
    const { status } = await response;

    const data = await response.json();

    return { statusCode: status, data };
  } catch (error) {
    console.error(error);
  }
};
