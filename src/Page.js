export default function Page({ item, increase, decrease }) {
  console.log(item);
  return (
    <>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="m-auto sm:order-2 order-1">
          <a href={`https://github.com/OndrejHj04/${item.name}`} className="font-semibold text-blue-700 text-3xl" rel="noreferrer" target="_blank">
            {item.name}
          </a>
          <h1 className="text-center text-lg">{`${item.created_at.substring(8, 10)}. ${item.created_at.substring(5, 7)}. ${item.created_at.substring(0, 4)}`}</h1>
        </div>
      </div>
      <img src={require(`./img/${item.name}.png`)} alt="" />

      <p className="mt-3 text-center">{item.description}</p>
      {!!item.homepage.length && (
          <a rel="noreferrer" target="_blank" className="text-center text-blue-700 m-auto" href={item.homepage}>
            Visit me!
          </a>
        )}
    </>
  );
}
