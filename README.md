# PersonalAssistance

<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">PersonalAssistance</h3>

  <p align="center">
    A Personal Assistance to help task management!
    <br />
    <a href="https://kelvin-personal-assistant.netlify.app/">View Demo</a>
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#design">Design</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#extra-features">Extra Features</a></li>
    <li><a href="#project-logs">Project Logs</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://kelvin-personal-assistant.netlify.app/)

Have you ever had your most busy period and having trouble to maintain your task management?<br>
Then you should definitely try this personal assistance. Why?

Here's why:
* You can set reminder for events base on date and time
* You can set and view your current task and deadline
* You can store contacts persons contact/email within this application

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Design

UI wireframe: https://www.figma.com/file/VEoJmniVUr5tchMLLYgjr9/Untitled?node-id=0%3A1
<br>
UX journey: https://excalidraw.com/#json=iJP-l9qgjK0ybT_mjkDES,OsKZPH5E9X0ZZUF5ND4C1g
<br>
Data Structure: https://excalidraw.com/#json=9jlRitAi5Ql5DS_oPoduU,4t3l3_5Vw6UXLjOJhl3biA
<br>

### Built With

Technology stack

* [![React][React.js]][React-url]
* [![Redux][Redux.js]][Redux-url]
* [![Node][Node.js]][Node-url]
* [![Tailwind CSS][TailwindCSS]][Tailwind-url]
* [![Jest][Jest.js]][Jest-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

What you need before installing the application.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Here's the step to install the application into your local device


  Clone the repo
   ```sh
   git clone git@github.com:kelvin6118/PersonalAssistance.git
   ```
   Client:
1. Get to the client folder
   ```sh
   cd PA_Client
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run with NPM command
   ```sh
   npm start
   ```
   <br>
Server:
1. Get to the server folder
   ```sh
   cd PA-Server
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run with NPM command
   ```sh
   npm start
   ```
   <br>
   Optional: You can run test on both Client and Server
   ```sh
   npm test
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

- Click on the Sign up button to navigate to the sign up page
- Sign up an account on the Sign up page
- Login on the main page
- On user dashboard, you can select calendar or phonebook by clicking the nav icon
- You can create new task or event on the calendar
- You can create new contact on the phonebook
- You can logout by closing the browser or clicking the logout button on the top right.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] UI/UX Design
- [x] Data Structure Design
- [x] bit.io database integration
- [x] User Account Feature
- [x] User's Dashboard Feature
- [x] User's Phonebook
- [ ] Update/Delete Task/Event
- [ ] Update/Delete Contact in PhoneBook


## Extra Features
- [ ] Email Validation
- [ ] Email reminder
- [ ] Enhance display by using calendar

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Logs

[logs](log.txt)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [React Datepicker](https://reactdatepicker.com/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->

[product-screenshot]: https://user-images.githubusercontent.com/98923218/194867507-1f4fa4f2-b435-470d-9d5b-5a1e037e00bb.png
[Redux.js]: https://img.shields.io/badge/Redux-lastest-purple
[Redux-url]: https://redux.js.org/
[React.js]: https://img.shields.io/badge/React-latest-cyan
[React-url]: https://reactjs.org/
[Node.js]: https://img.shields.io/badge/Node-latest-green
[Node-url]: https://nodejs.org/en/
[TailwindCSS]: https://img.shields.io/badge/TailwindCSS-latest-cyan
[Tailwind-url]: https://tailwindcss.com/
[Jest.js]: https://img.shields.io/badge/Jest-latest-orange
[Jest-url]: https://jestjs.io/
