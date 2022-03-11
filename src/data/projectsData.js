const projectsData = [
  {
    id: "p2",
    name: "Housing Price Prediction",
    image: require("../assets/Projects Img/housePrediction.png"),
    description: `Housing Price Prediction is a Jupiter Notebook program to help college students find 
    the best prices of rent in Gainesville, FL. I was able to collected the data using Foursquare 
    API and Realtor API. The program show all the different areas of Gaineville according with the price range of the house.`,
    technology: [
      { id: "t0", name: "Python" },
      { id: "t1", name: "Numpy" },
      { id: "t2", name: "Seaborn" },
      { id: "t3", name: "Jupiter Notebook" },
    ],
    link: "https://github.com/javier-arango/gainesville-rentals",
  },
  {
    id: "p4",
    name: "Minesweeper Game",
    image: require("../assets/Projects Img/minesweper.png"),
    description: `Recreated the classic game Minesweeper with all the original features and I also added 
    new features such as debugging button and two test buttons to initialize the game using a 
    preloaded board from files. Developed the game using C++ and the library SFML to create a simple 
    user interface.`,
    technology: [
      { id: "t0", name: "C++" },
      { id: "t1", name: "SFML" },
      { id: "t2", name: "SCLionFML" },
    ],
    link: "",
  },
  {
    id: "p1",
    name: "Real-Time Face Detection",
    image: require("../assets/Projects Img/faceDetection.png"),
    description: `Developed a real time face detection program using Python and OpenCV. 
    Using Cascade Classifiers to classify a face from a non-face`,
    technology: [
      { id: "t0", name: "Python" },
      { id: "t1", name: "OpenCV" },
      { id: "t2", name: "PyCharm" },
    ],
    link: "https://github.com/javier-arango/opencv-face-detection",
  },
  {
    id: "p3",
    name: "Class Attender Bot",
    image: require("../assets/Projects Img/classAttenderBot.jpg"),
    description: `Developed a python bot to automatically join online classes on time, depending on a 
    schedule. Used Selenium for controlling the web browser and performing browser automation. 
    Created a local database using SQLite3 to store course names and schedules internally`,
    technology: [
      { id: "t0", name: "Python" },
      { id: "t1", name: "SQLite3" },
      { id: "t2", name: "Selenium" },
      { id: "t3", name: "PytPyCharmhon" },
    ],
    link: "https://github.com/javier-arango/class-attender-bot",
  },
];

export default projectsData;
