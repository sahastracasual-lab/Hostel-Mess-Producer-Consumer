# Hostel Mess Producer Consumer

## Operating Systems Mini Project

### Project Overview
The Hostel Mess Token System demonstrates the Producer–Consumer problem using a shared buffer to manage mess tokens.

### Objectives
- Understand the Producer–Consumer problem.
- Demonstrate a bounded buffer with a capacity of five tokens.
- Demonstrate FIFO (First In, First Out) processing.
- Track generated tokens and students served.

### Technologies Used
- HTML
- CSS
- JavaScript

### How to Run
1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. Click **Generate Token** to add a token to the queue.
4. Click **Serve Next Token** to serve the oldest waiting token.
5. Click **Reset System** to restart the simulation.

### Producer–Consumer Concepts
- **Producer:** Generates mess tokens.
- **Shared Buffer:** Stores up to five waiting tokens.
- **Consumer:** Serves the oldest token first.
- **Bounded Buffer:** Prevents more than five tokens from being queued.

### Note
This project is a browser-based educational simulation. It illustrates Producer–Consumer concepts but does not implement actual operating-system threads or semaphores.
