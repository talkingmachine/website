import fs from "fs";
import Markdown from "markdown-to-jsx";
import path from "path";

interface IPageParams {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: IPageParams) {
  const slug = (await params).slug;
  const filePath = path.join(process.cwd(), "/content", `${slug}.md`);
  const content = fs.readFileSync(filePath, "utf8");
  return (
    <Markdown
      options={{
        overrides: {
          code: SyntaxHighlightedCode,
        },
      }}
    >
      {content}
    </Markdown>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }, { slug: "first-post" }];
}
export const dynamicParams = false;
