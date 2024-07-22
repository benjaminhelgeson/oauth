import React from "react";

interface CodeSnippetProps {
  title?: string;
  code?: string;
}

export const CodeSnippet: React.FC<CodeSnippetProps> = ({
  title,
  code = "",
}) => (
  <div className="flex flex-col w-full overflow-hidden rounded-xl mt-2">
    <span className="h-5 w-full bg-gray-500 text-black">{title}</span>
    <div className="bg-black-900 min-h-15">
      <div className="p-8 inline-block">
        <pre className="text-white text-lg text-pretty whitespace-pre-wrap">{code}</pre>
      </div>
    </div>
  </div>
);
