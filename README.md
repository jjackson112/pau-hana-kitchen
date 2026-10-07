# Pau Hana Kitchen

A full-stack food ordering demo inspired by Hawaiʻi’s local favorites. Browse the menu, build a cart, complete a simulated checkout, and view or cancel orders. Connecting a React frontend to a Flask REST API, managing cart state with Redux Toolkit, validating and saving orders, working with relational data through SQLAlchemy, and configuring a deployed frontend, backend, and database.

## Live Link
https://pau-hana-kitchen.onrender.com/

## Tech Stack
- Frontend: React, Vite, Redux Toolkit
- Backend: Python, Flask
- Database: SQLite locally, PostgreSQL in prod
- Deployment: Render

## Features
- Responsive Home and Menu pages with images and category navigation
- Popular dishes and add-to-cart controls
- Cart sidebar with quantity updates, item removal, and localStorage persistence
- Pickup and delivery options
- Coupon discounts and percentage or custom tips
- Simulated payment fields and a demo delivery address
- Paginated order history and individual order receipts
- Cancellation controls for received orders within five minutes of placement
- Loading, empty-state, and error messages

## Demo scope
- No real payments are processed. Use demo payment details only.
- Restaurant information and the restaurant story are fictional demo content.
- Authentication is outside the current scope. Order history is shared demo data rather than a private customer account.
- The app displays received and cancelled orders; it does not simulate kitchen preparation or delivery tracking.

