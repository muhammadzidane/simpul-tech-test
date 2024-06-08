import { customFetch } from "@/helpers";

export const dashboardFetchTaskList = async (
  params: Record<string, string>
) => {
  try {
    const result: BaseResponseApi<DashboardTaskData[]> = await customFetch(
      "/post",
      {
        next: { revalidate: 30 },
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
        next: { revalidate: 30 },
        params,
      }
    );
    return result;
  } catch (error) {
    //
  }
};

export const dashboardFetchInboxDetail = async (id: string) => {
  try {
    const result: BaseResponseApi<DashboardInboxData[]> = await customFetch(
      `/post/${id}/comment`,
      {
        next: { revalidate: 30 },
      }
    );
    return result;
  } catch (error) {
    //
  }
};
