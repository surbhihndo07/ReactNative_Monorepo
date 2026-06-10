import { get as apiGet, post as apiPost } from "./api";

export function getApiBaseUrl(): string {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.EXPO_PUBLIC_API_BASE_URL ||
    process.env.API_BASE_URL ||
    "https://jsonplaceholder.typicode.com";

  return baseUrl.replace(/\/+$/, "");
}

export function buildApiUrl(path: string): string {
  const baseUrl = getApiBaseUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}

async function postApi<T = any>(path: string, data?: any): Promise<T> {
  return apiPost<T>(buildApiUrl(path), data);
}

async function getApi<T = any>(path: string, params?: any): Promise<T> {
  return apiGet<T>(buildApiUrl(path), params);
}

export const apiService = {
  get: getApi,
  post: postApi,
  getApiBaseUrl,
  buildApiUrl,
};

export default apiService;
