import { ReactLike } from "./createElement";

export function renderInHTMLDocument(e: JSX.Element): string {
  return `
  <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  ${ReactLike.render(e, { indent: true, indentLevel: 1, renderClientCode: true })}
</body>
</html>
`;
}
