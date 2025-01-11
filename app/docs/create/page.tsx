"use client";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { useState } from "react";
import Markdown from "markdown-to-jsx";
import { SyntaxHighlightedCode } from "@/lib/highlight";

export default function Page() {
  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");

  return (
    <section className={styles.create}>
      <form className={classNames(styles.createSection, styles.inputSide)}>
        <div className={styles.topRow}>
          <button className={styles.saveButton}>save</button>
          <h3>title:</h3>
          <input
            type="text"
            maxLength={20}
            value={title}
            onChange={(value) => setTitle(value.target.value)}
            autoFocus
            required
          />
        </div>
        <textarea
          className={styles.textArea}
          value={input}
          onChange={(value) => setInput(value.target.value)}
        />
      </form>
      <div className={classNames(styles.createSection, styles.outputSide)}>
        <div className={styles.topRow}>
          <h1>{title ? title : "<title>"}</h1>
        </div>
        <Markdown
          options={{
            overrides: {
              code: SyntaxHighlightedCode,
            },
          }}
          className={styles.markdownArea}
        >
          {input}
        </Markdown>
      </div>
    </section>
  );
}
