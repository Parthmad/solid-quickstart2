import React from 'react';
import Chatbot from 'flowise-embed';

class MyComponent extends React.Component {

  componentDidMount() {
    Chatbot.init({
      chatflowid: '5209eae0-447d-4e73-83db-64f518b187d9',
      apiHost: 'http://localhost:3000',
    });
  }

  render() {
    const iframeHTML = `<iframe src="https://share.synthesia.io/embeds/videos/25877130-d883-40ce-a996-bfd7bc9c272a" loading="lazy" title="Synthesia video player - Sales Tax Compliance Complexity" allow="encrypted-media; fullscreen;" style="position: absolute; width: 70%; height: 70%; top: 0; left: 0; border: none; padding: 0; margin: 0; overflow:hidden;"></iframe>`;
    return (
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }} dangerouslySetInnerHTML={{ __html: iframeHTML }} />
    );
  }
}

export default MyComponent;
