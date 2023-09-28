import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
<!DOCTYPE html>
<html>
  <body>
    <script type="module">
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js"
      Chatbot.init({
        chatflowid: "5209eae0-447d-4e73-83db-64f518b187d9",
        apiHost: "http://localhost:3000",
      })
    </script>
  </body>
  <div style="position: relative; overflow: hidden; aspect-ratio: 1920/1080">
    <iframe src="https://share.synthesia.io/embeds/videos/25877130-d883-40ce-a996-bfd7bc9c272a" loading="lazy" title="Synthesia video player - Sales Tax Compliance Complexity" allow="encrypted-media; fullscreen;" style="position: absolute; width: 70%; height: 70%; top: 0; left: 0; border: none; padding: 0; margin: 0; overflow:hidden;"></iframe>
  </div>
</html>
