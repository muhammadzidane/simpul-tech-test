import { useQuery } from "@tanstack/react-query";

import http from "@/plugins/axios/interceptor";

export const fetchPosts = async (limit = 10) => {
  const parsed = await http.get("https://jsonplaceholder.typicode.com/posts");
  return parsed.data;
};

export const usePosts = (limit: number) => {
  return useQuery({
    queryFn: async () => await fetchPosts(limit),
    queryKey: ["posts", limit],
  });
};
