# React Blog Project

A modern blog website built with React and Supabase. This project showcases the use of React hooks, state management, and backend integration with Supabase.

## Features

- 📝 Create, read, update and delete blog posts
- 👤 User authentication using Supabase Auth
- 🎨 Responsive design using tailwind
- 📱 Mobile-friendly interface
- 💾 Data persistence with Supabase database

## Tech Stack

- React + Vite
- Supabase (Backend)
- React Router (Navigation)
- React Icons
- CSS Modules

## Getting Started

1. Clone the repository:

```bash
git clone <your-repo-url>
cd react-blog
```

2. Install dependencies:

```bash
npm install
```

3. Set up Supabase:

- Create a Supabase account
- Create a new project
- Copy your project URL and anon key
- Create a `.env` file in the root directory:

```bash
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

4. Run the development server:

```bash
npm run dev
```

## Project Structure

```
src/
  ├── components/     # Reusable React components
  ├── pages/         # Page components
  ├── hooks/         # Custom React hooks
  ├── services/      # Supabase service functions
  ├── styles/        # CSS modules and global styles
  └── utils/         # Helper functions
```

## Learning Resources

- [React Hooks Documentation](https://reactjs.org/docs/hooks-intro.html)
- [Supabase Documentation](https://supabase.com/docs)
- [React Router Documentation](https://reactrouter.com/)

## Contributing

This is a learning project. Feel free to fork and experiment with it!

## License

MIT License
