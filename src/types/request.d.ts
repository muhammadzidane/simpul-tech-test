interface Params {
  limit?: string;
  page?: string;
}

interface BaseResponseApi<T> {
  total: number;
  limit: number;
  page: number;
  data: T;
}
