# Nursing Pro — Phase 1 Foundation

A bilingual (English/Arabic) Expo + React Native + TypeScript starter for a hospital ward management app.

## Included in Phase 1
- Navy Blue + White visual foundation.
- Animated, layered medical intro scene (3D-inspired; not a real-time 3D model yet).
- English/Arabic language toggle with RTL-aware layout.
- Login screen UI with email/password validation.
- Initial project structure for future role-based dashboards.

## Not included yet
- Real authentication, database, roles, task assignment, notifications, or patient data.
- The login button deliberately shows a setup message until Supabase is connected in a later phase.

## Install
Use Node.js LTS and npm:
```bash
npm install
npx expo start
```
Open the project with Expo Go by scanning the QR code. If Expo Go reports an SDK mismatch, install the Expo Go version compatible with SDK 58 or ask to align the project to the SDK supported by your installed Expo Go.

## GitHub upload
1. Create a private repository named `nursing-pro-app`.
2. Extract this ZIP.
3. Upload the CONTENTS of the `NursingPro` folder to the repository root (so `package.json` is at the root, not inside another nested folder).
4. Commit the files.

## Important
- Keep secrets out of the app source code.
- Do not use real patient-identifiable information in this prototype.
- Before production, configure Supabase Auth, PostgreSQL, Row Level Security, audit logging, and clinical safety workflows.
