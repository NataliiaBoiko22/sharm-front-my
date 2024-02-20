export type BannerItem = {
  id: number;
  title: string;
  phrase: string;
  additionalPhrase: string;
  description: string;
  image: string;
  infoPath: string;
};

export const bannerData: BannerItem[] = [
  {
    id: 1,
    title: "Carousel",
    phrase: "Найкращі пропозиції цього літа",
    additionalPhrase: "для вашої краси",
    description:
      "Explore the beauty of this majestic product  range. Breathtaking quality await you.",
    image: "/imageForBanner1.png",
    infoPath: "/info/photo1",
  },
  {
    id: 2,
    title: "Carousel2",
    phrase: "Better for YOU",
    additionalPhrase: "для вашої краси",
    description:
      "Explore the beauty of this majestic product  range. Breathtaking quality await you.",
    image: "/imageForBanner2.jpg",
    infoPath: "/info/photo2",
  },
  {
    id: 3,

    title: "Carousel3",
    phrase: "Better for YOU TOO",
    additionalPhrase: "для вашої краси",
    description:
      "Explore the beauty of this majestic product  range. Breathtaking quality await you.",
    image: "/imageForBanner3.jpg",
    infoPath: "/info/photo3",
  },
  {
    id: 4,
    title: "Carousel4",
    phrase: "Better for YOUR MAKEUP",
    additionalPhrase: "для вашої краси",
    description:
      "Explore the beauty of this majestic product  range. Breathtaking quality await you.",
    image: "/imageForBanner4.jpg",
    infoPath: "/info/photo4",
  },
  {
    id: 5,
    title: "Carousel5",
    phrase: "Better CHOISE",
    additionalPhrase: "для вашої краси",
    description:
      "Explore the beauty of this majestic product  range. Breathtaking quality await you.",
    image: "/imageForBanner5.jpg",
    infoPath: "/info/photo5",
  },
];
