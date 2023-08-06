# YouTube Clone

This YouTube clone application has been meticulously crafted using React, Material UI, and integrated with the YouTube Data API to offer you an immersive video-viewing experience. With a range of features designed for seamless navigation and engaging content consumption, this clone brings the essence of YouTube right to your screen.

## Key Features

- **Dynamic Video Content:** Displaying video content with dynamic thumbnails, titles and controls.
- **Real-time API Integration:** Seamless integration with the YouTube Data API for real-time updates.
- **Explore by Categories:** User-friendly category selection to explore different types of videos.
- **Smart Search:** Smart search functionality for discovering your favorite videos.
- **Channel Page:** Click on channel names to explore dedicated channel page.
- **Modern UI:** Utilizing Material UI components for a modern and sleek UI/UX.
- **Responsive Design:** Responsive design for optimal viewing across various devices.

## Deployment

View my deployment on Netlify : <a href="https://tk-youtube-clone.netlify.app/">https://tk-youtube-clone.netlify.app/</a>

## Setup

To run the project locally on your machine, follow these steps:

1. Make sure you have Node.js installed on your machine.

2. Clone this repository or download the source code.
   ```
     git clone https://github.com/Thirumalaikumar-M/YouTube-Clone.git
   ```
3. Open a terminal and navigate to the project directory.
   ```
     cd YouTube-Clone
   ```
4. Run the following command to install the project dependencies:
   ```
     npm install
   ```
   
5. Obtain an API key:
   - Sign up for an account on a YouTube data API provider prefarably Youtube v3 from RapidAPI which is used in this project.
   - Generate an API key.

6. Set up environment variables:
   - Create a ' .env ' file in the root directory of the project.
   - Add the following line to the .env file:
   ```
     REACT_APP_API_KEY= "YOUR_API_KEY"
   ```

7. Start the development server with the following command:
   ```
     npm start
   ```
8. Open the app in your browser:
   - Open http://localhost:3000 in your preferred browser.
   - The YouTube clone project should now be running and accessible in your browser.
  
## API

For this project, I used Youtube v3 from RapidAPI which enables:

- Fetch video details such as thumbnails, titles, descriptions, and statistics.
- Retrieve channel information including channel names, logos, and subscriber counts.
- Perform searches to find videos based on keywords, categories, and other parameters.
- Access real-time updates on video content and channel data.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
