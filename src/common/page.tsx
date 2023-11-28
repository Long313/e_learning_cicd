export const handlePathName = (pathName: string, languageCurrent: string) => {
  const arr = pathName.split("/");
  let value = "";
  if (arr[arr.length - 1] === languageCurrent) {
    value = "";
  } else {
    value = arr[arr.length - 1];
  }
  console.log("value", value);
  return value;
};
