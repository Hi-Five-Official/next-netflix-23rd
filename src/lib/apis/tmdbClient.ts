import { API_KEY, BASE_URL } from "@/constants/tmdb";

const defaultHeaders: HeadersInit = {
  Authorization: `Bearer ${API_KEY}`,
  accept: "application/json",
};

export const tmdbClient = async <T>(path: string, revalidate = 3600): Promise<T> => {
  try {
    const res = await fetch(`${BASE_URL}${path}`, {
      next: { revalidate },
      headers: defaultHeaders,
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
