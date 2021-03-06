const Main = () => {
  const fetchOwnersofNft = async () => {
    var requestOptions = {
      method: "GET",
    };
    // const token.tokenId = "496";
    const baseURL = `https://api.mintkudos.xyz`;
    const limit = "1000";
    const fetchURL = `${baseURL}/v1/tokens/496/owners/?limit=${limit}`;
    fetch(fetchURL, requestOptions)
      .then((response) => response.json())
      .then((response) => JSON.stringify(response, null, 2))
      .then((result) => console.log(result));
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
