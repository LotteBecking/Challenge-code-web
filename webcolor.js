import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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
    <div className="grid grid-cols-2 gap-4 p-4 h-screen">
      <div className="flex flex-col space-y-2">
        <Card className="flex-1">
          <CardContent className="p-2 h-full">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="h-full font-mono text-sm"
            />
          </CardContent>
        </Card>
        <div className="flex justify-between items-center">
          <Button onClick={handleRun}>Run Code</Button>
          <Button variant="ghost" onClick={() => setShowHint(!showHint)}>
            {showHint ? "Hide Hint" : "Show Hint"}
          </Button>
        </div>
        {showHint && (
          <div className="text-sm text-muted-foreground p-2 border rounded-xl">
            <strong>Hint:</strong> You can change the background color of the page
            in the &lt;style&gt; section using:
            <pre className="bg-gray-100 mt-2 p-2 rounded">body &#123; background-color: pink; &#125;</pre>
            You can also change text color using the <code>color</code> property.
          </div>
        )}
      </div>

      <div className="h-full border rounded-xl overflow-hidden">
        <iframe
          srcDoc={srcDoc}
          title="Live Preview"
          sandbox="allow-scripts allow-same-origin"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}
