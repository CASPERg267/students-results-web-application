# Students Results Web Application

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

This repository contains a web application built using Node.js and Express.js that allows users to search for educational results. The application is designed to provide a convenient way to query and display results based on student names or seating numbers. The results are loaded from an Excel spreadsheet and presented using SweetAlert for user-friendly alerts.

## Features

- Search for educational results by student name or seating number.
- Interactive user interface with results displayed using SweetAlert.
- Utilizes Node.js and Express.js for server-side handling.
- Fetches data from an Excel spreadsheet for result storage.
- Includes rate limiting for enhanced security.

## Getting Started

### Prerequisites

- Node.js: [Download and install Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CASPERg267/students-results-web-application.git
   cd educational-results-app
2. Install dependencies:
```bash
npm install
```
3. Start the server:
```bash
npm start
```
4. Open your web browser and navigate to http://localhost:21022 to access the application.


### Note

 - the excel sheet used in the web application is larger than 25mb, according to this i've [uploaded it separately](https://i.variable-hosting.com/4Pqz.xlsx)
## Usage

- Enter the student's name or seating number in the search field.
- Click the "Search" button to retrieve results.
- Results will be displayed using SweetAlert.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Express.js](https://expressjs.com/)
- [SweetAlert](https://sweetalert2.github.io/)
