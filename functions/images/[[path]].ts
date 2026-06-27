import {
  isAllowedImageRequest,
  isProtectedImagePath,
  PROTECTION_HEADERS,
} from '../_shared/image-guard'

interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
}

export async function onRequest(context: { request: Request; env: Env }) {
  const { pathname } = new URL(context.request.url)

  if (!isProtectedImagePath(pathname)) {
    return context.env.ASSETS.fetch(context.request)
  }

  if (!isAllowedImageRequest(context.request)) {
    return new Response('Forbidden', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
        ...PROTECTION_HEADERS,
      },
    })
  }

  const assetResponse = await context.env.ASSETS.fetch(context.request)
  if (!assetResponse.ok) {
    return assetResponse
  }

  const headers = new Headers(assetResponse.headers)
  for (const [key, value] of Object.entries(PROTECTION_HEADERS)) {
    headers.set(key, value)
  }

  return new Response(assetResponse.body, {
    status: assetResponse.status,
    headers,
  })
}
