# Store It

Store It is a modern web application designed as a Google Drive clone. It provides cloud file storage, management, and sharing features using a powerful combination of Next.js on the frontend and Appwrite on the backend.

## Overview

**Store It** offers users a seamless experience to upload, manage, and retrieve files – replicating core functionalities found in popular cloud storage platforms. The project is built with developer productivity and scalability in mind.

## Features

- **Modern Frontend:**  
  Developed using [Next.js](https://nextjs.org) and TypeScript, ensuring excellent performance, SEO benefits, and a dynamic user interface.
  
- **Robust Backend:**  
  Powered by [Appwrite](https://appwrite.io), which handles:
  - Secure user authentication
  - File storage and retrieval
  - Database management for user data and file metadata
  
- **Responsive Design:**  
  Incorporates Tailwind CSS for a responsive, mobile-first design.

- **Modular Architecture:**  
  Organized code structure with dedicated folders for components, hooks, constants, and types to ease development and future enhancements.

## Live Demo

Check out the live demo of the project:  
[store-it-blue-five.vercel.app](https://store-it-blue-five.vercel.app)

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm or yarn package manager
- Access to an Appwrite server instance (for authentication, storage, and database features)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Aksingh1205/store_it.git
    cd store_it
    ```

2. **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure Environment Variables:**

   Create a `.env.local` file in the project root with your Appwrite configuration details. Example:
    ```env
    NEXT_PUBLIC_APPWRITE_ENDPOINT=https://[YOUR_APPWRITE_ENDPOINT]
    NEXT_PUBLIC_APPWRITE_PROJECT=[YOUR_PROJECT_ID]
    ```

4. **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- **/app:**  
  Contains the core pages and routing logic of the Next.js application.
  
- **/components:**  
  Reusable UI components.
  
- **/constants:**  
  Application-wide constants such as configurations and API endpoints.
  
- **/hooks:**  
  Custom React hooks for managing state and business logic.
  
- **/lib:**  
  Library functions, including Appwrite client setup and API integration.
  
- **/public:**  
  Static assets like images, icons, and other public files.
  
- **/types:**  
  TypeScript definitions and types for the project.

## Future Enhancements

- Enhance file organization with folder structures and tagging.
- Implement sharing functionality with permissions.
- Optimize storage retrieval and caching mechanisms.
- Expand testing coverage and add CI/CD pipelines.

## Contributions

Contributions are welcome! Please fork the repository and submit pull requests to help improve **Store It**. For major changes, please open an issue first to discuss the proposed improvements.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org) – For their excellent framework.
- [Appwrite](https://appwrite.io) – For powering the backend.
- All contributors and the community for their continual support and inspiration.
