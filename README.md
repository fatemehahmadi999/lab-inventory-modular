# Lab Inventory — modular version

A lab inventory web app where each lab builds its own **modules** (antibodies, reagents, cell lines, mice/PDX, protocols, or anything else) and links them to **experiments**. When an experiment draft is saved, the amounts used are subtracted from stock automatically.

Each lab runs its own copy with its own Firebase project.

## Try it (demo mode)

Demo mode needs no setup. Data is saved in your browser only.

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Set it up for a lab

See **Setup guide.docx**. In short:

1. Create a new Firebase project.
2. Paste its web config into `config.js` (the only file you edit).
3. Enable Email/Password sign-in.
4. Publish `firestore.rules` (and `storage.rules` for attachments).
5. Deploy with `firebase deploy`, then sign up — the first person becomes admin.

## Features

- **Custom modules:** fields, stock counting (one amount, per part, or none), and whether experiments use them up.
- **Experiments:** stock is reserved in one database transaction; edits adjust only the difference; deleting can return the stock.
- **Roles:** admin, member, viewer. Access is by invite only.
- **Projects, to-order list, CSV export, full JSON backup and restore.**
- **Import** from a backup of the original single-lab Lab Inventory app (read-only; the original is never changed).

## Files

| File | Purpose |
|---|---|
| `index.html` | The app |
| `config.js` | Lab settings (Firebase, optional EmailJS) |
| `js/` | App code |
| `firestore.rules`, `storage.rules` | Security rules |
| `firebase.json` | Firebase Hosting config |
| `Setup guide.docx` | Step-by-step setup |
