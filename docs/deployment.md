# Deployment Guide

## Overview

This document provides instructions for deploying the Zero Barriers website.

## Deployment Platforms

### Cloudflare Pages

The site is configured for Cloudflare Pages deployment.

## Build Process

1. Install dependencies: `npm install`
2. Optimize images: `npm run optimize-images`
3. Build project: `npm run build`

## Deployment Steps

1. Push to repository
2. Cloudflare Pages will automatically build and deploy
3. Monitor deployment in Cloudflare dashboard

## Environment Variables

Required environment variables are configured in the deployment platform.

## Post-Deployment

- Verify all pages load correctly
- Check image optimization
- Test all forms and interactions
- Monitor analytics

