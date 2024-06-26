# Transactions App

## Overview
The Transactions App is a sleek and user-friendly application designed to help users manage and view their financial transactions. The app includes a settings screen for theme customization, a transactions screen displaying transaction details, and other screens for statistics and cards. The app supports dark mode and custom styling for a seamless user experience.

## Components
- Transactions
- Settings
- Statistics
- Cards

### Home Screen
- **Description**: The home screen serves as the main dashboard where users can get an overview of their account and navigate to other parts of the app.
- **Usage**: Users can access different sections of the app such as transactions, settings, statistics, and cards from the home screen.

- **Screenshot**:  
  ![Home Screen](./assets/Home(lightMode).jpg)
  ![Home Screen](./assets/HomeScreen(darkMode).jpg)


### Settings Screen
- **Description**: The settings screen allows users to toggle between light and dark modes and manage other settings.
- **Usage**: Users can switch the theme using the toggle button. The theme is applied across the application.

- **Screenshot**:  
  ![Settings Screen](./assets/Settings(lightMode).jpg)
  ![Settings Screen](./assets/Settings(darkMode).jpg)

### Transactions Screen
- **Description**: The transactions screen displays a list of transactions with details such as title, subtitle, amount, and an icon with a background.
- **Usage**: Users can view transaction details at a glance. Each transaction is represented by a custom component that includes an icon, title, subtitle, and amount.

- **Screenshot**:  
  ![Transactions Screen](./assets/Transactions(lightMode).jpg)
  ![Transactions Screen](./assets/Transactions(darkMode).jpg)


### Statistics Screen
- **Description**: The statistics screen shows statistical data related to the user's transactions. The screen is centered and adapts to the selected theme.
- **Usage**: Users can view statistical summaries of their transactions.

- **Screenshot**:  
  ![Statistics Screen](./assets/StatisticsScreen(lightMode).jpg)
  ![Statistics Screen](./assets/StatisticsScreen(darkMode).jpg)

### Cards Screen
- **Description**: The cards screen displays information about various cards. The screen is centered and adapts to the selected theme.
- **Usage**: Users can view details about their cards in a clean and centered layout.

- **Screenshot**:  
  ![Cards Screen](./assets/CardScreen(lightMode).jpg)
  ![Cards Screen](./assets/CardsScreen(darkMode).jpg)

### Transactions Component
- **Props**:
  - `transIcon`: The icon representing the transaction.
  - `title`: The title of the transaction.
  - `subTile`: The subtitle or additional information about the transaction.
  - `amount`: The transaction amount.
  - `iconStyle`: Custom styles for the transaction icon.
  - `amountStyle`: Custom styles for the transaction amount.

### Custom Components
Custom components are used throughout the application to maintain a consistent design and enhance reusability. Each transaction is created using the custom Transactions Component, ensuring uniformity across the transactions screen.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/samuelGyasiFordjour/rn-assignment4-11053488.git
  ```
  ## Student ID: 11053488