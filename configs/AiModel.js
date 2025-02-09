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
const generationConfig2 = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
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


export const generateNotesAIModel = model.startChat({
  generationConfig2,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate exam material detail content for ech chapter, Make sure to include all topic in the content, make sure to give content in HTML format (Do not Add HTMLKL, Head,Body,title tag), The chapters : {\"chapter_title\": \"Introduction to OOP\",\n\"chapter_summary\": \"This chapter introduces the basic concepts of Object-Oriented Programming, explaining what it is and why it's used. It also covers fundamental building blocks like classes and objects.\",\n\"topics\": [\n\"What is Object-Oriented Programming (OOP)?\",\n\"Benefits of OOP\",\n\"Classes and Objects\",\n\"Defining a Class\",\n\"Creating Objects\",\n\"Instance Variables (Attributes)\",\n\"Methods\"\n]\n}"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```html\n<div>\n    <h2>Chapter: Introduction to OOP</h2>\n    <p><strong>Chapter Summary:</strong> This chapter introduces the basic concepts of Object-Oriented Programming, explaining what it is and why it's used. It also covers fundamental building blocks like classes and objects.</p>\n\n    <h3>Topics and Exam Material:</h3>\n\n    <hr/>\n    <h4>1. What is Object-Oriented Programming (OOP)?</h4>\n    <ul>\n        <li><strong>Concept:</strong> Understand the core idea of OOP as a programming paradigm centered around objects rather than just functions or procedures.</li>\n        <li><strong>Key Ideas:</strong>\n            <ul>\n                <li>Data and behavior are bundled together into objects.</li>\n                <li>Emphasis on modularity, reusability, and data security.</li>\n                <li>Contrast with procedural programming.</li>\n            </ul>\n        </li>\n        <li><strong>Exam Questions May Include:</strong>\n             <ul>\n                <li>Multiple choice questions distinguishing OOP from other paradigms.</li>\n                 <li>True/False statements about the fundamental principles of OOP.</li>\n                <li>Short answer questions describing the core philosophy of OOP.</li>\n                <li>Explain why OOP is suitable for complex software development</li>\n             </ul>\n         </li>\n    </ul>\n\n    <hr/>\n    <h4>2. Benefits of OOP</h4>\n    <ul>\n        <li><strong>Concepts:</strong> Understand the advantages of using OOP in software development.</li>\n        <li><strong>Key Benefits:</strong>\n            <ul>\n                <li><strong>Modularity:</strong> Breaking down problems into smaller, manageable objects.</li>\n                <li><strong>Reusability:</strong> Creating classes that can be used in multiple parts of an application or in other applications.</li>\n                <li><strong>Data Hiding/Encapsulation:</strong> Protecting internal data from outside access and manipulation.</li>\n                <li><strong>Maintainability:</strong> Easier to modify and debug code because of its structured organization.</li>\n                <li><strong>Flexibility:</strong> Allowing changes to be made easily without affecting the entire system.</li>\n            </ul>\n        </li>\n       <li><strong>Exam Questions May Include:</strong>\n            <ul>\n              <li>Matching questions connecting a benefit to its definition.</li>\n               <li>Multiple choice questions selecting a benefit of OOP for a given scenario.</li>\n               <li>Short answer questions explaining the advantage of using OOP.</li>\n              <li>Explain the benefits of code reusability in OOP.</li>\n            </ul>\n       </li>\n    </ul>\n\n\n    <hr/>\n    <h4>3. Classes and Objects</h4>\n    <ul>\n        <li><strong>Concepts:</strong> Understanding the fundamental difference between classes and objects.</li>\n        <li><strong>Key Ideas:</strong>\n             <ul>\n                <li><strong>Class:</strong> A blueprint or template for creating objects; defines the data (attributes) and behavior (methods) that objects of that class will have.</li>\n                 <li><strong>Object:</strong> An instance of a class; a concrete entity created based on the class definition.</li>\n                 <li>Analogy between classes and objects (e.g., class like a cookie cutter, object like a cookie).</li>\n             </ul>\n        </li>\n      <li><strong>Exam Questions May Include:</strong>\n           <ul>\n               <li>Multiple choice questions asking about the relationship between a class and its objects.</li>\n               <li>Short answer questions defining classes and objects in your own words.</li>\n               <li>Matching questions connecting class definition and object instantiation.</li>\n                <li>Explain why class and objects are fundamentals for OOP programming.</li>\n           </ul>\n       </li>\n    </ul>\n\n    <hr/>\n    <h4>4. Defining a Class</h4>\n    <ul>\n        <li><strong>Concepts:</strong> Understanding how to declare and structure a class.</li>\n        <li><strong>Key Ideas:</strong>\n             <ul>\n                 <li>Basic syntax for defining a class.</li>\n                 <li>Class name, attributes, and methods.</li>\n                 <li>Understanding the access modifiers (e.g., public, private, protected).</li>\n             </ul>\n        </li>\n     <li><strong>Exam Questions May Include:</strong>\n          <ul>\n               <li>Code snippet showing a basic class definition and asking what it represents.</li>\n              <li>Fill in the blanks in class definition syntax.</li>\n               <li> Short answer questions explaining how to define a simple class.</li>\n               <li>Explain the basic structure of class.</li>\n          </ul>\n      </li>\n    </ul>\n\n    <hr/>\n    <h4>5. Creating Objects</h4>\n    <ul>\n        <li><strong>Concepts:</strong> Understanding how to instantiate objects from a class.</li>\n        <li><strong>Key Ideas:</strong>\n             <ul>\n                 <li>Using the `new` keyword (or equivalent depending on the language).</li>\n                <li>Understanding constructor and its role for creating a object</li>\n                 <li>Object creation and memory allocation.</li>\n             </ul>\n        </li>\n     <li><strong>Exam Questions May Include:</strong>\n           <ul>\n                <li>Code snippets showing object creation from a class and asking for the created object.</li>\n               <li>Multiple choice questions about object instantiation syntax.</li>\n                <li>Short answer questions explaining the steps for creating an object of a class.</li>\n                <li>Explain how objects are created in memory when a class is instantiated.</li>\n           </ul>\n      </li>\n    </ul>\n\n    <hr/>\n    <h4>6. Instance Variables (Attributes)</h4>\n    <ul>\n        <li><strong>Concepts:</strong> Understanding how to represent data within an object.</li>\n        <li><strong>Key Ideas:</strong>\n             <ul>\n                <li>Attributes that define the state of an object.</li>\n                <li>Declaration of instance variables within a class.</li>\n                 <li>Accessing and modifying instance variables.</li>\n                 <li>Importance of data encapsulation and privacy.</li>\n             </ul>\n        </li>\n      <li><strong>Exam Questions May Include:</strong>\n          <ul>\n               <li>Code snippets including class attribute declaration and usage.</li>\n              <li>Multiple choice questions identifying an instance variable in a code snippet.</li>\n                <li>Short answer questions explaining the role of instance variables in OOP.</li>\n                <li> Explain the importance of attribute for an object.</li>\n          </ul>\n      </li>\n    </ul>\n\n     <hr/>\n    <h4>7. Methods</h4>\n    <ul>\n       <li><strong>Concepts:</strong> Understanding how to define behavior within an object.</li>\n        <li><strong>Key Ideas:</strong>\n            <ul>\n                <li>Methods that define the behavior of an object.</li>\n                <li>Declaration of methods within a class.</li>\n                <li>Accessing instance variables from within methods.</li>\n                <li>Basic method structure, parameters and return type.</li>\n            </ul>\n        </li>\n    <li><strong>Exam Questions May Include:</strong>\n        <ul>\n            <li>Code snippets containing method declarations and usage.</li>\n            <li>Multiple choice questions identifying a method in a code snippet.</li>\n            <li>Short answer questions describing how to define and use methods in a class.</li>\n            <li>Explain why method are needed for a class.</li>\n        </ul>\n    </li>\n    </ul>\n</div>\n```\n"},
      ],
    },
  ],
});



export const GenerateStudyTypeContentAiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Generate the flashcard on topic: Flutter Fundamentals, User Interface (UI) Development, Basic App Navigation in JSON format with front back content, Maximum 15"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "```json\n[\n  {\n    \"front\": \"What is Flutter's UI built upon?\",\n    \"back\": \"Widgets. Everything in Flutter is a widget, from buttons to layouts.\"\n  },\n  {\n    \"front\": \"What is the difference between StatelessWidget and StatefulWidget?\",\n    \"back\": \"StatelessWidget: Immutable. Does not change its state. StatefulWidget: Dynamic. Can change its state during runtime.\"\n  },\n  {\n    \"front\": \"What does 'BuildContext' provide?\",\n    \"back\": \"Access to the location of a Widget in the Widget tree. Provides information about the current build process.\"\n  },\n  {\n    \"front\": \"What is the purpose of the 'pubspec.yaml' file?\",\n    \"back\": \"It is the configuration file for your Flutter project, containing dependencies, assets, and project metadata.\"\n  },\n  {\n    \"front\": \"What is the 'Column' widget used for?\",\n    \"back\": \"Arranging widgets vertically, one below the other.\"\n  },\n  {\n    \"front\": \"What is the 'Row' widget used for?\",\n    \"back\": \"Arranging widgets horizontally, side by side.\"\n  },\n  {\n    \"front\": \"How do you add padding around a widget?\",\n    \"back\": \"Use the 'Padding' widget.  Specify 'padding: EdgeInsets.all(value)' or similar.\"\n  },\n  {\n    \"front\": \"How do you center a widget?\",\n    \"back\": \"Use the 'Center' widget. Wrap the widget you want to center within a 'Center' widget.\"\n  },\n  {\n    \"front\": \"What is the purpose of the 'Scaffold' widget?\",\n    \"back\": \"Provides the basic visual structure for a Material Design app, including an AppBar, Body, FloatingActionButton, etc.\"\n  },\n  {\n    \"front\": \"How do you navigate to a new screen in Flutter?\",\n    \"back\": \"Using the 'Navigator' class. `Navigator.push(context, MaterialPageRoute(builder: (context) => NewScreen()));`\"\n  },\n  {\n    \"front\": \"What is a named route?\",\n    \"back\": \"A route identified by a string name.  Useful for complex navigation schemes. Defined in `routes:` in `MaterialApp`.\"\n  },\n  {\n    \"front\": \"What does 'Navigator.pop(context)' do?\",\n    \"back\": \"Removes the current route from the navigation stack and returns to the previous screen.\"\n  },\n  {\n    \"front\": \"How to handle user tap events?\",\n    \"back\": \"Wrap widget with `GestureDetector` or `InkWell`. Use `onTap` property.\"\n  },\n  {\n    \"front\": \"What is the 'mainAxisAlignment' property in Row/Column for?\",\n    \"back\": \"Controls how the children are placed along the main axis (horizontally for Row, vertically for Column).\"\n  },\n  {\n    \"front\": \"What is the 'crossAxisAlignment' property in Row/Column for?\",\n    \"back\": \"Controls how the children are aligned in cross axis (vertically for Row, horizontally for Column).\"\n  }\n]\n```"},
      ],
    },
  ],
});


// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
