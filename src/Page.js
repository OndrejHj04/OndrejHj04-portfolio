export default function Page({ item, increase, decrease }) {
  console.log(item);
  return (
    <>
      <div className="flex justify-between">
        <img src={require("./arrow.png")} alt="" width="100" className="hover:-scale-110 transition-all -scale-100" onClick={decrease} />
        <div className="m-auto text-2xl">
          <h1 className="">{item.name}</h1>
          <h1>{item.created_at}</h1>
        </div>

        <img src={require("./arrow.png")} alt="" width="100" className="hover:scale-110 transition-all" onClick={increase} />
      </div>
      <div className="bg-red-500 w-full h-64"></div>
      <div className="h-full w-full text-xl max-h-full overflow-y-scroll break-words">{item.description}</div>
    </>
  );
}
