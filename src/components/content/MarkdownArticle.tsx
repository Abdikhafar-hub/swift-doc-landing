import Link from "next/link";

function inline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, index) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return part;
    const label = match[1];
    const href = match[2];
    if (!label || !href) return part;
    return (
      <Link key={`${part}-${index}`} href={href} className="font-semibold text-gold underline">
        {label}
      </Link>
    );
  });
}

export function MarkdownArticle({ body }: { body: string }) {
  const blocks = body.split(/\n{2,}/).filter(Boolean);

  return (
    <div className="space-y-6 text-[1.02rem] leading-[1.85] text-muted-foreground">
      {blocks.map((block) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={block} className="pt-5 font-display text-2xl font-extrabold text-foreground">
              {block.replace(/^## /, "")}
            </h2>
          );
        }
        if (block.startsWith("### ")) {
          return (
            <h3 key={block} className="pt-3 font-display text-xl font-bold text-foreground">
              {block.replace(/^### /, "")}
            </h3>
          );
        }
        if (block.startsWith("- ")) {
          return (
            <ul key={block} className="space-y-2 pl-5">
              {block.split("\n").map((item) => (
                <li key={item} className="list-disc">
                  {inline(item.replace(/^- /, ""))}
                </li>
              ))}
            </ul>
          );
        }
        return <p key={block}>{inline(block)}</p>;
      })}
    </div>
  );
}
