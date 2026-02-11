---
permalink: /coding/
title: "Coding & Projects"
layout: page
---

# Coding Portfolio

### [Project # 1: Campus Parking System](https://github.com/williamromero11/Project-1)
The Campus Parking System is a C-based simulation that models parking operations across a university campus using dynamically allocated data structures and command-driven interaction. The system represents multiple parking garages, registered vehicles, and real-time occupancy, closely mirroring real-world parking management workflows.

This project demonstrates strong proficiency in core C programming concepts, including pointer arithmetic, multi-dimensional dynamic arrays, and manual memory management. A robust command-line interface allows users to manage garage capacity, register and remove vehicles, and query utilization statistics efficiently.

From a systems perspective, the project emphasizes correctness and performance. Key technical achievements include zero memory leaks verified with Valgrind, optimized string handling using exact-size allocations, and a modular program architecture that cleanly separates data structures, business logic, and input/output responsibilities.

### [Project # 2: Traffic Fine Management System (BST)](https://github.com/williamromero11/Project-2)
The Traffic Fine Management System is a C program that simulates municipal traffic violation tracking using a Binary Search Tree (BST) as its core data structure. Each node represents a vehicle owner and associated fine data, enabling efficient organization and retrieval of records.

This project highlights advanced use of recursive algorithms, pointer-based tree structures, and dynamic memory allocation. The system provides a full command-line interface that supports inserting new records, updating fines, searching for owners, and generating analytical summaries based on tree traversal.

Technically, the project achieves O(log n) average-case performance for key operations and implements proper recursive memory deallocation to prevent leaks. Its modular design separates BST operations from business logic and user interaction, demonstrating clean abstraction and maintainable C code.

### [Project # 3: Nile Dot Com E-Store Simulation (Event-Driven GUI)](https://github.com/williamromero11/Project-3)
The Nile Dot Com E-Store Simulation is a Java-based standalone GUI application that models an online retail system using event-driven programming principles. Built with Java Swing and structured around a model–view–controller (MVC) design, the application simulates inventory management, shopping cart behavior, and order processing.

The project showcases advanced Java concepts such as GUI event handling, object-oriented design, and file I/O. Users interact with a graphical interface to browse products, place orders, and generate transaction logs that persist across application sessions.

Notable technical accomplishments include thread-safe CSV file operations, dynamic GUI state updates, strict separation of business logic from the presentation layer, and comprehensive input validation and error handling. The result is a stable, user-friendly simulation that mirrors real-world e-commerce workflows.

### [Project # 4: Train Yard Dispatch Simulator](https://github.com/williamromero11/Project-4)
The Train Yard Dispatch Simulator is a concurrent Java application that models the movement of multiple trains through a shared switch yard under Precision Scheduled Railroading (PSR)-inspired constraints. Each train operates as an independent task and must acquire exclusive control of a specific sequence of track switches before traversing the yard.

This project focuses heavily on concurrency, synchronization, and deadlock avoidance. Trains are executed using an ExecutorService with a fixed thread pool, while shared switch resources are protected using ReentrantLock objects and non-blocking tryLock() acquisition. To prevent deadlock, each train strictly follows an ordered lock acquisition strategy and releases all held locks if any required switch is unavailable, retrying after a randomized backoff period.

The simulator reads its configuration from external CSV files defining the train fleet and yard topology, allowing the simulation to be easily reconfigured without code changes. Trains with invalid inbound-to-outbound routes are correctly identified and placed on permanent hold. A complete execution log is produced, followed by a final status report summarizing each train’s outcome. This project demonstrates strong mastery of Java concurrency, resource coordination, and real-world systems modeling.


