export default function Page({ item, increase, decrease }) {
  return (
    <>
      <div className="flex justify-between">
        <img src={require("./arrow.png")} alt="" width="100" className="hover:-scale-110 transition-all -scale-100" onClick={decrease} />
        <div className="m-auto ">
          <a href={`https://github.com/OndrejHj04/${item.name}`} className="font-semibold text-blue-700 text-3xl" rel="noreferrer" target="_blank">{item.name}</a>
          <h1 className="text-center text-lg">{`${item.created_at.substring(8,10)}. ${item.created_at.substring(5,7)}. ${item.created_at.substring(0,4)}`}</h1>
        </div>

        <img src={require("./arrow.png")} alt="" width="100" className="hover:scale-110 transition-all" onClick={increase} />
      </div>
      <img src={require(`./img/${item.name}.png`)} alt="" />
      <div className="w-full text-xl my-3">{item.description}</div>
    </>
  );
}
