# Vercel Deployment Guide

This guide walks you through uploading your standalone React/TypeScript (TanStack Start) project to GitHub and deploying it on Vercel.

---

## Step 1: Upload Your Code to GitHub

Since you are uploading the code manually, follow these commands in your project root using your terminal:

1. **Initialize a Git repository:**
   ```bash
   git init
   ```

2. **Add all files to staging:**
   ```bash
   git add .
   ```

3. **Commit the changes:**
   ```bash
   git commit -m "chore: initial standalone commit for vercel deployment"
   ```

4. **Set the main branch name:**
   ```bash
   git branch -M main
   ```

5. **Link your local repository to your remote GitHub repository:**
   *(Create a new repository on GitHub first, then copy the URL)*
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```
   *Note: If you get an error saying `error: remote origin already exists.`, it means a remote link is already configured. Update it to your new repository URL instead by running:*
   ```bash
   git remote set-url origin https://github.com/your-username/your-repo-name.git
   ```

6. **Push the code to GitHub:**
   ```bash
   git push -u origin main
   ```

---

## Step 2: Import the Project into Vercel

Once your code is pushed to GitHub, navigate to [Vercel](https://vercel.com/) and follow these steps matching the latest Vercel UI:

1. **Sign In / Sign Up:**
   Log in to Vercel using your **GitHub account**. This automatically links your repositories.

2. **Create a New Project:**
   - In the top-right corner of your Vercel Dashboard, click the **"Add New..."** button.
   - Select **"Project"** from the dropdown menu.

3. **Import Git Repository:**
   - Under the **"Import Git Repository"** section, look for your newly pushed repository (`your-repo-name`).
   - Click the **"Import"** button next to it.

---

## Step 3: Configure Build & Deployment Settings

After importing, Vercel will present the **Configure Project** screen. Set up the fields as follows:

1. **Project Name:**
   Keep the default or enter a custom name for your site.

2. **Framework Preset:**
   - Vercel automatically detects the build toolchain. It should show **"Other"** or **"TanStack Start"**.
   - **Leave it as default** (or select "Other" / "TanStack Start" if prompted). The underlying Nitro bundler automatically compiles the application into a `.vercel` output bundle format, meaning Vercel does not need a special framework preset override.

3. **Root Directory:**
   Leave it as `./` (the workspace root).

4. **Build and Output Settings:**
   *Usually, you do not need to expand or modify this.* Vercel's zero-config default settings will run `npm run build` and output files automatically.
   - **Build Command:** `npm run build` (Default)
   - **Output Directory:** `.vercel/output` (Default)

5. **Environment Variables (Optional for Demo):**
   - **For a Demo Deployment:** You can skip adding environment variables. The project is configured to bypass missing database credentials, log a console warning, and fall back to dummy credentials. The static pages and UI will load and work exactly like `localhost` (without real database capabilities).
   - **For a Production Deployment (with Database):**
     - Expand the **"Environment Variables"** section.
     - Add the following keys and values matching your Supabase project credentials:
       - `VITE_SUPABASE_URL`
       - `VITE_SUPABASE_PUBLISHABLE_KEY`
       - `SUPABASE_URL`
       - `SUPABASE_PUBLISHABLE_KEY`
       - `SUPABASE_SERVICE_ROLE_KEY`

---

## Step 4: Deploy

1. Click the **"Deploy"** button at the bottom of the screen.
2. Vercel will build the project, bundle serverless routes, and serve static assets. This takes 1–2 minutes.
3. Once completed, you will see a congratulatory screen and get a production URL (e.g., `https://your-project.vercel.app`).

---

## Step 5: Ongoing Deployments

Any updates you make to the code can be deployed automatically:
- Simply push new commits to your GitHub `main` branch.
- Vercel will detect the push and automatically trigger a new preview/production build.
