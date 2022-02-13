import React, { useEffect, useState } from "react";
import styles from "./Editor.module.css";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={styles.section} 
            key={key}
          >
            {sections[key]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Editor;
