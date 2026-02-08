---
layout: page
title: Software Defined Radio Project
description: An RTL-SDR project implemented with a Raspberry Pi 5.
img: assets/img/SDR_1.jpg
importance: 4
category: academic
---

Built a standalone signal processing station using a **Raspberry Pi 5** and **RTL-SDR** hardware to decode and visualize various radio frequencies.

### Technical Implementation
**Aircraft Tracking**: Configured **tar1090** to track live Mode S aircraft signals, cross-verifying spatial data against FlightRadar24.

**IoT Data Interpretation**: Utilized **rtl_433** to intercept and decode data packets from local environmental sensors, capturing real-time humidity and temperature readings.

**Remote Management**: Established a headless operating environment using **Tailscale VPN** and **RealVNC**, allowing for secure remote monitoring.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/SDR_1.png" title="tar-1090" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/SDR_2.png" title="Antenna Setup" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left is the tar-1090 display from the Raspberry Pi5 on a remote desktop configuration. A detected plane is selected and its data is displayed. Right is the antenna setup on my deck used to search for aircraft telemetry.
</div>