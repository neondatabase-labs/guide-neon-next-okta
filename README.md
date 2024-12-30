<img width="250px" src="https://neon.tech/brand/neon-logo-dark-color.svg" />

# Next.js application with Neon Postgres and Okta authentication

This is a Next.js application that uses `Neon Postgres` as the database, `Drizzle ORM` to interact with it and `Okta` for user authentication. It allows users from your Okta organization to log in, save their favorite quote, and view or delete it later.

## Prerequisites

To run this project, you will need:

- A [Neon](https://neon.tech) account and a project with a Postgres database
- An [Okta](https://clerk.com/) account (Workforce Identity Cloud) and an application set up for authentication
- Node.js and npm installed on your machine

## Set up locally

1. Clone this repository.

```bash
git clone https://github.com/neondatabase/guide-neon-next-okta
```

2. Navigate to the project directory and install the dependencies.

```bash
cd guide-neon-next-okta
npm install
```

3. Create a `.env.local` file in the root of the project and add the following environment variables:

```bash
DATABASE_URL=YOUR_NEON_DATABASE_URL
AUTH_SECRET==*************
AUTH_OKTA_ISSUER==*************
AUTH_OKTA_ID==*************
AUTH_OKTA_SECRET=*************
```

Replace the placeholders with your actual Neon database URL and Okta application configuration values, as specified in the Auth.js [documentation](https://authjs.dev/getting-started/authentication/oauth?provider=okta).

4. Run the database migrations using Drizzle.

```bash
npx drizzle-kit push:pg
```

5. Start the development server.

```bash
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000`. You should see the application running.

## Usage

When unauthenticated, you will see a `Sign in` button, clicking which redirects to the Okta login widget. 
- Login to your Okta account. 
- Once logged in, you can enter your favorite quote in the text field and click "Save Quote" to store it in the database.
- The saved quote will be displayed on the page. You can delete it by clicking the "Delete Quote" button. 
