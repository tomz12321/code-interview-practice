
做題範例使用 pokeapi

```
import React, { useEffect, useState } from 'react';

const SearchBox = () => {
  const [state, setState] = useState({
    answer: null
  });

  useEffect(() => {
    // asyncFunctions()
  }, [state]);

  const handleOnChange = (event) => {
    event.preventDefault();

    /* 
    先用另一個處理狀態碼的函式，使用 Promise.resolve 與 Promise.reject 將回應的情況包裝為回傳不同狀態的 Promise 物件，然後再下個 then 方法再處理:
    */

    function processStatus(response) {
      if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }

    /* Use fetch to make an ajax call */
    fetch(`https://pokeapi.co/api/v2/pokemon/${event.target.value}`, {
      method: 'get'
    })
      .then(processStatus)
      .then(async (response) => {
        const result = await response.json();
        setState({ answer: result?.forms[0]?.name });
      })
      .catch(function (err) {
        // if error, print it into console
        console.log(err);
      });
  };

  return (
    <div>
      <input type='search' name='p' onChange={handleOnChange} />
      <p>{state?.answer}</p>
    </div>
  );
};

export default SearchBox;

```

參考資料
https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html