// import { useQuery } from "@tanstack/react-query";

import http from "@/plugins/axios/interceptor";

export const dashboardFetchInboxList = async (params: Params) => {
  const parsed = await http.get("/user", {
    params,
  });
  return parsed.data;
};

// export const usePosts = (limit: number) => {
//   return useQuery({
//     queryFn: async () => await fetchPosts(limit),
//     queryKey: ["posts", limit],
//   });
// };
