import { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

const file = {
  name: "index.html",
  language: "html",
  value: "<div> </div>",
};

function CodeEditor({ codeValue, setCodeValue }) {
  function handleEditorValue(editor, monaco) {
    setCodeValue(editor);
  }
  function handleChange(e) {
    setCodeValue(e);
  }
  //   function getEditorValue() {
  //     alert(editorRef.current.getValue());
  //   }

  return (
    <div className="App">
      <p className="text-lg text-left font-bold p-3"> HTML Content</p>
      <Editor
        height="50vh"
        width="95%"
        theme="vs-dark"
        onMount={handleEditorValue}
        onChange={handleChange}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
        automaticLayout={true}
        lineNumbers={"off"}
        minimap={false}
        overviewRulerLanes={0}
        overviewRulerBorder={false}
      />
    </div>
  );
}

export default CodeEditor;
