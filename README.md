# Project-Shop

Online page on http: https://3xv4zy-3000.csb.app/

CodeSandBox page with the repository: https://codesandbox.io/p/github/MalrboroI/Project-Shop/main?import=true

The website is a multi-page online store developed in Visual Studio Code using the React library. The project is built on functional components with the addition of classes for implementing registration and authorization. Key features and functionalities of the website include:

Multi-Page Structure:
The website consists of several pages, including the home page, product catalog, shopping cart, favorites, login and registration pages, as well as an admin panel.

Product Search:
Users can search for products by name or keywords using a search bar. Real-time dynamic product filtering is implemented.

Product Sorting:
Products can be sorted by various parameters such as price, popularity, novelty, etc.

Modal Windows:
Modal windows are used to display additional product information, confirm actions (e.g., removing items from the cart), or show notifications.

Shopping Cart:
Users can add products to the cart and remove them. Cart data is saved in LocalStorage, allowing the cart state to persist even after page reload.

Favorites:
Products can be added to favorites for quick access in the future. The state of favorites is also saved in LocalStorage.

Dynamic Page Navigation:
Navigation between pages is implemented using React Router, ensuring smooth transitions without page reload.

User Authorization and Registration:
Users can register or log in. Form validation and error handling are implemented. After logging in, users gain access to their personal account.

Admin Panel:
An administrator can add new products through a dedicated admin panel without the need to modify the source code. This is implemented via a separate interface accessible only to authorized users with admin privileges.

LocalStorage Usage:
LocalStorage is used to store cart data, favorites, and authorization state, ensuring data persistence between sessions.

React Implementation:
The project is built on React functional components using hooks (useState, useEffect, useContext, etc.). CSS classes are used for styling, along with CSS-in-JS libraries where necessary.

Dynamic Data Loading:
Products and other data are loaded dynamically, allowing for quick content updates without page reload.

Responsive Design:
The website is optimized for proper display on various devices, including mobile phones, tablets, and desktops.

Technologies and Tools:

React (functional components, hooks, React Router)

LocalStorage for data storage

CSS for styling

VS Code as the development environment

Dynamic routing and application state management

This project demonstrates the capabilities of creating a modern online store using React and contemporary web technologies, providing convenience and functionality for users.
