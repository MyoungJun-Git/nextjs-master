// src/shared/service/proxy.ts

export const callRealApi = async (request: Request, path: string) => {
    const apiBase = process.env.REAL_API_BASE_URL || 'https://your-real-api.com'
    const url = `${apiBase}${path}`
    const method = request.method
    const headers: Record<string, string> = {}
    request.headers.forEach((value, key) => {
        headers[key] = value
    })
    // body는 GET/HEAD가 아닐 때만 전달
    const body = method === 'GET' || method === 'HEAD' ? undefined : await request.text()

    const apiRes = await fetch(url, {
        method,
        headers,
        body
    })

    const data = await apiRes.json()
    return { data, status: apiRes.status }
}

export default { callRealApi }
