export const johnCarterProfile = {
  profileCard: {
    name: "John Carter",
    handle: "@johncarter",
    role: "Immobiliary Agent",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    contactButtonLabel: "Contact me",
    copyUrl: "http://propertyx.com/@johncarter",
    contactDetails: [
      { label: "Email address", value: "property@johncarter.com", type: "email" },
      { label: "Phone number", value: "(414) 325 - 427", type: "phone" },
      { label: "Location", value: "San Francisco, CA", type: "location" },
      { label: "Position", value: "Immobiliary Agent", type: "position" },
    ],
  },
  about: {
    title: "About me",
    paragraphs: [
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
      "Quis faucibus massa sit egestas. Sit fermentum est ac pulvinar et sagittis sed sit ut. Quis faucibus aenean nibh vestibulum enim mi sit. Sollicitudin ultrices ultrices in ipsum urna fringilla massa leo. Sapien ultricies vitae rhoncus molestie purus. Urna urna dolor euismod porttitor et. Magna adipiscing dictum et adipiscing mollis feugiat.",
    ],
  },
  experience: {
    title: "My experience",
    intro:
      "Lorem ipsum dolor sit amet consectetur. Gravida elementum dolor semper felis pulvinar feugiat risus adipiscing dictum. Ultricies nec elementum nisi ut. Cras diam odio sed auctor pellentesque. Sit nisl ipsum id convallis tristique. Malesuada.",
    points: [
      "Morbi fringilla molestie magna sed dictum. Praesent.",
      "Cras mi purus, viverra vitae felis sit amet.",
      "Non mattis urna ex nec sem. Donec varius diam et suscipit venenati.",
      "Quisque euismod posuere lacus sit amet volutpat.",
    ],
  },
};

export const peterEndoProfile = {
  profileCard: {
    name: "Peter Endo",
    handle: "@peterendo",
    role: "Senior Property Consultant",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    cover:
      "https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1400&q=80",
    contactButtonLabel: "Contact me",
    copyUrl: "http://propertyx.com/@peterendo",
    contactDetails: [
      { label: "Email address", value: "hello@peterendo.com", type: "email" },
      { label: "Phone number", value: "(323) 904 - 118", type: "phone" },
      { label: "Location", value: "Los Angeles, CA", type: "location" },
      { label: "Position", value: "Senior Property Consultant", type: "position" },
    ],
  },
  about: {
    title: "About me",
    paragraphs: [
      "I help families and investors find high-value homes across California's growing neighborhoods. My approach is simple: understand your goals first, then match you with properties that make long-term sense.",
      "Over the last decade, I have worked with first-time buyers, relocation clients, and portfolio investors. I focus on transparent communication, realistic pricing strategy, and smooth end-to-end support from search to closing.",
    ],
  },
  experience: {
    title: "My experience",
    intro:
      "I specialize in residential sales, investment property consulting, and negotiation strategy in competitive markets.",
    points: [
      "Closed 220+ successful home transactions across California.",
      "Led pricing and negotiation strategy for premium urban listings.",
      "Supported international clients with end-to-end remote purchases.",
      "Built long-term client networks through referral-first service.",
    ],
  },
};

export const agents = [
  {
    slug: "john-carter",
    ...johnCarterProfile,
  },
  {
    slug: "peter-endo",
    ...peterEndoProfile,
  },
];

export const agentsBySlug = Object.fromEntries(
  agents.map((agent) => [agent.slug, agent]),
);
