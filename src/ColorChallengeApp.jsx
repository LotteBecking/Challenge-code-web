import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Textarea } from "./components/ui/textarea";

const defaultHTML = `<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: lightblue;
        color: black;
        font-family: sans-serif;
        text-align: center;
        padding: 2em;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to the Color Challenge!</h1>
    <p>Try changing the background or text color.</p>
  </body>
</html>`;

export default function ColorChallengeApp() {
  const [code, setCode] = useState(defaultHTML);
  const [srcDoc, setSrcDoc] = useState(defaultHTML);
  const [showHint, setShowHint] = useState(false);

  const handleRun = () => {
    setSrcDoc(code);
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', height: '100vh', padding: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Card style={{ flex: 1 }}>
          <CardContent style={{ height: '100%' }}>
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              style={{ height: '100%', fontFamily: 'monospace' }}
            />
          </CardContent>
        </Card>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={handleRun}>Run Code</Button>
          <Button onClick={() => setShowHint(!showHint)}>{showHint ? 'Hide Hint' : 'Show Hint'}</Button>
        </div>
        {showHint && (
          <div style={{ fontSize: '0.9rem', background: '#f9f9f9', padding: '0.5rem', borderRadius: '0.5rem' }}>
            <strong>Hint:</strong> You can change the background color of the page in the &lt;style&gt; section using:
            <pre>body &#123; background-color: pink; &#125;</pre>
            You can also change text color using the <code>color</code> property.
          </div>
        )}
      </div>
      <div style={{ height: '100%', border: '1px solid #ccc', borderRadius: '0.5rem', overflow: 'hidden' }}>
        <iframe
          srcDoc={srcDoc}
          title="Live Preview"
          sandbox="allow-scripts allow-same-origin"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  );
}
