export const geojson = {
  type: "FeatureCollection",
  features: [
    {
      //Monument
      type: "Feature",
      properties: {
        message: "",
        name: "Kaiserwald Memorial",
        icon: "./icons/icon_info.png",
        iconSize: [30, 30],
        //iconUrl: "",
        link: "./images/monument.png",
        caption: "Photo taken from Google Maps",
        description: `
        <p>
          Unveiled on 29th of June 2005 and designed by Latvian sculptor Solveiga Vasiljeva, this memorial honors the approximately 18.000 victims of Kaiserwald.
        </p>
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Source: <i> “Nazi Victim Memorial Unveiled.”</i> The Baltic Times, 29 June 2005, https://www.baltictimes.com/news/articles/12953. Accessed 09 Dec 2025.
        </p>
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.132358940176715, 56.99626328633221],
      },
    },

    {
      //Church
      type: "Feature",
      properties: {
        message: "",
        name: "Revelation of Christ Church",
        icon: "./icons/icon_info.png",
        iconSize: [30, 30],
        link: "./images/church.jpg", // Image link
        caption: "Photo taken from Wikipedia",
        description:
          "Eastern Orthodox church outside the camp, built in 1890. It was included in the hand-drawn map of the camp by the Soviets. Since the camp has since been demolished, this church is one the few currently existing reference points to its location. <br><br>Source: <i>Buildings and Structures in Rig: Churches in Riga, Museums in Riga, Places of Worship in Riga, Freedom Monument, Riga Zoo.</i> Riga: General Books. 2010. p. 204. ISBN 9781156071755.",
      },
      geometry: {
        type: "Point",
        coordinates: [24.132947222302818, 56.99644503349515],
      },
    },

    {
      //Railroad
      type: "Feature",
      properties: {
        message: "",
        name: "Railway west of the camp",
        icon: "./icons/icon_story.png",
        iconSize: [30, 30],
        link: "./images/train.png", // Image link
        caption: "Photo taken from Google Maps",
        description: `
        <p>
          Prisoners were be taken here for forced labor. Those who failed in their tasks would be killed on the spot.
          <br><br>"They would whip us. And who had fell down or lose his load, the dogs would catch him and kill them."
          <br><br>"They teared him apart. And the German were laughing."
        </p>
        <p style="font-size: 0.85em; color: #555;">
          <br><br>Basner, Yakob. Interview 6277. Segment 91-94. Interview by Mary Kasdan. <i>Visual History Archive</i>, USC Shoah Foundation, 04 December 1995. https://vha.usc.edu/testimony/6277. Accessed 09 Dec 2025.
        </p>
          `,
      },
      geometry: {
        type: "Point",
        coordinates: [24.130790667779138, 56.995917981343524],
      },
    },
  ],
};
