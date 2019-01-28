import * as React from "react";

// Import patterns
import button from "../../src/button/pattern";
import textInput from "../../src/textInput/pattern";

import * as styles from "./App.module.css";

const stories = [button, textInput];

function Pattern(props: any) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1em" }}>
      <div>{props.render()}</div>
      <div>Knobs</div>
    </div>
  );
}

function Story(props: any) {
  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        {props.patterns.map((p: any, idx: number) => (
          <Pattern key={String(idx)} {...p} />
        ))}
      </div>
    </div>
  );
}

function StoryNavigation() {
  return (
    <ul>
      {stories.map((story, storyIdx) => (
        <li key={story.title}>
          {story.title}
          <ul>
            {story.patterns.map((pattern, patternIdx) => (
              <li key={pattern.title}>
                <a href={`/${storyIdx}/${patternIdx}`}>{pattern.title}</a>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export function App(props: any) {
  return (
    <div className={styles.root}>
      <div className={styles.nav}>
        <StoryNavigation />
      </div>
      <div className={styles.stage}>
        {stories.map(story => (
          <Story key={story.title} {...story} />
        ))}
      </div>
    </div>
  );
}
