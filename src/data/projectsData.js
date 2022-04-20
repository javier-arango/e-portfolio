let id = 0; // Id increase by 1
const projectsData = [
  {
    id: `${id++}`,
    name: "Stock Market Suggestions",
    image: require("../assets/Projects Img/stockMarketSuggestions.png"),
    description: `Developed a platform working as a team that suggests the safest stocks to invest in the long term. 
    I was in charge of creating all the backend logic, including basic foundation for processing data, implementation of 
    QuickSort and RadixSort algorithms to sort 100,000 data points, and setting up the server.`,
    technology: [
      { id: "t0", name: "React.js" },
      { id: "t1", name: "Typescript" },
      { id: "t2", name: "Express.js" },
      { id: "t3", name: "Node.js" },
    ],
    link: "https://github.com/javier-arango/stock-market-suggestions",
  },
  {
    id: `${id++}`,
    name: "Housing Price Prediction",
    image: require("../assets/Projects Img/housePrediction.png"),
    description: `Housing Price Prediction is a Jupiter Notebook program 
    to help college students find the best rental prices in Gainesville, FL. 
    I was able to collect the data using Foursquare API and Realtor API. 
    The program shows all the different areas of Gainesville according to 
    the house's price range.`,
    technology: [
      { id: "t0", name: "Python" },
      { id: "t1", name: "Numpy" },
      { id: "t2", name: "Seaborn" },
      { id: "t3", name: "Jupiter Notebook" },
    ],
    link: "https://github.com/javier-arango/gainesville-rentals",
  },
  {
    id: `${id++}`,
    name: "Minesweeper Game",
    image: require("../assets/Projects Img/minesweper.png"),
    description: `I recreated the classic game Minesweeper with all the 
    original features. I also added new features such as a debugging button 
    and two test buttons to initialize the game using a preloaded board 
    from files. I developed the game using C++ and the library SFML to 
    create a simple user interface.`,
    technology: [
      { id: "t0", name: "C++" },
      { id: "t1", name: "SFML" },
      { id: "t2", name: "CLion" },
    ],
    link: "",
  },
  {
    id: `${id++}`,
    name: "Real-Time Face Detection",
    image: require("../assets/Projects Img/faceDetection.png"),
    description: `Developed a real-time face detection program using 
    Python and OpenCV. Using Cascade Classifiers to classify a face 
    from a non-face`,
    technology: [
      { id: "t0", name: "Python" },
      { id: "t1", name: "OpenCV" },
      { id: "t2", name: "PyCharm" },
    ],
    link: "https://github.com/javier-arango/opencv-face-detection",
  },
  {
    id: `${id++}`,
    name: "Class Attender Bot",
    image: require("../assets/Projects Img/classAttenderBot.jpg"),
    description: `I developed a python bot to join online meetings on a 
    schedule automatically. I used Selenium for controlling the web 
    browser and performing browser automation. Finally, I created a 
    local database using SQLite3 to locally store course names and 
    schedules.`,
    technology: [
      { id: "t0", name: "Python" },
      { id: "t1", name: "SQLite3" },
      { id: "t2", name: "Selenium" },
      { id: "t3", name: "PyCharm" },
    ],
    link: "https://github.com/javier-arango/class-attender-bot",
  },
];

export default projectsData;
