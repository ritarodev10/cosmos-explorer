# Cosmos Explorer Dashboard

Cosmos Explorer is a state-of-the-art dashboard designed for the Cosmos blockchain ecosystem, focusing on a visually rich user interface with seamless animations. This project is built using React, Tailwind CSS, Vite, and leverages the powerful CosmosJS libraries along with TanStack Query for efficient data fetching and state management. Our goal is to provide users with real-time insights into blockchain metrics, transactions, and more, through a user interface that is both informative and visually compelling.

## Features

- **Dynamic Data Visualization:** Integrates interactive charts and graphs using ApexCharts and Chart.js, presenting blockchain data in an engaging and accessible manner.
- **Efficient Data Fetching:** Employs TanStack Query for fetching, caching, and updating the data in an efficient and optimized way, ensuring a smooth user experience even with real-time data.
- **Blockchain Data Decoding:** Utilizes `@cosmjs` libraries to decode information embedded in blockchain transactions, allowing for a deeper exploration of blockchain activities directly from the API responses.
- **Seamless UI Animations:** Implements Framer Motion to enrich the user interface with smooth and responsive animations, making data exploration both enjoyable and intuitive.
- **State Management:** Uses Zustand for an effortless state management experience across the application, ensuring a clean and maintainable codebase.

## Installation

To get started with the Cosmos Explorer dashboard locally, execute the following commands:

```bash
git clone https://github.com/ritarodev10/cosmos-explorer
cd cosmos-explorer
npm install
```

Usage
To run the development server:

```bash
npm run dev
```

Navigate to http://localhost:3000 to view the dashboard.

To build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Development Status
Currently, the dashboard is under active development. It features a focus on rich UI and seamless animations. Note that mobile responsiveness is in progress and will be improved in future updates.

Contributing
We welcome contributions! If you have suggestions for improvements, please fork the repository and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

Acknowledgments
Thanks to all the contributors of the open-source libraries used in this project. Special thanks to the developers of @cosmjs, TanStack Query, and ApexCharts among others listed in our package.json.
