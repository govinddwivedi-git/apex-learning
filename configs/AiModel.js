const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const courseOutlineAIModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a study material for Python for Exam and level of difiiculty will be Easy with summary of course, List of chapters along with summary for each chapter, Topic list in each chapter, all result  in JSON format",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "course_title": "Python for Beginners: Exam Preparation (Easy)",\n  "course_summary": "This course provides a foundational understanding of Python programming suitable for beginners. It covers basic syntax, data structures, control flow, and fundamental programming concepts. The material is designed to be easy to grasp and focuses on practical examples to aid exam preparation.",\n    "exam_difficulty": "Easy",\n  "chapters": [\n    {\n      "chapter_number": 1,\n      "chapter_title": "Introduction to Python",\n      "chapter_summary": "This chapter introduces the basics of Python, including its history, features, and setting up your development environment. It also covers basic input and output operations.",\n      "topics": [\n        "What is Python?",\n          "History of Python",\n        "Why Python is popular",\n        "Setting up Python Development Environment",\n        "Installing Python",\n        "Using a Text Editor or IDE",\n        "Running your first Python program",\n        "Basic input (using `input()`)",\n        "Basic output (using `print()`)",\n         "Comments in Python"\n      ]\n    },\n    {\n      "chapter_number": 2,\n      "chapter_title": "Variables and Data Types",\n      "chapter_summary": "This chapter delves into variables and fundamental data types, explaining how to declare variables and use different data types like integers, floats, strings, and booleans. Type conversion is also covered.",\n      "topics": [\n          "Understanding Variables",\n          "Naming Conventions",\n        "Integer data type (`int`)",\n        "Float data type (`float`)",\n        "String data type (`str`)",\n        "Boolean data type (`bool`)",\n        "Type conversion (casting)"\n      ]\n    },\n    {\n      "chapter_number": 3,\n      "chapter_title": "Operators in Python",\n      "chapter_summary": "This chapter explains the various operators used in Python, including arithmetic, comparison, and logical operators. Understanding these operators is essential for writing basic expressions.",\n      "topics": [\n        "Arithmetic operators (+, -, *, /, %, //, **)",\n        "Comparison operators (==, !=, >, <, >=, <=)",\n        "Logical operators (and, or, not)",\n        "Operator precedence"\n      ]\n    },\n    {\n      "chapter_number": 4,\n      "chapter_title": "Control Flow: Conditional Statements",\n      "chapter_summary": "This chapter introduces conditional statements, including `if`, `elif`, and `else`. It helps you to control the flow of your program based on conditions.",\n      "topics": [\n        "The `if` statement",\n        "The `if-else` statement",\n        "The `if-elif-else` statement",\n        "Nested `if` statements"\n      ]\n    },\n      {\n      "chapter_number": 5,\n      "chapter_title": "Control Flow: Loops",\n      "chapter_summary": "This chapter introduces loop constructs in Python, specifically the `for` and `while` loops. These are essential for performing repetitive tasks efficiently.",\n      "topics": [\n        "The `for` loop",\n        "Looping through sequences (e.g., strings, lists)",\n          "The `range()` function",\n        "The `while` loop",\n           "Loop Control Statements (break, continue)",\n        "Infinite Loops (and how to avoid them)"\n      ]\n    },\n    {\n      "chapter_number": 6,\n      "chapter_title": "Introduction to Lists",\n      "chapter_summary": "This chapter introduces the list data structure in Python, including how to create, access, modify, and iterate through list items. Basic list operations are covered.",\n     "topics": [\n        "Creating lists",\n        "Accessing elements using index",\n        "Modifying list elements",\n        "Adding elements (append, insert)",\n        "Removing elements (remove, pop)",\n         "List slicing",\n        "Looping through lists"\n\n      ]\n    },\n    {\n      "chapter_number": 7,\n      "chapter_title": "Basic Functions",\n      "chapter_summary": "This chapter introduces basic functions, including how to define, call, and pass arguments. It emphasizes the importance of code organization and reusability using functions.",\n       "topics":[\n        "Defining functions using `def`",\n        "Calling functions",\n        "Passing arguments to functions",\n        "Returning values from functions",\n           "Function scope (local vs global)",\n         "Built-in functions"\n      ]\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});

// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
