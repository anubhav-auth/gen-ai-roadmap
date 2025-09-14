# Calculator App

A modern, responsive web-based calculator application built with HTML, CSS, and JavaScript.

![Calculator Screenshot](https://github.com/user-attachments/assets/e94c045c-1a5f-4b20-8ffc-d355759f2840)

## Features

- **Basic Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Decimal Number Support**: Handle floating-point calculations
- **Keyboard Input**: Use your keyboard for faster input
- **Error Handling**: Prevents division by zero with user-friendly alerts
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with smooth animations

## How to Use

### Mouse/Touch Input
1. Click on number buttons (0-9) to input numbers
2. Click on operator buttons (+, -, ×, ÷) to select operations
3. Click the equals (=) button to calculate the result
4. Use the Clear (C) button to reset the calculator
5. Use the Backspace (⌫) button to delete the last entered character

### Keyboard Input
- **Numbers**: Press 0-9 keys
- **Decimal**: Press the period (.) key
- **Operations**: Press +, -, *, / keys
- **Calculate**: Press Enter or = key
- **Clear**: Press Escape key
- **Delete**: Press Backspace key

## File Structure

```
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and responsive design
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Running the Application

1. Clone this repository
2. Open `index.html` in any modern web browser
3. Or serve it using a local web server:
   ```bash
   python3 -m http.server 8000
   # Then open http://localhost:8000 in your browser
   ```

## Technical Details

- **Pure Frontend**: No backend dependencies required
- **Responsive**: Mobile-first design with CSS Grid
- **Cross-browser Compatible**: Works in all modern browsers
- **Accessibility**: Keyboard navigation support
- **Error Prevention**: Input validation and error handling

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Development

The calculator uses vanilla JavaScript with no external dependencies, making it lightweight and easy to maintain. The code is organized into clear functions for easy modification and extension.