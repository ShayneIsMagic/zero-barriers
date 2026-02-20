# Fix TypeScript Error in basinie_website ContactForm

## Error
```
Type error: Type 'boolean | "" | undefined' is not assignable to type 'boolean | undefined'.
Type '""' is not assignable to type 'boolean | undefined'.
```

## Location
`components/ContactForm.tsx` line 372

## Problem
The expression `process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken` can return an empty string (`""`), but the `disabled` prop expects `boolean | undefined`.

## Solution

**Find this line (around line 372):**
```tsx
disabled={isSubmitting || (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)}
```

**Replace with:**
```tsx
disabled={isSubmitting || (!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)}
```

The `!!` (double negation) converts the environment variable check to a strict boolean, preventing the empty string type issue.

## Alternative Solution (More Explicit)

If you prefer more explicit code:

```tsx
disabled={isSubmitting || Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)}
```

Or even more explicit:

```tsx
disabled={
  isSubmitting || 
  (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ? !turnstileToken : false)
}
```

## Quick Fix
Just add `!!` before `process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY`:
- ❌ `(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)`
- ✅ `(!!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && !turnstileToken)`

This ensures the result is always a boolean, never an empty string.
