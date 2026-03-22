# Portfolio Development Commands

## Start local development server

Run this to view the site locally:

```bash
npm run dev
```

Then open:

http://localhost:XXXX

---

## Save and deploy changes

After editing files:

```bash
git add .
git commit -m "What Changed?"
git push
```
OR

Use "Source Control" feature on the left sidebar to update changes:
1. message what changes were made
2. Click "Commit"
3. Click "Sync Changes" and wait for completion
4. Check Vercel and Github for final changes, ensure everything went through

Vercel will automatically redeploy the site.
https://jonathantran.vercel.app/ 

---

## First time setup on a new laptop

Clone the project:

```bash
git clone https://github.com/jonathanttran/Portfolio.git
cd Portfolio
npm install
npm run dev
```

## Returning to work on a different laptop

Clone the project
ask Chatgpt what to do


---

## Common commits

```bash
git commit -m "Update project descriptions"
git commit -m "Add project images"
git commit -m "Improve hero section"
```
