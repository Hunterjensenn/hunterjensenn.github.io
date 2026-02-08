---
layout: page
title: Traffic Light System
description: A real-time project simulating a traffic light system executed on an STM32F4Discovery board.
img: /assets/img/traffic_light.jpg
importance: 2
category: academic
---

{% include video.liquid path="assets/video/TLS.mp4" class="img-fluid rounded z-depth-1 mx-auto d-block" width="800" controls="true"  %}

This is an ongoing project for ECE 455 - Real Time Computer Systems at UVIC. The objective of the project is to implement the example shown in the above video on a breadboard with LEDs, shift registers, and the STM32F4Discovery board. Utilizing FreeRTOS features including tasks and queues, the project is required to move cars (green LEDs) across the board from left to right when the traffic light is green. 

# Key Features
**Potentiometer**: A potentiometer on the bread board will be polled by the microcontrollers ADC and used to adjust the flow rate of traffic. The time the traffic light is green is directly proportional to the flow rate, and the red light interval is inversely proportional to the flow.
    
 **74HC164 Shift Register**: Three shift registers are used to drive the 19 green LEDs from a serial bit stream input from the microcontroller representing the traffic. 

**Traffic Light**: Red, amber, and a green LED are used to simulate the traffic light.


