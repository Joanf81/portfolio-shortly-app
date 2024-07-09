import LinkBox from "./LinkBox";

export interface LinkData {
  longLink: string,
  shortLink: string
}

export type LinkList = Array<LinkData>

interface LinksContainerProps {
  linksList: LinkList
}

export default function LinksContainer({linksList}: LinksContainerProps) {
  return (
    <ul className="flex flex-col space-y-4 w-full mt-6 ">
      {linksList.map(({longLink, shortLink}) => {
        return <LinkBox longLink={longLink} shortLink={shortLink} />;
      })}
    </ul>
  );
}
