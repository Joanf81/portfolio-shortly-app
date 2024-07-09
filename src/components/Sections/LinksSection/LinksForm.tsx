import { useState } from "react";

import Button from "../../HtmlElements/Button";
import ErrorMessage from "./ErrorMessage";

interface LinksFormProps {
  handleCreateLink(link: string): void
}

export default function LinksForm({handleCreateLink}: LinksFormProps) {
  const urlPatternRegExp = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

  const [link, setLink] = useState<string>("");
  const [emptyLinkError, setEmptyLink] = useState<boolean>(false);
  const [invalidLinkError, setInvalidLinkError] = useState<boolean>(false);

  function handleClick() {
    if (link) {
      if (urlPatternRegExp.test(link)) {
        handleCreateLink(link);

        setInvalidLinkError(false);
        setEmptyLink(false);
        setLink("");
      } else {
        setInvalidLinkError(true);
        setEmptyLink(false);
      }
    } else {
      setInvalidLinkError(false);
      setEmptyLink(true);
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLink(event.target.value);
  }

  return (
    <div className="relative w-full p-10 bg-darkViolet rounded-lg ">
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0">
        <input type="text" placeholder="Shorten a link here" value={link} onChange={handleInputChange} className="p-4 rounded-lg w-full placeholder:text-yellow-500 focus:outline-none"/>
        <Button square onClick={handleClick} className="px-8 w-full md:w-48">
          Shorten It!
        </Button>
      </div>
      {emptyLinkError && <ErrorMessage className="absolute mt-2">Please enter something</ErrorMessage>}
      {invalidLinkError && <ErrorMessage className="absolute mt-2">Please enter a valid URL</ErrorMessage>}
    </div>
  );
}
