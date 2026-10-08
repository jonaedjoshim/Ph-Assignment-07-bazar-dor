<div align="center">

# বাজার দর | Bazar Dor

### Daily Market Prices of Essential Products in Bangladesh

A modern, responsive web application for exploring daily market prices, tracking price changes, and comparing product prices across different markets in Bangladesh.

**[Live Website](https://bazar-dor-mj.vercel.app)** | **[GitHub Repository](https://github.com/jonaedjoshim/Ph-Assignment-07-bazar-dor)**

</div>

---

## About the Project

**Bazar Dor (বাজার দর)** is a Bengali-first market price tracking application built with Next.js.

The application helps users explore the latest prices of essential products, including rice, lentils, cooking oil, vegetables, fish, meat, eggs, milk, and spices.

Users can browse products by category, identify price increases and decreases, sort products by price, and compare prices across different markets in Bangladesh.

The application also includes secure authentication using Better Auth, allowing users to access detailed product information and manage their profiles.

## Key Features

- **Daily Market Prices:** Browse essential products with their latest prices, units, and percentage changes.
- **Price Increase & Decrease Tracking:** Explore the top six products with the highest price increases and decreases.
- **Category-Based Browsing:** Filter products by categories such as rice, lentils, vegetables, fish, and meat.
- **Price Sorting:** Sort category products by default order, lowest price, or highest price.
- **Market Price Comparison:** View minimum, maximum, and average prices across different markets.
- **Live Price Ticker:** An infinitely scrolling marquee displaying product prices and price changes.
- **Secure Authentication:** Sign up and sign in using email/password, Google, or GitHub.
- **Protected Product Details:** Detailed product information is accessible to authenticated users.
- **User Profile Management:** View account information and update your profile name.
- **Bengali Number Formatting:** Product prices and percentages are displayed using Bengali numerals.
- **Responsive Design:** Optimized for mobile, tablet, and desktop devices.
- **Loading & Error States:** Skeleton loaders, toast notifications, and custom error pages improve the user experience.

## Technologies Used

| Technology         | Purpose                               |
| ------------------ | ------------------------------------- |
| Next.js 16         | React framework and App Router        |
| React              | User interface                        |
| TypeScript         | Type-safe development                 |
| Tailwind CSS       | Styling and responsive layouts        |
| DaisyUI            | UI components                         |
| Better Auth        | Authentication and session management |
| MongoDB Atlas      | Authentication data storage           |
| React Hook Form    | Form handling                         |
| Zod                | Form validation                       |
| React Hot Toast    | Toast notifications                   |
| React Icons        | Icons                                 |
| React Fast Marquee | Infinite price ticker                 |
| AOS                | Scroll animations                     |
| Lucide React       | Additional UI icons                   |
| Vercel             | Deployment                            |

## Application Pages

| Route              | Description                                     | Access    |
| ------------------ | ----------------------------------------------- | --------- |
| `/`                | Homepage with product listings and price trends | Public    |
| `/category/[slug]` | Category products with sorting                  | Public    |
| `/product/[slug]`  | Product details and market price comparison     | Protected |
| `/signin`          | User sign in                                    | Public    |
| `/signup`          | User registration                               | Public    |
| `/profile`         | User profile information                        | Protected |
| `/profile/update`  | Update profile name                             | Protected |

Unknown or invalid routes display a custom 404 page with navigation back to the homepage.

## Authentication

Bazar Dor uses **Better Auth** with MongoDB Atlas for authentication and session management.

Supported authentication methods:

- Email and Password
- Google OAuth
- GitHub OAuth

### Authentication Features

- Secure password handling
- Session-based authentication
- Protected routes
- Social authentication
- User profile management
- Profile name updates
- Sign out functionality
- Authentication success and error notifications

Email verification and password recovery are not included in the current version.

## API Integration

Product and category information is fetched from the provided Bazar Dor API.

**Primary API:**

```text
https://api.api-store.workers.dev/api/bazardor
```

**Alternative API:**

```text
https://api.abcz.workers.dev/api/bazardor
```

### API Endpoints

| Endpoint                  | Description              |
| ------------------------- | ------------------------ |
| `/products`               | Get all products         |
| `/products?category=chal` | Get products by category |
| `/products/1`             | Get a single product     |
| `/categories`             | Get all categories       |
| `/categories/chal`        | Get a single category    |

The application includes API error handling and fallback support.

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js 20.9 or later
- npm
- Git
- A MongoDB Atlas database
- Google OAuth credentials
- GitHub OAuth credentials

### 1. Clone the Repository

```bash
git clone https://github.com/jonaedjoshim/Ph-Assignment-07-bazar-dor.git
```

### 2. Navigate to the Project

```bash
cd Ph-Assignment-07-bazar-dor
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root.

You can use `.env.example` as a reference.

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=bazar-dor

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

NEXT_PUBLIC_API_BASE_URL=https://api.api-store.workers.dev/api/bazardor

USE_CUSTOM_DNS=false
```

Replace the placeholder values with your own credentials.

Never commit `.env.local` or expose authentication secrets publicly.

### 5. Start the Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## MongoDB Configuration

MongoDB Atlas is used to store authentication-related information.

The application uses the Better Auth MongoDB adapter.

The database includes authentication collections such as:

```text
bazar-dor
├── user
├── account
├── session
└── verification
```

These collections are managed by Better Auth.

Product and category data are fetched from the external API rather than stored in MongoDB.

### Custom DNS Configuration

Some local networks may experience MongoDB Atlas DNS resolution issues.

The project includes a DNS configuration helper for local development.

If needed, configure:

```env
USE_CUSTOM_DNS=true
```

This enables custom DNS settings for MongoDB connectivity.

Custom DNS configuration is generally unnecessary on Vercel.

## Google OAuth Setup

Create a Google OAuth client from:

https://console.cloud.google.com/auth/clients

Select **Web Application** as the application type.

### Local Development

Authorized JavaScript Origin:

```text
http://localhost:3000
```

Authorized Redirect URI:

```text
http://localhost:3000/api/auth/callback/google
```

### Production

Authorized JavaScript Origin:

```text
https://bazar-dor-mj.vercel.app
```

Authorized Redirect URI:

```text
https://bazar-dor-mj.vercel.app/api/auth/callback/google
```

Add the generated Client ID and Client Secret to your environment variables.

## GitHub OAuth Setup

Create a GitHub OAuth application from:

https://github.com/settings/developers

### Local Development

Homepage URL:

```text
http://localhost:3000
```

Authorization Callback URL:

```text
http://localhost:3000/api/auth/callback/github
```

### Production

Homepage URL:

```text
https://bazar-dor-mj.vercel.app
```

Authorization Callback URL:

```text
https://bazar-dor-mj.vercel.app/api/auth/callback/github
```

Add the generated GitHub Client ID and Client Secret to your environment variables.

## Available Commands

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

Run ESLint:

```bash
npx eslint .
```

## Deployment

The application is deployed on **Vercel**.

**Live URL:**

https://bazar-dor-mj.vercel.app

### Deploy Your Own Version

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Set `BETTER_AUTH_URL` to your production domain.
5. Configure production OAuth callback URLs.
6. Deploy the application.
7. Test authentication and dynamic routes after deployment.

### Production Environment Variables

```env
MONGODB_URI=your_mongodb_connection_string
MONGODB_DB=bazar-dor

BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=https://your-domain.vercel.app

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

NEXT_PUBLIC_API_BASE_URL=https://api.api-store.workers.dev/api/bazardor
```

Environment variables should be configured through the Vercel dashboard.

## Responsive Design

The application supports different screen sizes:

- Mobile devices
- Tablets
- Laptops
- Desktop monitors

Responsive features include flexible navigation, horizontally scrollable category links, adaptive product grids, responsive forms, and scrollable market price tables.

## Future Improvements

- Historical price charts
- Product search functionality
- Favorite products
- Price comparison between regions
- Price change notifications
- Additional market data visualization

## Project Information

**Project:** Bazar Dor (বাজার দর)

**Assignment:** B14-A7-Bazar Dor

**Framework:** Next.js

**Authentication:** Better Auth

**Database:** MongoDB Atlas

**Deployment:** Vercel

**Repository:** https://github.com/jonaedjoshim/Ph-Assignment-07-bazar-dor

**Live Website:** https://bazar-dor-mj.vercel.app

---

<div align="center">

### বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।

Built with Next.js, TypeScript, Tailwind CSS, and Better Auth.

</div>
