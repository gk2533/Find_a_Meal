import React from 'react';

export default () => {
  var soupkitchens = ["Zhihan", "Zamie", "Gabe", "Zhihan Chen"];

  function searchMe(toFind)
  {
    var i = 0;
    var newList = []
    while(i<soupkitchens.length)
    {
      if(!soupkitchens[i].search(toFind))
      {
        newList[newList.length] = soupkitchens[i];
      }
      i++;
    }

    return (
      <ol>
        {newList.map(variable => (
          <h2 key={variable}>{variable}</h2>
        ))}
      </ol>
    );
  }

  return (
    <div>
      <h1>{searchMe("Zhihan")}</h1>
    </div>
  );
};
