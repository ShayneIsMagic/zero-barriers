# Alternative Form Submission Solutions

## Current Problem

With Next.js static export (`output: 'export'`), `NEXT_PUBLIC_*` environment variables must be available **at build time** to be embedded in the JavaScript bundle. If the key is only in Cloudflare Pages environment variables, it may not be available during the build process.

---

## Solution Options

### Option 1: Cloudflare Pages Functions (RECOMMENDED) ✅

**Best solution** - Server-side processing with runtime environment variables.

#### How It Works
- Create a Cloudflare Pages Function (serverless function)
- Functions have access to environment variables **at runtime** (not build time)
- Form submits to the function endpoint
- Function sends email using a service like Resend, SendGrid, or directly via SMTP

#### Pros
- ✅ Secure (credentials never exposed to client)
- ✅ Environment variables available at runtime
- ✅ Works with static exports
- ✅ Free tier on Cloudflare
- ✅ Fast (runs on Cloudflare edge network)

#### Cons
- ⚠️ Requires creating a serverless function
- ⚠️ Need to set up email sending service

#### Implementation
Would require:
1. Create `functions/api/contact.ts` (Cloudflare Pages Function)
2. Use environment variable (not `NEXT_PUBLIC_*` - just regular env var)
3. Function sends email via email service API
4. Form submits to `/api/contact` endpoint

---

### Option 2: Use Resend API (Direct Client-Side)

**Simple** - Direct email API from client.

#### How It Works
- Form sends JSON to Resend API
- Uses Resend API key (can be public since it's scoped)
- Resend sends email to sk@zerobarriers.io

#### Pros
- ✅ Simple implementation
- ✅ No serverless function needed
- ✅ Resend has good free tier
- ✅ API keys can be scoped for security

#### Cons
- ⚠️ API key exposed in client code (though scoped)
- ⚠️ Same build-time env var issue (unless we use Resend's scoped keys differently)

---

### Option 3: Formspree (Alternative Form Service)

**Easy** - Different form service that might work better.

#### How It Works
- Similar to Web3Forms
- Form submits to Formspree endpoint
- Formspree sends email

#### Pros
- ✅ Simple setup
- ✅ Free tier available
- ✅ Similar to Web3Forms

#### Cons
- ⚠️ Same build-time env var issue as Web3Forms
- ⚠️ Requires switching services

---

### Option 4: Client-Side JSON to Email Service

**Direct** - Send JSON directly to email API.

#### Can We Send JSON Without Web3Forms?

**Yes**, but:

1. **Direct Email APIs** (Resend, SendGrid, Mailgun):
   - Require API keys
   - Keys exposed in client code = **NOT SECURE** ❌
   - Anyone can see your API key in the browser

2. **Using a Serverless Function**:
   - Secure ✅
   - Keys stay on server
   - Client sends JSON to function
   - Function uses API key to send email

3. **Plain JSON POST to Email**:
   - There's no "direct email JSON endpoint" without credentials
   - Email sending requires authentication
   - Either needs API key (client-side = insecure) or server-side function (secure)

#### Security Note
- ❌ **Never expose email API keys in client code**
- ✅ **Always use server-side functions for email sending**
- ✅ **Client can send JSON to your function, function handles email**

---

## Recommended Solution: Cloudflare Pages Function

### Why This Is Best

1. **Runtime Environment Variables**: Functions can access env vars at runtime
2. **Secure**: API keys never exposed to client
3. **Works with Static Export**: Functions run server-side, separate from static files
4. **Free**: Cloudflare Pages Functions have generous free tier

### Implementation Steps

1. Create function file: `functions/api/contact.ts`
2. Function receives form data
3. Function uses email service (Resend recommended - simple, good free tier)
4. Function sends email to sk@zerobarriers.io
5. Form submits JSON to `/api/contact`

### Example Structure

```typescript
// functions/api/contact.ts
export async function onRequestPost(context) {
  const { request, env } = context
  
  // env.RESEND_API_KEY is available at runtime (set in Cloudflare)
  const formData = await request.json()
  
  // Send email via Resend API
  // Return success/error response
}
```

---

## Comparison

| Solution | Security | Ease | Build-Time Env Var Needed? | Runtime Env Var Works? |
|----------|----------|------|----------------------------|------------------------|
| Web3Forms (current) | ✅ Good | ✅ Easy | ❌ Yes | ❌ No |
| Cloudflare Functions | ✅ Excellent | ⚠️ Medium | ❌ No | ✅ Yes |
| Resend (client-side) | ⚠️ Moderate | ✅ Easy | ❌ Yes | ❌ No |
| Formspree | ✅ Good | ✅ Easy | ❌ Yes | ❌ No |
| Direct Email API (client) | ❌ Poor | ✅ Easy | ❌ Yes | ❌ No |

---

## My Recommendation

**Use Cloudflare Pages Functions** because:
- ✅ Solves the build-time env var problem
- ✅ Most secure option
- ✅ Works perfectly with Cloudflare Pages
- ✅ Environment variables available at runtime
- ✅ No API keys exposed to client

Would you like me to implement the Cloudflare Pages Function solution?
