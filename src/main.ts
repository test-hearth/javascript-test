import axios, { AxiosResponse, AxiosError} from 'axios';
// const isArray = (targetObject: any) => {
//   return Object.prototype.toString.call(targetObject) === '[object Array]';
// }

// const isString = (targetObject: any) => {
//   return (typeof targetObject).toString() === 'string';
// }

// const endpointCreator = (endpointStrings: string) => {
//   console.log(endpointStrings.toString());
// }

// const existenceConfirmer = (queryStrings: string[]) => {
//   console.log(queryStrings.toString());
// }

// const creatorHandller = (params?: st) => {
//   console.log(params.valueOf());
// }

type st = string | string[];
const getList = (params?: st) => {
  const tt = coreLogger(params);
  console.log('strings', tt);
}

// core function作って、その中ではstringsを引数に、引数を元にlogを吐き出す
const coreLogger = (params: st) => {
  let tt = '\?';
  // querystrings の組み立て(?始まり&区切りのid=string形式)
  if (Array.isArray(params)) {
    for (const item of params) {
      tt += `id\=${item}&`;
    }
    return tt.slice(0, -1);
  } else if (typeof params === 'string') {
    console.log(params);
  }
}

// core functionにstring[]を渡して、引数が配列の場合、こちらの配列を使う