import sitSpotImg from "../assets/project-images/sit-spot.png";
import natureImg from "../assets/project-images/nature.png";
import mooseImg from "../assets/project-images/moose.png";
import climateImg from "../assets/project-images/climate-change.jpg";
import mindfulImg from "../assets/project-images/mindful-tech.jpg";
import rewildingImg from "../assets/project-images/rewilding.jpg";
const mockSavedArticles = [
  {
    _id: "mock1",
    title: "Nature makes you better",
    description: "...",
    publishedAt: "2019-02-19",
    url: "...",
    urlToImage: natureImg,
    source: { name: "NATIONAL GEOGRAPHIC" },
    keyword: "Nature",
    owner: "fake-user-id",
  },
  {
    _id: "mock2",
    title: "Grand Teton Renews Historic Crest Trail",
    description: "...",
    publishedAt: "2020-10-19",
    url: "...",
    urlToImage: mooseImg,
    source: { name: "NATIONAL PARKS TRAVELER" },
    keyword: "Parks",
    owner: "fake-user-id",
  },
  {
    _id: "mock3",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    description: "...",
    publishedAt: "2020-11-04",
    url: "...",
    urlToImage: sitSpotImg,
    source: { name: "TREEHUGGER" },
    keyword: "Wellbeing",
    owner: "fake-user-id",
  },
  {
    _id: "mock4",
    title: "How Cities Are Adapting to Climate Change",
    description:
      "Urban planners are implementing green roofs and coastal defenses as global temperatures rise.",
    publishedAt: "2023-06-15",
    url: "https://example.com/climate-cities",
    urlToImage: climateImg,
    source: { name: "URBAN REVIEW" },
    keyword: "Climate",
    owner: "fake-user-id",
  },
  {
    _id: "mock5",
    title: "The Rise of Mindful Technology",
    description:
      "Developers are building apps designed to promote mental health and digital wellness.",
    publishedAt: "2024-02-10",
    url: "https://example.com/mindful-tech",
    urlToImage: mindfulImg,
    source: { name: "TECH MINDS" },
    keyword: "Wellness",
    owner: "fake-user-id",
  },
  {
    _id: "mock6",
    title: "Rewilding Projects Transform European Landscapes",
    description:
      "Countries like Scotland and Romania are reintroducing native species to restore natural balance.",
    publishedAt: "2022-09-25",
    url: "https://example.com/rewilding",
    urlToImage: rewildingImg,
    source: { name: "EARTH VOICE" },
    keyword: "Environment",
    owner: "fake-user-id",
  },
];

export default mockSavedArticles;
