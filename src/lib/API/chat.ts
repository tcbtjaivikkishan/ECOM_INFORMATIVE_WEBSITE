const API_BASE_URL = "https://zoho-ai-backend.onrender.com";

export const apiFetch = async (
  url: string,
  options: RequestInit = {},
  token?: string
) => {
  const res = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw error;
  }

  return res.json();
};
