import { useState } from "react"

import LinksForm from "./LinksForm";
import LinksContainer, { LinkList } from "./LinksContainer"

const exampleLInks:LinkList = [
  {longLink: "https://www.example.com/7/12/example.php?r=23", shortLink: "https://rel.ink/gob3X9"},
  {longLink: "https://example.io/132245324-ab4fcd2-233.html", shortLink: "https://rel.ink/k4IKyk"},
  {longLink: "https://twitter.com/thisisanexample", shortLink: "https://rel.ink/gxOXp9"},
]

export default function LinksSection() {
  const [linkList, setLinkList] = useState<LinkList>(exampleLInks);

  function generateRandomShortLink(lenght: number): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let shortLink = "https://rel.ink/"

    for(let i=0; i < lenght; i++) {
      shortLink += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return shortLink;
  }

  function createLink(link: string) {
    setLinkList((previosLinkList) => {
      const newLink = {longLink: link, shortLink: generateRandomShortLink(6)};

      return [...previosLinkList, newLink];
    })
  }

  return (
    <section id="links" className="relative bg-gray-100 ">
      <div className="max-w-4xl mx-auto mt-20 p-6">
        <LinksForm handleCreateLink={createLink} />
        <LinksContainer linksList={linkList}/>
      </div>
    </section>
  );
}
