export type ApiClientOptions = {
  baseUrl?: string
  headers?: Record<string, string>
}

export class ApiClient {
  constructor(private options: ApiClientOptions = {}) {}

  async get<T>(path: string) {
    return this.request<T>(path, { method: 'GET' })
  }

  async post<T>(path: string, body: unknown) {
    return this.request<T>(path, { method: 'POST', body: JSON.stringify(body) })
  }

  private async request<T>(path: string, init: RequestInit) {
    const base = this.options.baseUrl || process.env.NEXT_PUBLIC_API_BASE_URL || ''
    const res = await fetch(`${base}${path}`, {
      ...init,
      headers: {
        'content-type': 'application/json',
        ...(this.options.headers || {})
      }
    })
    if (!res.ok) throw new Error(`API ${res.status}`)
    return (await res.json()) as T
  }
}