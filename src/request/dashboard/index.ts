import { customFetch } from "@/helpers";

export const dashboardFetchTaskList = async (
  params: Record<string, string>
) => {
  try {
    const result: BaseResponseApi<DashboardTaskData[]> = await customFetch(
      "/post",
      {
        next: { revalidate: 60 },
        params,
      }
    );
    return result;
  } catch (error) {
    //
  }
};

export const dashboardFetchInboxList = async (
  params: Record<string, string>
) => {
  try {
    const result: BaseResponseApi<DashboardInboxData[]> = await customFetch(
      "/comment",
      {
        next: { revalidate: 60 },
        params,
      }
    );
    return result;
  } catch (error) {
    //
  }
};
