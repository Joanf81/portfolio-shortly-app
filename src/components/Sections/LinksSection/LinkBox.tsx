import Button from "../../HtmlElements/Button";

interface LinkBoxProps {
  longLink: string,
  shortLink: string
}

export default function LinkBox({longLink, shortLink}: LinkBoxProps) {
  function handleCopy() {
    navigator.clipboard.writeText(shortLink);
  }

  return (
    <li className="flex flex-col items-center p-6 bg-white rounded-lg md:flex-row md:justify-between md:space-x-4">
      <p className="font-bold">{longLink}</p>
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <p className="font-bold text-cyan">{shortLink}</p>
        <Button square sm onClick={handleCopy}>
          Copy
        </Button>
      </div>
    </li>
  );
}
