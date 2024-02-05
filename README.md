# Framer Motion Playground

## Deployment:
https://framer-motion-playground-swart.vercel.app

## Project Overview

This project is a collection of reusable animation modules, designed to simplify the process of implementing animations in web applications. It leverages Framer Motion, a powerful library for React, to create engaging and interactive UI elements.

### Key Features

- **Reusable Animation Components**: Includes `MotionRotate`, `MotionScale`, `MotionSlide`, and `MotionFade` components for easy animation implementation.
- **Versatility**: These components can be applied to various elements including SVGs, enhancing the visual appeal and interactivity of the UI.
- **Customizable**: Each component is customizable with properties like duration, delay, and easing, allowing for tailored animation effects.

## Example: MotionRotate Component

The `MotionRotate` component is designed to provide a smooth rotation animation. It accepts several props to control the animation:

- `children`: The React nodes to be animated.
- `duration`: The duration of the animation in milliseconds.
- `delay`: (Optional) Delay before the animation starts, in milliseconds.
- `easing`: Defines the pacing of the animation. Various options like `linear`, `easeIn`, `easeOut`, etc., are available.
- `trigger`: A boolean to control the start of the animation.
- `initialTurns`: The initial state of rotation in degrees.
- `finalTurns`: The final state of rotation in degrees.

### Usage

```jsx
<MotionRotate
  duration={1000}
  delay={100}
  easing="easeInOut"
  trigger={true}
  initialTurns={0}
  finalTurns={360}
>
  <YourComponent />
</MotionRotate>
```
This component provides an easy way to add rotation effects to elements in your application. Similarly there are also MotionScale, MotionFade, and MotionSlide conponents

## To get started with this project:

1. Clone the repository.
1. Install dependencies using npm install.
1. Run the development server with npm run dev.

### Prerequisites

- Node.js

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jacklion710/framer-motion-playground.git
   cd framer-motion-playground
   npm install
   npm run dev
   ```

2. **Install Dependencies**
Run the following command to install the necessary dependencies:

    ```bash
    npm install
    ```
3. **Run the Development Server**
Start the development server with:

    ```bash
    npm run dev
    ```

### Built With
React - A JavaScript library for building user interfaces
Framer Motion -  powerful animation library for React
Chakra UI - A simple, modular, and accessible component library that gives you the building blocks you need to build your React applications.

Feel free to contribute to this project by submitting pull requests or opening issues for any bugs or enhancements.