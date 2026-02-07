---
layout: page
title: Conveyor Sorting System
description: An ongoing mechatronics course project developed in C on an ATmega2560 microcontroller.
img: assets/img/conveyor.png
importance: 1
category: academic
---

This is an ongoing project for MECH 458 - Mechatronics at UVIC. The project objective is to design an optimized sorting program in C which will sort a specified number of objects based on their material in under 60s. The system must sort four different types of material based on their reflectives: black plastic, white plastic, aluminum, and steel. Success of the project is determined by a combination of accuracy and speed. A specification of this project is that all libraries and drivers utilized must be developed by the team using them.

<div class="row">
    <div class="col-md-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/conveyorfull.png" title="Demonstration setup" class="img-fluid rounded z-depth-1 mx-auto d-block" width="600" max-width="600px" %}
    </div>
    <div class="col-md-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mech_model.png" title="System model" class="img-fluid rounded z-depth-1 mx-auto d-block" width="600" max-width="600px" %}
    </div>
</div>
<div class="caption">
    In lab conveyor belt demonstration setup.
</div>

# Hardware Components to be used
In addition to the below components, two push buttons are used in this project. A "pause" button will allow an LCD to display data about the quantity of each object sorted. A "ramp down" button will tell the system to finish sorting all queued items, then stop and display data about the items sorted. 

**Stepper motor**: The stepper motor rotates the bucket to align the correct section with its corresponding material at the end of the conveyor.

**DC motor**: Drives the belt allowing the objects to flow through the sensing stages.

**Hall-effect sensor**: Aids the intilization of the stepper motor to a starting position.

**Reflectivity sensor**: Identifies the material based on calibrated reflectivity properties.

**Optical sensor**: Detects when an object is in front of the reflectivity sensor.
