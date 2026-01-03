# Mocksy AI

Mocksy is a modern AI-powered mock interview platform UI built with Next.js, React, and Tailwind CSS. It provides a polished, realistic interface for practicing job interviews, managing interview sessions, and visualizing tech stacks, with a dark-themed, responsive design.

## Features

- Authentication UI
  - Sign up and sign in flows
  - Form validation using React Hook Form and Zod

- Interview Practice UI
  - Interview cards showing role, type, date, and score placeholders
  - Clear actions to start or review interviews

- Tech Stack Visualization
  - Automatic tech logo resolution using Devicons CDN
  - Intelligent fallback icons for unsupported technologies

- Modern UI / UX
  - Dark-mode-first design
  - Custom gradients, animations, and reusable components
  - Fully responsive layouts

- Component-Based Architecture
  - Reusable components such as AuthForm, InterviewCard, FormField, and DisplayTechIcons
  - Clean separation between authentication routes and application routes

## Tech Stack

- Framework: Next.js (App Router)
- Frontend: React, TypeScript
- Styling: Tailwind CSS with custom design tokens
- Forms: React Hook Form, Zod
- UI Utilities: clsx, tailwind-merge
- Notifications: Sonner
- Date Handling: Day.js



## Current State

- UI-focused implementation
- Uses dummy interview data
- AI interview logic and backend integration not implemented yet

## Planned Enhancements

- Real AI-powered interview sessions
- Voice-based interviewing
- Automated scoring and feedback
- User dashboard with progress tracking
- Backend authentication and data persistence
