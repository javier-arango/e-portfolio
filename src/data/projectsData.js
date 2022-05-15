import { v4 as uuidv4 } from "uuid";

const projectsData = [
  {
    id: uuidv4(),
    name: "Stock Market Suggestions",
    image: require("../assets/projects-img/stockMarketSuggestions.png"),
    description: `Developed a platform working as a team that suggests the safest stocks to invest in the long term. 
    I was in charge of creating all the backend logic, including basic foundation for processing data, implementation of 
    QuickSort and RadixSort algorithms to sort 100,000 data points, and setting up the server.`,
    technology: [
      { id: uuidv4(), name: "React.js" },
      { id: uuidv4(), name: "Typescript" },
      { id: uuidv4(), name: "Express.js" },
      { id: uuidv4(), name: "Node.js" },
    ],
    link: "https://github.com/javier-arango/stock-market-suggestions",
  },
  {
    id: uuidv4(),
    name: "Simplified PageRank Algorithm",
    image: require("../assets/projects-img/simplifiedPageRank.png"),
    description: `PageRank algorithm is an algorithm used by Google Search to rank web pages in their 
    search engine results to order or rank different web pages on the internet. Developed a simplified 
    version of the PageRank algorithms where users can see the rank of connected websites. Implemented 
    the algorithms using a Adjacency List graph for better space complexity.`,
    technology: [
      { id: uuidv4(), name: "C++" },
      { id: uuidv4(), name: "CLion" },
    ],
    link: "https://github.com/javier-arango/simplified-page-rank-algorithm",
  },
  {
    id: uuidv4(),
    name: "Custom AVL Tree",
    image: require("../assets/projects-img/avlTree.png"),
    description: `AVL tree is a self-balancing binary search tree to improve the worst time complexity 
    of the BST tree. Implemented a custom version of an AVL tree to organize students' accounts based 
    on IDs. The user can see each node in the tree by using three different tree 
    traversal: inOrder, postOrder, and levelCount`,
    technology: [
      { id: uuidv4(), name: "C++" },
      { id: uuidv4(), name: "CLion" },
    ],
    link: "https://github.com/javier-arango/balanced-binary-search-tree",
  },
  {
    id: uuidv4(),
    name: "Housing Price Prediction",
    image: require("../assets/projects-img/housePrediction.png"),
    description: `Housing Price Prediction is a Jupiter Notebook program 
    to help college students find the best rental prices in Gainesville, FL. 
    I was able to collect the data using Foursquare API and Realtor API. 
    The program shows all the different areas of Gainesville according to 
    the house's price range.`,
    technology: [
      { id: uuidv4(), name: "Python" },
      { id: uuidv4(), name: "Numpy" },
      { id: uuidv4(), name: "Seaborn" },
      { id: uuidv4(), name: "Jupiter Notebook" },
    ],
    link: "https://github.com/javier-arango/gainesville-rentals",
  },
  {
    id: uuidv4(),
    name: "Minesweeper Game",
    image: require("../assets/projects-img/minesweper.png"),
    description: `I recreated the classic game Minesweeper with all the 
    original features. I also added new features such as a debugging button 
    and two test buttons to initialize the game using a preloaded board 
    from files. I developed the game using C++ and the library SFML to 
    create a simple user interface.`,
    technology: [
      { id: uuidv4(), name: "C++" },
      { id: uuidv4(), name: "SFML" },
      { id: uuidv4(), name: "CLion" },
    ],
    link: "",
  },
  {
    id: uuidv4(),
    name: "Real-Time Face Detection",
    image: require("../assets/projects-img/faceDetection.png"),
    description: `Developed a real-time face detection program using 
    Python and OpenCV, using Cascade Classifiers to classify a face 
    from a non-face`,
    technology: [
      { id: uuidv4(), name: "Python" },
      { id: uuidv4(), name: "OpenCV" },
      { id: uuidv4(), name: "PyCharm" },
    ],
    link: "https://github.com/javier-arango/opencv-face-detection",
  },
  {
    id: uuidv4(),
    name: "Class Attender Bot",
    image: require("../assets/projects-img/classAttenderBot.jpg"),
    description: `Developed a python bot to automatically join online meetings on a 
    schedule. Used Selenium to control the 
    browser and perform browser automation. Finally, I created a 
    local database using SQLite3 to locally store course names and 
    schedules.`,
    technology: [
      { id: uuidv4(), name: "Python" },
      { id: uuidv4(), name: "SQLite3" },
      { id: uuidv4(), name: "Selenium" },
      { id: uuidv4(), name: "PyCharm" },
    ],
    link: "https://github.com/javier-arango/class-attender-bot",
  },
];

export default projectsData;
