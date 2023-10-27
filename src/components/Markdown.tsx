import { marked } from "marked";
import { useState } from "react";

const Markdown = () => {
  const [keyVis, setKeyVis] = useState(false);
  /*const markdownText = `# sample text*\n---\n*delete all this and *start anew*.\n# heading 1\n## heading 2\n### heading 3\n\n**bold text**\n> block quote\n\nlist:\n1. first\n2. second\n3. third\n\n---\n\n![image](https://upload.wikimedia.org/wikipedia/commons/2/2f/Arcadian_landscape_with_a_bust_of_Flora%2C_by_Jan_van_Huijsum.jpg)\n\n[link](https://www.example.com)\n\n \` <div>inline code</div> \` \n\n//multi-line code:

    function multiLine(firstLine, lastLine) {
        return multiLineCode;
    }`;*/
  const [text, setText] = useState("");
  const markedText = marked.parse(text);

  const profile_link = "https://rebecca-shoptaw.github.io/";

  marked.setOptions({
    breaks: true,
  });

  const editFocus = () => {
    const editor = document.getElementById("editor");
    if (editor) {
      editor.focus();
    } else
      window.onload = () => {
        editFocus();
      };
  };

  return (
    <div>
      <div id="close-btn">
        <a href={profile_link}>
          <i className="bi bi-x-lg" />
        </a>
      </div>
      <button
        id="restart"
        className={`${keyVis ? "hop-up" : ""}`}
        onClick={() => {
          editFocus();
          setText("");
        }}
      >
        start anew
      </button>
      <div
        id="text-preview-box"
        className="d-flex p-5 flex-row justify-content-center"
      >
        <textarea
          id="editor"
          className={`p-3 ${keyVis ? "short-view" : ""}`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        ></textarea>
        <div id="preview-box" className={`p-3 ${keyVis ? "short-view" : ""}`}>
          <div id="preview" dangerouslySetInnerHTML={{ __html: markedText }} />
        </div>
      </div>
      {keyVis == true && (
        <div id="footer">
          <div id="key-main-title-box" className="text-center">
            <p id="key-main-title">
              <img
                id="minimize"
                src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Feather-arrows-arrow-down-left.svg"
                alt="minimize-button"
                onClick={() => {
                  setKeyVis(false);
                  editFocus();
                }}
              />
            </p>
          </div>
          <div
            id="table-div"
            className="d-flex flex-row justify-content-center"
          >
            <table id="key-table" className="table table-responsive key-table">
              <thead>
                <th scope="col">desired output</th>
                <th scope="col">input</th>
                <th scope="col">desired output</th>
                <th scope="col">input</th>
                <th scope="col">desired output</th>
                <th scope="col">input</th>
                <th scope="col">desired output</th>
                <th scope="col">input</th>
                <th scope="col">desired output</th>
                <th scope="col">input</th>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">headings</th>
                  <td>
                    # h1 <br /> ## h2 <br /> ### h3
                  </td>
                  <th scope="row">ordered list</th>
                  <td>
                    1. first <br /> 2. second <br /> 3. third
                  </td>
                  <th scope="row">un-ordered list</th>
                  <td>
                    - first
                    <br />- second <br /> - third
                  </td>
                  <th scope="row">link</th>
                  <td>[title](https://www.example.com)</td>
                  <th scope="row">image</th>
                  <td>![alt text](image.jpg)</td>
                </tr>
                <tr>
                  <th scope="row">bold</th>
                  <td /*onClick={() => setText(text.concat(`\n**bold text**`))}*/
                  >
                    **bold text**
                  </td>
                  <th scope="row">italic</th>
                  <td>*italicized text*</td>
                  <th scope="row">divider</th>
                  <td>---</td>
                  <th scope="row">blockquote</th>
                  <td>{">"} quote</td>
                  <th scope="row">code</th>
                  <td>`code`</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
      {keyVis == false && (
        <div className="max-box">
          <p
            id="maximize-text"
            onClick={() => {
              setKeyVis(true);
              editFocus();
            }}
          >
            key
            <img
              id="maximize"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Feather-arrows-arrow-up-right.svg/48px-Feather-arrows-arrow-up-right.svg.png?20170620140931"
              alt="show-key-button"
              onClick={() => {
                setKeyVis(true);
                editFocus();
              }}
            />
          </p>
        </div>
      )}
    </div>
  );
};

export default Markdown;
