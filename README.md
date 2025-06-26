<a id="readme-top"></a>

<!-- PROJECT TITLE -->
<br />
<div align="center">
  <h3 align="center">Google Flights Web</h3>

  <p align="center">
   A project can search flights by airport using Rapid API
    <br />
    <br />
    <a href="https://google-flights-web.vercel.app">View Demo</a>

  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

This project offers users the ability to search for flights based on departure and arrival locations, travel dates, and passenger numbers. It displays a comprehensive list of flight options with details such as airline, price, departure and arrival times, and flight duration. Users can sort and filter results by criteria like price, airlines, and travel duration to find the best options. Additionally, it features a calendar view to display price trends over different dates, providing a visual representation of the most affordable travel periods. The user interface is designed to be intuitive and responsive, ensuring a seamless experience across both desktop and mobile devices.

Furthermore, this application can serve as an educational tool for learning about the Rapid API and web.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This is the stack for build this project.

-   [![React][React.js]][React-url]
-   [![Tanstack Query][Tanstack Query]][TanstackQuery-url]
-   [![Zod][Zod]][Zod-url]
-   [![Rapid][Rapid]][Rapid-url]
-   [![Vercel][Vercel]][Vercel-url]
-   [![Vite][Vite]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

-   yarn
    ```sh
    npm install yarn@latest -g
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/alpredovandy/google-flights-web.git
    ```
2. Move to repo
    ```sh
    cd google-flights-web
    ```
3. Install Yarn packages
    ```sh
    yarn install
    ```
4. Enter your API and Limit in `.env`
    ```js
    VITE_RAPID_API_URL = 'https://sky-scrapper.p.rapidapi.com/api';
    VITE_RAPID_API_KEY = ''; // Your API Key
    ```
5. How to run project
    ```sh
    yarn dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Top contributors:

<a href="https://github.com/alpredovandy/google-flights-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=alpredovandy/google-flights-web" alt="contrib.rocks image" />
</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Alpredo Pandiangan - alpredo.vandy@gmail.com

Project Link: [https://github.com/alpredovandy/google-flights-web](https://github.com/alpredovandy/google-flights-web)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org
[Tanstack Query]: https://img.shields.io/badge/reactquery-whitesmoke?style=for-the-badge&logo=react-query
[TanstackQuery-url]: https://tanstack.com/query/latest
[Zod]: https://img.shields.io/badge/zod-blue?style=for-the-badge&logo=zod
[Zod-url]: https://zod.dev
[Rapid]: https://img.shields.io/badge/rapid-api-blue?style=for-the-badge&logo=rapid
[Rapid-url]: https://rapidapi.com
[Vercel]: https://img.shields.io/badge/vercel-black?style=for-the-badge&logo=vercel
[Vercel-url]: https://vercel.com
[Vite]: https://img.shields.io/badge/vite-FFFFE0?style=for-the-badge&logo=vite
[Vite-url]: https://vite.dev
