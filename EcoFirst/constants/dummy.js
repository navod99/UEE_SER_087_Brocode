import assets from "./assets";

const NFTData = [
  {
    id: "NFT-01",
    name: "How is Sri Lanka adapting to Climate Change?",
    creator: "Isuru Wijesuriya",
    description:
      "Planning for a Climate Resilient Island, Srilanka's first statutory National Adaptation Framework (NAF) was approved in 2018. The NAF sets out the national strategy to reduce the vulnerability of the country to the negative effects of climate change and to avail of any positive impacts. The NAF was developed under the Climate Action and Low Carbon Development Act 2015 and prepared in the context of the 2013 EU strategy on adaptation to climate change.  ",
    image: assets.nft01,
    bids: [
      {
        id: "BID-11",
        name: "Jessica Williams",
        price: 'This includes climate-smart development, primarily by empowering local small landholders, ensuring food and water security, biodiversity conservation, sustainable biomass energy production, and increased disaster risk reduction, preparedness, and management.',
        image: assets.person02,
        date: "December 12, 2019",
      },
      {
        id: "BID-12",
        name: "Tom David",
        price: "Increase the quality of nature-based and green tourism. Maintain the population of endemic species. Reduce emissions from deforestation. Promote sustainable agriculture and energy practices.",
        image: assets.person03,
        date: "December 27, 2019",
      },
      {
        id: "BID-13",
        name: "Rosie Wong",
        price: "As a small island and a developing nation, Sri Lanka is highly vulnerable to the adverse effects of climate change.",
        image: assets.person04,
        date: "December 31, 2019",
      },
    ],
  },
  {
    id: "NFT-02",
    name: "Are plastic or glass bottles better for the environment? ",
    creator: "Siti Nurhaliza",
    price: 7.25,
    description:
      "Glass is a sustainable, fully recyclable material which provides great environmental benefits such as contributing to mitigating climate change and saving precious natural resources.",
    image: assets.nft02,
    bids: [
      {
        id: "BID-21",
        name: "Jessica Tan",
        price: "Researchers at the University of Southampton in England set out to determine which common beverage containers cause the most and least harm to the environment. They found that glass is actually more detrimental than plastic because it is mined from rare materials and requires more fossil fuels to produce and ship.",
        image: assets.person04,
        date: "December 12, 2019",
      },
    ],
  },
  {
    id: "NFT-03",
    name: "How has global warming affected Sri Lanka?",
    creator: "Kevin Petersen",
    price: 95.25,
    description:
      "25 percent of the population reside in vulnerable to sea level areas (within 1 km of the coast). In Sri Lanka, the coastal zones are the most affected by the uncertain rates of sea-level rise",
    image: assets.nft03,
    bids: [
      {
        id: "BID-31",
        name: "Jessica Tan",
        price: "Extreme heat threatens human health and living standards, particularly for outdoor laborers in urban areas without adequate cooling systems.",
        image: assets.person02,
        date: "December 12, 2019",
      },
      {
        id: "BID-32",
        name: "Ralph Lauren",
        price: "To bring oceans into the climate fight. nature-based solutions such as mangrove planting and coral reef restoration could help to protect coastlines. The success of mangrove restoration efforts may depend heavily on engagement with local stakeholders,",
        image: assets.person03,
        date: "December 27, 2019",
      },
    ],
  },
  {
    id: "NFT-04",
    name: "What topics will be discussed in the next general club meeting?",
    creator: "Max Flecher",
    price: 25,
    description:
      "Setting and tracking goals shouldn’t be taken lightly. Goal-setting should be conducted at the beginning of the year and act as a roadmap or blueprint for the rest of the year. ",
    image: assets.nft04,
    bids: [
      {
        id: "BID-41",
        name: "Jessica Tan",
        price: "Discussing employee performance is second nature to most. But these conversations aren’t held as frequently as they could be. A lot can happen in a year, let alone a quarter, a month, or a week.",
        image: assets.person02,
        date: "December 12, 2019",
      },
    ],
  },
  {
    id: "NFT-07",
    name: "How does renewable energy help protect the environment?",
    creator: "Alex Martin",
    price: 18.25,
    description:
      "Generating energy that produces no greenhouse gas emissions from fossil fuels and reduces some types of air pollution and Diversifying energy supply and reducing dependence on imported fuels",
    image: assets.nft07,
    bids: [],
  },
];

export { NFTData };
