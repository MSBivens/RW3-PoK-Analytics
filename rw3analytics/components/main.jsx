const Main = () => {
  const fetchOwnersofNft = async () => {
    var requestOptions = {
      method: "GET",
    };
    const fetch1URL = `https://api.mintkudos.xyz/v1/tokens/1655/owners/?limit=1000&offset=0`;
    const fetch2URL = `https://api.mintkudos.xyz/v1/tokens/1655/owners/?limit=1000&offset=1000`;
    const responses = await Promise.all([fetch(fetch1URL), fetch(fetch2URL)])
    
    const data1 = await responses[0].json()
    const data2 = await responses[1].json()

    fetch(fetch1URL, requestOptions)
      .then((response) => response.json())
      .then((data1) => JSON.stringify(data1, null, 2))
      .then((data1) => console.log(data1));
    fetch(fetch2URL, requestOptions)
      .then((response) => response.json())
      .then((data2) => JSON.stringify(data2, null, 2))
      .then((data2) => console.log(data2));
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 gap-y-3">
      <div className="flex flex-col w-full justify-center items-center gap-y-2">
        <button
          className={
            "disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5"
          }
          onClick={() => {
            fetchOwnersofNft();
          }}
        >
          Fetch Owners
        </button>
      </div>
    </div>
  );
};

export default Main;
