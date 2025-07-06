# Cypress‑Testing

A structured Cypress test automation project built to demonstrate UI testing, API validation, and component behavior with a clean architecture. Suitable for scalable QA automation efforts on modern web applications.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation & Setup](#installation--setup)
5. [Project Structure](#project-structure)
6. [Configuration](#configuration)
7. [Writing Tests](#writing-tests)
8. [Running Tests](#running-tests)
9. [Reporting](#reporting)
10. [Contributing](#contributing)
11. [License](#license)

---

## Overview

This repository is a practical demonstration of Cypress automation that covers end-to-end testing, API checks, and UI element interaction. Designed for learning, scalability, and easy integration into CI/CD pipelines.

---

## Features

* Automated UI testing with Cypress.
* REST API testing using `cy.request()`.
* Page Object Model (POM) support.
* Fixtures for test data management.
* Screenshots and videos on test failure.
* Configurable base URLs and environments.

---

## Prerequisites

* **Node.js** (v14+ recommended)
* **npm** or **yarn**
* Any modern OS (Linux, macOS, Windows)

---

## Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/zuchalbastian/Cypress-Testing.git
   cd Cypress-Testing
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Open Cypress Test Runner**:

   ```bash
   npx cypress open
   ```

---

## Project Structure

```plaintext
Cypress-Testing/
├── cypress/
│   ├── e2e/                  # E2E test specs
│   ├── fixtures/             # Static test data (JSON)
│   ├── pages/                # Custom Page Object files (if used)
│   ├── support/
│   │   ├── commands.js       # Custom Cypress commands
│   │   └── e2e.js            # Global before/after hooks
├── cypress.config.js        # Cypress configuration
├── package.json             # NPM scripts & dependencies
└── README.md                # Project documentation
```

---

## Configuration

* Cypress base config file: `cypress.config.js`
* Example config:

  ```js
  const { defineConfig } = require('cypress')

  module.exports = defineConfig({
    e2e: {
      baseUrl: 'https://example.com',
      supportFile: 'cypress/support/e2e.js',
      fixturesFolder: 'cypress/fixtures'
    }
  })
  ```
* You can override base URL with CLI:

  ```bash
  npx cypress run --config baseUrl=https://staging.example.com
  ```

---

## Writing Tests

Example UI test:

```javascript
describe('Login flow', () => {
  it('should fail with invalid credentials', () => {
    cy.visit('/login')
    cy.get('#username').type('invalidUser')
    cy.get('#password').type('wrongPassword')
    cy.get('form').submit()
    cy.contains('Invalid credentials').should('be.visible')
  })
})
```

Example API test:

```javascript
describe('API check', () => {
  it('returns a list of users', () => {
    cy.request('https://reqres.in/api/users?page=2')
      .its('status').should('eq', 200)
  })
})
```

---

## Running Tests

* **Open interactive test runner**:

  ```bash
  npx cypress open
  ```
* **Run tests in headless mode**:

  ```bash
  npx cypress run
  ```
* **Run specific test**:

  ```bash
  npx cypress run --spec "cypress/e2e/login.cy.js"
  ```

---

## Reporting

* **Default**: terminal output, screenshots/videos in `cypress/screenshots` and `cypress/videos`
* **Enhanced**: integrate [mochawesome](https://github.com/adamgruber/mochawesome) or [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) for better reports.

---

## Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/new-test`
3. Commit changes: `git commit -m 'Add new test case'`
4. Push the branch: `git push origin feature/new-test`
5. Open a Pull Request

---

## License

Distributed under the [MIT License](LICENSE)

---

*Created with ❤️ by Zuchal Ari Bastian*
