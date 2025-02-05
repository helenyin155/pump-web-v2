import Head from "next/head";

import Lucy from "../public/members/lucy-zhao.png";
import Asma from "../public/members/asma-khamis.png";
import Shiro from "../public/members/shiro-puwa.png";
import RachelLin from "../public/members/rachel-lin.png";
import Dhruv from "../public/members/dhruv-dhall.png";
import MarkShort from "../public/members/mark-short.png";
import Brooklyn from "../public/members/brooklyn-wiggins.png";
import YiAn from "../public/members/yi-an-wang.jpeg";
import Camille from "../public/members/camille-eamon.jpeg";
import PlaceholderGraphic from "../public/home/impact-section-graphic-3.svg";
import { Title } from "../components";
import { PageLayout } from "../sections/hoc";
import { ValueSection, BoardSection, QuickFacts } from "../sections/about";
import { baseTheme } from "../theme";

const nationalBoard = [
  {
    name: "Lucy Zhao",
    avatar: Lucy,
    position: "Founder & President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
  },
  {
    name: "Asma Khamis",
    avatar: Asma,
    position: "VP of Operations",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Shiro Puwa",
    avatar: Shiro,
    position: "VP of Human Resources",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Rachel Lin",
    avatar: RachelLin,
    position: "VP of Communications",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.turquoise,
  },
];

const torontoBoard = [
  {
    name: "Dhruv Dhall",
    avatar: Dhruv,
    position: "President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
  },
  {
    name: "Andreea Murariu",
    position: "VP of External Affairs",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.yellow,
  },
  {
    name: "Helen Yin",
    position: "VP of Internal Affairs",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
  {
    name: "Emily Hu",
    position: "Secretary",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.turquoise,
  },
];

const vancouverBoard = [
  {
    name: "Aneeya Johal",
    position: "President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
  },
  {
    name: "Kaya Januszewska",
    position: "VP of External Affairs",
    imageWidth: 250,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Mark Short",
    avatar: MarkShort,
    position: "VP of Internal Affairs",
    imageWidth: 260,
    imageHeight: 230,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
];

const calgaryBoard = [
  {
    name: "Brookyln Wiggins",
    avatar: Brooklyn,
    position: "President",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
  },
  {
    name: "Yi An (Annie) Wang",
    avatar: YiAn,
    position: "Vice President",
    imageWidth: 250,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Camille Eamon",
    avatar: Camille,
    position: "Vice President",
    imageWidth: 260,
    imageHeight: 210,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
];

const ottawaBoard = [
  {
    name: "Ashley Lam",
    position: "Senior Board",
    imageWidth: 240,
    imageHeight: 220,
    cardHeight: 340,
  },
  {
    name: "Richard Xi",
    position: "Senior Board",
    imageWidth: 250,
    imageHeight: 220,
    cardHeight: 340,
    fontColor: baseTheme.colors.gold,
  },
  {
    name: "Joshua Cheruvathur",
    position: "Senior Board",
    imageWidth: 260,
    imageHeight: 210,
    cardHeight: 340,
    fontColor: baseTheme.colors.brightBlue,
  },
];

export default function About() {
  return (
    <div>
      <Head>
        <title>PuMP | About Us</title>
      </Head>
      <PageLayout>
        <Title
          title="About Us"
          description="Get to know the PuMP family."
          image={PlaceholderGraphic}
        />
        <ValueSection />
        <QuickFacts />
        <BoardSection
          board="National Board"
          boardDescription="Est. 2020 | 74 members"
          boardMembers={nationalBoard}
        />
        <BoardSection
          board="Toronto Board"
          boardDescription="Est. 2018 | 50 members"
          boardMembers={torontoBoard}
          align="right"
        />
        <BoardSection
          board="Vancouver Board"
          boardDescription="Est. 2020 | 30 members"
          boardMembers={vancouverBoard}
        />
        <BoardSection
          board="Calgary Board"
          boardDescription="Est. 2020 | 50 members"
          boardMembers={calgaryBoard}
          align="right"
        />
        <BoardSection
          board="Ottawa Board"
          boardDescription="Est. 2021 | 5 Members"
          boardMembers={ottawaBoard}
        />
      </PageLayout>
    </div>
  );
}
