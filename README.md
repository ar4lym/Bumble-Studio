# Bumble-Studio
Pattern of Thought Website
The website for Pattern of Thought is a website where it allows players to learn more information about people
with OCD (Obsessive-compulsive disorder); such as explaining what OCD is like and allows players to dive into 
the immersive experiences that is prepared for them. 
In the website, it also showcases the leaderboard, showing which players have finished the VR game the quickest 
for each section and the overall game. Additionally, it also showcases your own personal time for the respective
experiences.
There is also an about us that showcases the team members that are involved in this project and made sure that
this game is possible due to them.


Include a comprehensive and professional writeup detailing: 

Data Types: 
Explain the choice of data types for each key node and their relevance to functionality. 
Data types that are recorded:
- Email (Used for user authentication and identification, linking players to their account) 
- Username
- Achievements
- Scene entry ( Time they took for each scene)

Data Structure: 
Elaborate on the design considerations, scalability, and how the structure supports 
real-time and large-scale usage. 

- Players
  - Information 
    - Achievements
      - Badges_SceneName
        - Description
        - Scene Name
        - Title
      -Email
    -Scene Entry
      -Scenename
        -Best Time
    -Username

And the For Ref picture i have sent to u
    

Application Data Flow: 
Describe how data is processed, stored, and retrieved within the application. 
Achievements - When player has one the specific gameplay in a set amount of requirements 
such as doing it all under 3 miniutes, the achievement will then be issued to them, it is stored under here.
It will be stored as the Scene name that they gotten the achievement. The achievement holds the scene that
they got it at, the name of the achievement called (E.g XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX), the title of the
achievement name (XXXXXXXXXXXXXXXXXXXXXXX)


Include snapshots or videos demonstrating: 
• Firebase RealTime Database and/or Storage in real-time. 
• Key functionalities of Firebase and authentication. 
• Application workflows and user interactions.


Design Process 
The website was designed to be visually appealing, responsive, and user-friendly. Each page 
was developed with a clear purpose and smooth navigation in mind:
• Login Page: 
    o Users can log in with email and password. 
    o Validation ensures empty or invalid fields are flagged. 
    o Linked to Firebase Authentication. 
• Sign Up Page: 
    o Users can create a new account with a username, email, and password. 
    o Form validation is implemented to prevent incomplete submissions. 
    o Integrated with Firebase Authentication to store user credentials. 
• About Us Page: 
    o Introduces the Team mission, goal, value, and team members. 
    o Engaging layout with hero banners and storytelling.
• Leaderboard Page: 
    o Shows top scene completers with rankings, usernames, scenes, and time. 
    o Includes filter buttons to display results by scene type. 
    o Fully responsive table for desktop and mobile devices.
• Home Page: 
    o Displays information about OCD.  
    o Clean, minimalist layout with monochrome backgrounds for visual appeal. 
    o Call-to-action buttons guide users to product pages or leaderboard.

Github URL -(https://github.com/ar4lym/Bumble-Studio)

Features 
• User Authentication: Login and Sign Up with Firebase. 
• Badges: View badges obtained from hitting the requirment while in game.
• Leaderboard: Live scene rankings with filtering options. 
• Responsive Design: Fully functional across desktop, tablet, and mobile devices. 
• Navigation: Collapsible hamburger menu for easy navigation on mobile. 

Technologies Used 
• Framework: Bootstrap 5 
• Database & Authentication: Firebase Realtime Database & Authentication 
• Charts & Visualization: Chart.js