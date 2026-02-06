---
layout: page
title: Conveyor Sorting System
description: 
img: assets/img/conveyor.png
importance: 1
category: academic
---

An ongoing project developing a color-based sorting mechanism for industrial simulation[cite: 4698, 4700].

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/conveyorfull.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    In lab conveyor belt demonstration setup.
</div>

# Implementation
**Firmware**: Written **strictly in C** to ensure real-time performance and direct register-level hardware control on the **ATmega2560**[cite: 4701, 4702].
**Hardware Interfacing**: Developed custom drivers for optical sensors to detect object characteristics and implemented logic to coordinate motor actuator timing for precise sorting[cite: 4702].