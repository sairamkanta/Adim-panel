# User Management App

This is a simple user management application built with React, React Router, and React Bootstrap. The application allows administrators to create, read, update, and delete user information.

## Features

- Display a list of users with pagination
- View detailed information of a selected user
- Edit user information
- Create a new user
- Delete a user with a confirmation prompt
- Form validation for email format

## Setup and Installation

### Prerequisites

- Node.js and npm should be installed on your machine.

### Installation Steps

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:
    ```bash
    cd <project-directory>
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

5. **Open your browser and navigate to**:
    ```
    http://localhost:3000
    ```

## Project Structure

- `src/`: Contains all the source code for the application.
  - `components/`: Contains all the React components.
    - `UserList.js`: Component to display the list of users.
    - `UserForm.js`: Component for creating and editing users.
    - `UserDetails.js`: Component to display detailed information of a user.
  - `contexts/`: Contains the context for managing user state.
    - `UserContext.js`: Context for user data and actions.
  - `App.js`: Main component that sets up routing.
  - `index.js`: Entry point of the React application.

## Implementation Details

### State Management

- The user data is managed using React Context (`UserContext`). This provides a simple way to pass data through the component tree without having to pass props down manually at every level.

### Routing

- React Router is used to handle navigation between different pages.
  - `UserList.js`: Lists all users with pagination.
  - `UserForm.js`: Handles user creation and editing.
  - `UserDetails.js`: Displays detailed information of a user.

### Styling

- React Bootstrap is used for styling the components to ensure a responsive and clean design.

### Form Validation

- Basic form validation is implemented for the email field using a regular expression.

## Notes

- This is a demo application and the user ID assignment during user creation is a simple increment based on the length of the user array. In a real-world scenario, IDs should be handled by the backend.

## Dependencies

- React
- React Router
- React Bootstrap

## License

This project is licensed under the MIT License.
