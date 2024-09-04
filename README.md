# Serenity Adventures

[Serenity Adventures](https://serenity-adventures-demo.vercel.app) is a unique platform that offers amazing travel experiences, focusing on adventures in nature and exploring local cultures.

## Introduction

Serenity Adventures provides users with specially designed tours that offer relaxation and new experiences. From outdoor activities like hiking, mountain climbing, and cycling to cultural immersion, Serenity Adventures always puts customers first, ensuring every trip creates unforgettable memories.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To install and run Serenity Adventures on your local machine, please follow these steps:

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/serenity-adventures.git
    ```

2. Navigate into the project directory:

    ```bash
    cd serenity-adventures
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Configure environment variables by creating a `.env` file and filling in the necessary information (e.g., API keys):

    ```plaintext
    NEXT_PUBLIC_API_URL=your_api_url
    NEXT_PUBLIC_MAPBOX_API_KEY=your_mapbox_api_key
    ```

5. Run the application in development mode:

    ```bash
    npm run dev
    ```

6. The application will be running at `http://localhost:3000`.

## Usage

Serenity Adventures allows users to browse available adventure trips, learn detailed information about each trip, and book tours online. Key features include:

- Viewing a list of available tours and activities.
- Learning detailed information about each trip, including itinerary, pricing, and terms.
- Booking trips online with secure payment options.

## Project Structure

```plaintext
- `pages/` - Contains files related to routing and pages of the application.
- `components/` - Contains shared UI components.
- `public/` - Contains static files such as images and favicon.
- `styles/` - Contains CSS/SCSS files for the entire project.
- `utils/` - Contains utility and helper functions.
