import { useEffect, useState } from "react";
import Page from "./Page";
export default function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [repos, setRepos] = useState();
  const [counter, setCounter] = useState(0);
  window.addEventListener("resize", () => setHeight(window.innerHeight));

  useEffect(() => {
    fetch("https://api.github.com/users/OndrejHj04/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  const increase = () => {
    if (counter < repos.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const decrease = () => {

    if (!counter < 1) {
      setCounter(counter - 1);
    } else {
      setCounter(repos.length-1);
    }
  };

  const getRepos = () => {
    return repos.map((item) => {
      return <Page increase={increase} key={item.id} item={item} decrease={decrease} />;
    });
  };

  return (
    <div className="flex max-w-3xl m-auto" style={{ height: height, minHeight: "450px" }}>
      <div className="m-3 shadow-2xl rounded flex-col w-full border-2 border-slate-100 p-3 flex" style={{ borderRadius: "30px" }}>
        {repos && getRepos()[counter]}
        <h1 className="text-center">Designed with love 💘 <br />by <a href="https://github.com/OndrejHj04" target="_blank" className="text-sky-500 font-semibold">Ondřej Hájek</a></h1>
      </div>
    </div>
  );
}
