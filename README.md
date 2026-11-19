# Create App Factory App

The canonical Next.js demo and starting point for App Factory SDK projects. The App Router home page uses Tailwind CSS and strict TypeScript. With a backend configured, it displays the current session through the SDK's React provider and proxies authentication through the SDK's Next.js adapter.

## Start a project

Choose **Use this template** on GitHub, or scaffold a local project with:

```sh
npx create-next-app@latest my-app --example https://github.com/desduvauchelle/create-app-factory-app --skip-install
cd my-app
npm run setup:sdk
npm ci
npm run dev
```

Open http://localhost:3000. Use Node.js 24 and npm. SDK setup requires GitHub CLI signed in with read access to the private desduvauchelle/app-factory-sdk repository. Run setup before installing dependencies on each fresh checkout, including in CI. The lockfile verifies the downloaded package contents.

## Connect your backend

Copy .env.example to .env.local. Set NEXT_PUBLIC_CONVEX_URL to your app's Convex deployment URL and NEXT_PUBLIC_CONVEX_SITE_URL to its HTTP actions URL. Restart Next.js. Use a deployment configured with the Convex Better Auth component and auth HTTP routes for your app's origin. The starter displays signed-out and signed-in states for that backend. Add your app's sign-in UI and domain queries as needed.

## Maintain the starter

Run npm run typecheck and npm run build before publishing changes. To upgrade the SDK, update both tarball versions in package.json, run npm run setup:sdk and npm install, then commit the updated lockfile with the manifest.

GitHub Actions publishes this starter from the templates/create-app-factory-app directory in App Factory after checking it against the released SDK.
