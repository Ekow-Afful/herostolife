import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const CommentList = () => {
  const [list, setList] = useState([]);
  return (
    <div>
      <form submit>
        <input
          type="text"
          onChange={(e) => {
            setList(e.target.value);
          }}
        />
        <input type="button" value="Post" />
      </form>
      <ul>
        {list.map((id, text) => (
          <li key={id}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

document.body.innerHTML = "<div id='root'></div>";

const root = createRoot(document.getElementById("root"));
root.render(<CommentList />);

setTimeout(() => {
  let input = document.querySelector("input[type='text']");
  input.value = "test";
  input._valueTracker.setValue("");
  input.dispatchEvent(new Event("change", { bubbles: true }));

  setTimeout(() => {
    document.querySelector("input[type='button']").click();
    setTimeout(() => {
      console.log(document.getElementsByTagName("ul")[0].innerHTML);
    });
  });
});
