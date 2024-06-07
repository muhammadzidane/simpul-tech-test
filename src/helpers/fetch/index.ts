export const customFetch = async <T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> => {
  const appId = process.env.NEXT_PUBLIC_DUMMY_API_APP_ID ?? "";
  const mainApi = process.env.NEXT_PUBLIC_DUMMY_API;
  const baseUrlApi = mainApi + url;

  const token = "your-auth-token"; // Dapatkan token dari context atau storage jika diperlukan

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    "app-id": appId,
  };

  const config: FetchOptions = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  const queryString = new URLSearchParams(options.params).toString();
  const baseUrlApiWithParams = options.params
    ? baseUrlApi + "?" + queryString
    : baseUrlApi;

  try {
    const response = await fetch(baseUrlApiWithParams, config);

    if (!response.ok) {
      const error: CustomFetchError = new Error(response.statusText);
      error.response = response;
      error.status = response.status;
      throw error;
    }

    return (await response.json()) as T;
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.error("Error:", error);
    throw error;
  }
};
