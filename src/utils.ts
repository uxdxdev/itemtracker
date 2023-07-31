export function reduceResponseToObject(response: { values: [] }) {
  const data = response.values.slice();
  const obj = data
    .map((entry) => entry)
    .reduce((acc, cur) => {
      return { ...acc, ...{ [cur[0]]: cur[1] } };
    }, {});
  return obj;
}

export function responseValues(response: { values: [[], string] }):  Record<string, string>[] {
  const keys = response.values[0];
  const data = response.values.slice(1);
  const array = data.map(arr => Object.assign({}, ...keys.map((k, i) => ({ [k]: arr[i] }))));
  return array
}