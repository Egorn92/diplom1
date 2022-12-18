export const parseString = (arrStr: string[]) => {
  const newArr: string[] = [];

  arrStr.forEach((element: any) => {
    newArr.push(element.split(", "));
  });

  return newArr[0];
};
