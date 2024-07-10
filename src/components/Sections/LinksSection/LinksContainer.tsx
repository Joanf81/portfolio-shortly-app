import LinkBox from "./LinkBox";

export interface LinkData {
  longLink: string;
  shortLink: string;
}

export type LinkList = Array<LinkData>;

interface LinksContainerProps {
  linksList: LinkList;
}

export default function LinksContainer({ linksList }: LinksContainerProps) {
  return (
    <ul className="flex flex-col-reverse w-full mt-6 ">
      {linksList.map(({ longLink, shortLink }, index) => {
        return (
          <LinkBox key={index} longLink={longLink} shortLink={shortLink} />
        );
      })}
    </ul>
  );
}
