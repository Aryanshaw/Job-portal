# Project Name Readme

## Project Overview

This repository contains a project with two main folders: `API` and `job-portal-client`. The `API` folder includes the backend code, while the `job-portal-client` folder contains the frontend code for a job portal application.

## Setup Instructions

To set up and run the project, follow the instructions below for each folder.

### API

1. **Prerequisites**

   - Node.js: Make sure you have Node.js installed. You can download it from [Node.js website](https://nodejs.org/).

2. **Clone the Repository**

   ```
   git clone https://github.com/Aryanshaw/Job-portal
   cd project-folder
   ```

3. **Navigate to the API Folder**

   ```
   cd API
   ```

4. **Install Dependencies**

   ```
   npm install
   ```

5. **Set Up Environment Variables**

   Create a `.env` file in the root of the `API` folder and configure the following environment variables as required:

   - `DB_CONNECTION_STRING`: Connection string for your database.
   - `JWT_SECRET`: Secret key for JWT token generation.

6. **Database Setup**

   Make sure your database is set up and running. Update the `DB_CONNECTION_STRING` in the `.env` file with your database connection details.

7. **Run the API Server**

   ```
   npm run start
   ```

   The API server will start and be accessible at `http://localhost:3000` by default.

### job-portal-client

1. **Prerequisites**

   - Node.js: Make sure you have Node.js installed. You can download it from [Node.js website](https://nodejs.org/).

2. **Navigate to the `job-portal-client` Folder**

   ```
   cd job-portal-client
   ```

3. **Install Dependencies**

   ```
   npm install
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root of the `job-portal-client` folder and configure the following environment variables as required:

   - `REACT_APP_API_URL`: Set this to the API server URL (e.g., `http://localhost:3000` if running the API locally).

5. **Run the Client Application**

   ```
   npm run start
   ```

   The client application will start and be accessible at `http://localhost:3000` in your web browser.

## Usage

With both the API server and client application running, you can access the job portal in your web browser. The API serves data to the client, and you can interact with the application as intended.

## Contribution

Feel free to contribute to this project by creating issues or pull requests. Your contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE), so feel free to use and modify it as needed.

---

Thank you for using this project! If you have any questions or need further assistance, please don't hesitate to contact the project maintainers.