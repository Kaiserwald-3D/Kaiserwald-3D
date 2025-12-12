export const campGeojson = {
  type: "FeatureCollection",
  features: [
    {
      //North-West WT
      type: "Feature",
      properties: {
        message: "",
        name: "View from north-western watchtower",
        model: "built-floor-plan-24-nov_optimized.glb",
        altmodel: "built-floor-plan-24-nov_optimized.glb",
        camPos: {
          x: 53.18080135540286,
          y: 8.223571501497474,
          z: -309.6466190054126,
        },
        lookAt: {
          x: 150.4221919343923,
          y: 1.4226596460717715e-8,
          z: -316.8744316624602,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",

        description: `
        <p>
          The northern entry gate of the camp. The image, likely taken from the North-Western watchtower,
          shows someone close to it, which indicates that the size of this gate was significantly
          taller than the average person.
        </p>
        <img src="./images/gate.jpg" style="width:100%; margin-top:10px; border-radius:6px;" />
        `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.129478624126023, 56.99844636126565],
      },
    },
    {
      //South-West WT
      type: "Feature",
      properties: {
        message: "View from Southern Watchtower",
        model: "built-floor-plan-24-nov.glb",
        altmodel: "built-floor-plan-24-nov.glb",
        name: "Southern overview",
        camPos: {
          x: 120.73677775694458,
          y: 6.483908936371626,
          z: -95.95562384317263,
        },
        lookAt: {
          x: 119.59946738597026,
          y: 3.4755213993393013,
          z: -117.56532369609958,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description: `
        <p>
          An overview of the camp from the south. Likely taken from a watchtower.
        </p>
        <img src="./images/south.jpg" style="width:100%; margin-top:10px; border-radius:6px;" />
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.130618906590996, 56.99639811315524],
      },
    },
    {
      //Man-south
      type: "Feature",
      properties: {
        message: "",
        name: "Southern part of the camp",
        model: "built-floor-plan-24-nov.glb",
        altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 140.01527514425194,
          y: 2.695317028690933,
          z: -154.91066513256203,
        },
        lookAt: {
          x: 168.18211758997438,
          y: 2.0997476866129583,
          z: -195.08972110082658,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description: `
        <p>
          This image was likely taken from the southern part of the camp, facing east. The identity of the man in the picture is unknown.
        </p>
        <img src="./images/man.jpg" style="width:100%; margin-top:10px; border-radius:6px;" />
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.131148483353513, 56.99692009478173],
      },
    },
    {
      //Center Barracks
      type: "Feature",
      properties: {
        message: "",
        name: "Barracks",
        model: "built-floor-plan-24-nov.glb",
        altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 150.90612416793377,
          y: 1.673956601190183,
          z: -195.02633914727673,
        },
        lookAt: {
          x: 158.17197187505576,
          y: 1.7095106542712748,
          z: -212.67211204741255,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description: `
        <p>
          The barracks were called <i>blocks</i>. Each had a <i>Block Elder</i> - these were part of the <i>kapos</i>, a group of criminals from German jails and other Nazi collaborators, whose duty was the supervision of the prisoners. Inmates from the camp describe them to have been worse than the Nazi guards, as they repeatedly engaged in beatings and torture. <br><br>"What the SS couldn't do and didn't do to hurt us, these criminals would."
        </p>
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Strauss, Berthold. Interview 3964. Segment 26-28. Interview by Rachelle Cohen. <i>Visual History Archive</i>, USC Shoah Foundation, 13 July 1995. https://vha.usc.edu/testimony/3964. Accessed 09 Dec 2025.
          <br><br>Basner, Yakob. Interview 6277. Segment 76-78. Interview by Mary Kasdan. <i>Visual History Archive</i>, USC Shoah Foundation, 04 December 1995. https://vha.usc.edu/testimony/6277. Accessed 09 Dec 2025.
        </p>
        <img src="./images/fence.jpg" style="width:100%; margin-top:10px; border-radius:6px;" />
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.13127250201603, 56.997417814415],
      },
    },
    {
      //Latrine
      type: "Feature",
      properties: {
        message: "",
        name: "Latrine",
        model: "built-floor-plan-24-nov.glb",
        altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 69.94753150533512,
          y: 1.2671190961544196,
          z: -310.28013323305976,
        },
        lookAt: {
          x: 139.8426451272773,
          y: 3.1045929708695454,
          z: -307.6277242424484,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description: `
        <p>
          This small shack likely served as the latrine. Former prisoner and Holocaust survivor Yakob Basner, described it as such: “It was a filthy place, where you could not only sit, but stand down. And you were glad that you didn’t fall in the hole”.  
          <br><br>Yakob told his story of how he was found standing with his feet on the toilet by <i>Block Elder Filsinger</i> (part of the <i>kapos</i>, criminal groups tasked with supervising the inmates). As punishment, he received 25 lashes. 
          <br><br>“I gritted my teeth, determined not to cry out. In my head I counted 'one, two, three, four'. My silence infuriated him … and with every blow, the stick came down harder”. 
          <br><br>However, Yakob was never informed by anyone prior, that standing on the toilet was not allowed: “He asked me ‘Why did you do it? I announced yesterday that nobody has to stay on the toilet.’ I said ‘I’m not from your block, I am from … block number three, your block is number one’. So he began to laugh and he said ‘Well, tough luck.’”
        </p>
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Basner, Yakob. Interview 6277. Segment 84-90. Interview by Mary Kasdan. <i>Visual History Archive</i>, USC Shoah Foundation, 04 December 1995. https://vha.usc.edu/testimony/6277. Accessed 09 Dec 2025.
        </p>
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.130058197366935, 56.9984069656561],
      },
    },
    {
      //Fence
      type: "Feature",
      properties: {
        message: "",
        name: "Barbed-Wire Fence",
        model: "built-floor-plan-24-nov.glb",
        altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 104.96093976204868,
          y: 0.8584010497591839,
          z: -229.94445721322597,
        },
        lookAt: {
          x: 106.9254075541646,
          y: 1.0164338804657005,
          z: -229.91548921248034,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description:
          "Inmates in the camp were seperated by gender. They would often meet here and communicate through the barbed-wire fence.",
      },
      geometry: {
        type: "Point",
        coordinates: [24.130498292683797, 56.99763985688935],
      },
    },
    {
      //infirmary
      type: "Feature",
      properties: {
        message: "",
        name: "Infirmary",
        model: "built-floor-plan-24-nov.glb",
        altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 106.50273343316991,
          y: 5.161706612458672,
          z: -236.9281262902046,
        },
        lookAt: {
          x: 106.29360407071597,
          y: 2.957776526340501,
          z: -249.63324146614852,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description: `
        <p>
          This building likely served as the infirmary. While prisoners would get treated here, many would not return. As such, prisoners would not report illnesses and injuries to the guards.
        </p>
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Strauss, Berthold. Interview 3964. Segment 26-28. Interview by Rachelle Cohen. <i>Visual History Archive</i>, USC Shoah Foundation, 13 July 1995. https://vha.usc.edu/testimony/3964. Accessed 09 Dec 2025.
        </p>
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.130547457097435, 56.99787956179313],
      },
    },
  ],
};
