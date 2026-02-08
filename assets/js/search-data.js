// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "My professional and academic background.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This page contains a mixture of projects I have worked on during University, and my co-op work terms. There is a combination of individual and collaborative work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "projects-conveyor-sorting-system",
          title: 'Conveyor Sorting System',
          description: "An ongoing mechatronics course project developed in C on an ATmega2560 microcontroller.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/conveyor/";
            },},{id: "projects-pwm-signal-generation-and-monitoring-system",
          title: 'PWM Signal Generation and Monitoring System',
          description: "An embedded systems project in C on an STM32F0Discovery board.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ece355/";
            },},{id: "projects-software-defined-radio-project",
          title: 'Software Defined Radio Project',
          description: "An RTL-SDR project implemented with a Raspberry Pi 5.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sdr/";
            },},{id: "projects-traffic-light-system",
          title: 'Traffic Light System',
          description: "A real-time project simulating a traffic light system executed on an STM32F4Discovery board.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tls/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%65%6E%73%65%6E%68%75%6E%74%65%72%31%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/resume.pdf", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hunter-jensen-724274204", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
