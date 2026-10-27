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
## C Implementation (Operating Systems)

The project includes a C implementation of the Producer–Consumer problem using POSIX threads, semaphores, and a mutex.

### Concepts Demonstrated
- **Producer thread:** Generates 10 mess tokens.
- **Consumer thread:** Serves the generated tokens.
- **Bounded buffer:** Holds a maximum of 5 tokens.
- **Empty semaphore:** Tracks available buffer slots.
- **Full semaphore:** Tracks available tokens.
- **Mutex lock:** Protects shared buffer access.
- **FIFO queue:** Ensures tokens are served in order.

### Requirements
- GCC compiler
- Linux or WSL with Ubuntu
- POSIX threads and semaphores

### Compile and Run

```bash
gcc producer_consumer.c -o producer_consumer -pthread
./producer_consumer
```

### Expected Result
The producer generates tokens, and the consumer serves them in FIFO order until all 10 tokens have been processed.

The producer and consumer run concurrently, so the order of their printed messages may vary.

