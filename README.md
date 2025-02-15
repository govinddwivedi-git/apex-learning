# Apex Learning - AI-Powered Learning Platform

Apex Learning is an innovative AI-powered learning platform that helps students and professionals create personalized study materials, practice tests, and educational content.

## Features

- 🤖 AI-Powered Study Material Content Generation
- 📚 Multiple Study Material Types :
  - Notes/Chapters
  - Flashcards
  - Quizzes
  - Question & Answer Sets
- 🎯 Specialized Categories:
  - Exam Preparation
  - Job Interview Practice
  - Coding Practice
  - General Learning
- 🔒 Secure Authentication (via Clerk)
- 💳 Premium Features (via Stripe)
- 🎨 Modern UI with Dark Mode
- ⚡ Built with Next.js 15

## Tech Stack

- Next.js
- React
- Clerk Authentication
- Google's Generative AI (Gemini)
- Stripe Payment Integration
- Drizzle ORM
- NeonDB (PostgreSQL)
- Tailwind CSS
- Radix UI Components
- Shadcn UI Components
- Inngest for backend workflows

## Getting Started

1. Clone the repository:
```bash
git clone [https://github.com/govinddwivedi-git/apex-learning]
cd apex-learning
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:
```bash
NEXT_PUBLIC_DATABASE_CONNECTION_STRING=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_GEMINI_API_KEY=
STRIPE_SECRETE_KEY=
NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY=
HOST_URL=
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application

## Project Structure

```
apex-learning/
├── app/              # Next.js app directory
├── components/       # Reusable UI components
├── public/          # Static assets
├── styles/          # Global styles
└── lib/             # Utility functions and configurations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
