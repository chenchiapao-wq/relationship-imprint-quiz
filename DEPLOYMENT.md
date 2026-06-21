# Zeabur Deployment

This site is ready to deploy on Zeabur as a Dockerfile-based static React/Vite app.

## Local checks

```bash
pnpm test
pnpm build
```

## Zeabur settings

- Source: GitHub repository
- Build mode: Dockerfile
- Dockerfile path: `/Dockerfile`
- Exposed HTTP port: `80`

## Update flow

After editing site content, rebuild and test locally, then push to the connected GitHub repository. Zeabur should redeploy automatically from the pushed commit.
