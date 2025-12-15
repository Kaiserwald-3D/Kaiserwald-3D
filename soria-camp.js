export const campGeojson = {
  type: "FeatureCollection",
  features: [
    {
      //North-West WT
      type: "Feature",
      properties: {
        message: "",
        name: "View from north-western watchtower",
        model: "KW-final-v3.glb",
        // altmodel: "built-floor-plan-24-nov_optimized.glb",
        camPos: {
          x: 58.59446986310261,
          y: 8.468374095982815,
          z: -309.5947808442536,
        },
        lookAt: {
          x: 128.89827502114295,
          y: 1.5192517309271744e-8,
          z: -338.3887150907276,
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
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Image: Gosudarstvennyi arkhiv Rossiiskoi Federatsii (GARF), Signature: 8409/49
        </p>
        `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.13014263896673, 56.99855916265099],
      },
    },

    {
      //Watchtower
      type: "Feature",
      properties: {
        message: "",
        name: "Watchtower up close",
        model: "KW-final-v3.glb",
        // altmodel: "built-floor-plan-24-nov_optimized.glb",
        camPos: {
          x: 58.59446986310261,
          y: 8.468374095982815,
          z: -309.5947808442536,
        },
        lookAt: {
          x: 128.89827502114295,
          y: 1.5192517309271744e-8,
          z: -338.3887150907276,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",

        description: `
        <p>
          These were used as a way to observe the prisoners and ensure nobody escaped.
        </p>
        <img src="./images/WT.png" style="width:100%; margin-top:10px; border-radius:6px;" />
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Image: Gosudarstvennyi arkhiv Rossiiskoi Federatsii (GARF), Signature: 8409/47
        </p>
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
        model: "KW-final-v3.glb",
        // altmodel: "built-floor-plan-24-nov.glb",
        name: "Southern overview",
        camPos: {
          x: 119.8488909094241,
          y: 6.3345392444775985,
          z: -96.4858241539292,
        },
        lookAt: {
          x: 99.64375120149137,
          y: 1.048115935793049,
          z: -150.77403572780457,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description: `
        <p>
          An overview of the camp from the south. Likely taken from a watchtower.
        </p>
        <img src="./images/south.jpg" style="width:100%; margin-top:10px; border-radius:6px;" />
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Image: Latvian State Historical Archives, Fonds P-132, Inventory 28, File 75, Page 65
        </p>
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
        model: "KW-final-v3.glb",
        // altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 139.82559937548447,
          y: 2.40283571425362,
          z: -159.2427028851049,
        },
        lookAt: {
          x: 171.05371429240924,
          y: 1.7479443632797997,
          z: -189.7117009816203,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description: `
        <p>
          This image was likely taken in the southern part of the camp, facing east. The identity of the man in the picture is unknown.
        </p>
        <img src="./images/man.jpg" style="width:100%; margin-top:10px; border-radius:6px;" />
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Image: Gosudarstvennyi arkhiv Rossiiskoi Federatsii (GARF), Signature unknown
        </p>
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
        model: "KW-final-v3.glb",
        // altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 154.57182709399427,
          y: 1.4069111292172078,
          z: -199.94754441336917,
        },
        lookAt: {
          x: 159.26207490261118,
          y: 1.815325549301852,
          z: -210.6305308994332,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_3d.png",
        description: `
        <p>
          The barracks were called <i>blocks</i>. Each had a <i>Block Elder</i> - these were part of the <i>kapos</i>, a group of criminals from German jails and other Nazi collaborators, whose duty was the supervision of the prisoners.
        </p>
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Basner, Yakob. Interview 6277. Segment 76-78. Interview by Mary Kasdan. <i>Visual History Archive</i>, USC Shoah Foundation, 04 December 1995. https://vha.usc.edu/testimony/6277. Accessed 09 Dec 2025.
        </p>
        <img src="./images/fence.jpg" style="width:100%; margin-top:10px; border-radius:6px;" />
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Image: Latvian State Historical Archives (LVVA), Fonds P-132, Inventory 28, File 75, Page 62
        </p>
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.13127250201603, 56.997417814415],
      },
    },

    {
      //Barracks Testimony
      type: "Feature",
      properties: {
        message: "",
        name: "Inside the barracks",
        icon: "./icons/icon_story.png",
        iconSize: [30, 30],
        link: "./images/inside.jpg", // Image link
        caption:
          "Image Source: Latvian State Historical Archives (LVVA), Fonds P-132, inventory 28, file 75, page 54",
        description: `
        <p>
          This is an image from inside the barracks, taken after the camp's evacuation and capture by the soviets. 
          <br><br>The suffering inflicted upon the Jewish victims of the camp was not only done by the hands of SS guards. The <i>kapos</i> would often prove to be even more cruel. 
          <br><br>"What the SS couldn't do and didn't do to hurt us, these criminals would."
        </p>
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Basner, Yakob. Interview 6277. Segment 91-94. Interview by Mary Kasdan. <i>Visual History Archive</i>, USC Shoah Foundation, 04 December 1995. https://vha.usc.edu/testimony/6277. Accessed 09 Dec 2025.
        </p>
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.131402128977896, 56.99753098788133],
      },
    },

    {
      //Latrine
      type: "Feature",
      properties: {
        message: "",
        name: "Latrine",
        model: "KW-final-v3.glb",
        // altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 71.60058329978357,
          y: 1.9975989121580973,
          z: -311.6995857874189,
        },
        lookAt: {
          x: 78.24643224200179,
          y: 1.0410513176167713,
          z: -310.09501880554996,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_story.png",
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
        model: "KW-final-v3.glb",
        // altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 101.23900368286202,
          y: 1.027016985698823,
          z: -237.08516213983452,
        },
        lookAt: {
          x: 147.5249711449844,
          y: 2.003325463065164,
          z: -232.58572083348278,
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
        model: "KW-final-v3.glb",
        // altmodel: "built-floor-plan-24-nov.glb",
        camPos: {
          x: 98.33099881211126,
          y: 5.791441018912481,
          z: -244.4174558519997,
        },
        lookAt: {
          x: 100.4153749136121,
          y: 2.642603487399109,
          z: -256.72980578252987,
        },
        iconSize: [30, 30],
        icon: "./icons/icon_story.png",
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
