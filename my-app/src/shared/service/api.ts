// src/shared/service/api.ts
export const getApi = async <T>(url: string, init?: RequestInit): Promise<any> => {
  let finalUrl = url
  if (typeof window === 'undefined' && url.startsWith('/')) {
    // next/headers는 서버 환경에서만 사용
    const { headers } = await import('next/headers')
    const host = (await headers()).get('host')
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
    finalUrl = `${protocol}://${host}${url}`
  }

  const res = await fetch(finalUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {})
    },
    cache: 'no-store',
    ...init
  })
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`)
  }
  return (await res.json()) as T
}
export const postApi = async <T>(url: string, body?: any, init?: RequestInit): Promise<any> => {
  let finalUrl = url
  if (typeof window === 'undefined' && url.startsWith('/')) {
    // next/headers는 서버 환경에서만 사용
    const { headers } = await import('next/headers')
    const host = (await headers()).get('host')
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
    finalUrl = `${protocol}://${host}${url}`
  }
  const res = await fetch(finalUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {})
    },
    body: body ? JSON.stringify(body) : undefined,
    cache: 'no-store',
    ...init
  })
  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`)
  }
  return (await res.json()) as T
}

export default { getApi, postApi }
