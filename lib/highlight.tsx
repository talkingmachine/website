'use client';

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import yaml from "highlight.js/lib/languages/yaml";
import shell from "highlight.js/lib/languages/shell";
import bash from "highlight.js/lib/languages/bash";
import grapghql from "highlight.js/lib/languages/graphql";
import scss from "highlight.js/lib/languages/scss";
import css from "highlight.js/lib/languages/css";
import markdown from "highlight.js/lib/languages/markdown";
import json from "highlight.js/lib/languages/json";
import python from "highlight.js/lib/languages/python";

import 'highlight.js/styles/github.css';
import { HTMLProps, useEffect, useRef } from "react";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('grapghql', grapghql);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('css', css);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('json', json);
hljs.registerLanguage('python', python);


export function SyntaxHighlightedCode(props: HTMLProps<HTMLElement>) {
    const ref = useRef<HTMLElement>(null);
  
    useEffect(() => {
      if (ref.current && props.className?.includes("lang-") && hljs) {
        hljs.highlightElement(ref.current);
  
        // hljs won't reprocess the element unless this attribute is removed
        ref.current.removeAttribute("data-highlighted");
      }
    }, [props.className, props.children]);
  
    return <code {...props} ref={ref} />;
  }