import React, { useCallback, useState } from "react";

export function useCount(initialValue: number = 0) {

  let [count, setCount] = React.useState(initialValue);

  const decrement = React.useCallback(() => {
    //избавляемся от зависимостей добавлением переменной currentCount
    setCount((currentCount) => currentCount - 1);//значение придёт после выполнения функции в скобках
  }, []);

  const increment = React.useCallback(() => {
    setCount((currentCount) => currentCount + 1);
  }, []);
  
  

  return { count, decrement, increment };
}
