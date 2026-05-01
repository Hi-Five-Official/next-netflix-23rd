import { API_KEY, BASE_URL } from "@/constants/tmdb";

const defaultHeaders: HeadersInit = {
  Authorization: `Bearer ${API_KEY}`,
  accept: "application/json",
};

export const tmdbClient = async <T>(path: string, options?: RequestInit): Promise<T> => {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      next: { revalidate: 3600 },
      ...options,
      headers: {
        ...defaultHeaders,
        ...options?.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`TMDB API error: ${res.status} ${res.statusText}`);
    }

    return res.json() as Promise<T>;
  } catch (error) {
    console.error(`[tmdbClient] ${path}`, error);
    throw error;
  }
};
