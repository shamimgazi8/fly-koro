import parse from "react-html-parser";

export const isEmpty = (obj: {}) => {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
};
export const htmlParse = (str: string) => {
  if (!str || str == "" || typeof str !== "string") return false;
  return parse(str);
};

//remove tags
export const remove_tags = (_html: any) => {
  let html = _html?.toString();
  let strippedString = html?.replace(/(<([^>]+)>)/gi, "");
  return strippedString;
};

//printe excerpt
export const excerpt = (_html: any, count = 100) => {
  const text = remove_tags(_html)
    ?.toString()
    .replaceAll("&nbsp;", " ")
    .replaceAll(/"/g, "");
  return text?.slice(0, count) + (text?.length > count ? "..." : "");
};

export const wordCount = (str: string) => {
  return str.split(" ").length;
};

//calculate reading time
export const readingTime = (text: string) => {
  let str = remove_tags(text);
  let wordCount = str.match(/(\w+)/g)?.length;
  if (wordCount <= 0) {
    wordCount = 100;
  }
  let count_time = Math.floor(wordCount / 200);

  return count_time;
};

export const shuffledArray = (array: any) => {
  if (array.length == 0) return;
  return array.sort((a: any, b: any) => 0.5 - Math.random());
};

export function shortenLargeNumber(num: number, digits: number): any {
  var units = ["K", "M", "G", "T", "P", "E", "Z", "Y"],
    decimal;

  for (var i = units.length - 1; i >= 0; i--) {
    decimal = Math.pow(1000, i + 1);

    if (num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }

  return num;
}

export function removeFirstForwardSlash(inputString: string): string {
  if (inputString?.startsWith("/")) {
    return inputString.substring(1);
  } else {
    return inputString;
  }
}

export function staticAsset(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}/${removeFirstForwardSlash(path)}`;
}

export const excerptWithRemoveQuote = (_html: any, count = 100) => {
  const rawText = remove_tags(_html);
  const text = rawText?.replace(/"/g, "");
  return text.slice(0, count) + (text.length > count ? "..." : "");
};

// get random index
export function getRandomIndex(array: any) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
}

//generate query string form object
interface Data {
  [key: string]:
    | number
    | string
    | string[]
    | Array<number | string>
    | null
    | undefined;
}

//filtered Entries
export const filteredEntries = (data: Data) => {
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(
      ([_, value]) =>
        value !== null && value !== undefined && value !== "undefined"
    )
  );
  return filteredData;
};

//generate query string;
export const generateQueryString = (data: Data) => {
  const filteredData = filteredEntries(data);

  const queryString = Object.keys(filteredData)
    .map((key) => {
      const value = data[key];

      if (
        value != null &&
        value !== "undefined" &&
        value !== undefined &&
        value !== ""
      ) {
        if (Array.isArray(value)) {
          return value
            .map((item) => `${key}[]=${encodeURIComponent(item)}`)
            .join("&");
        }

        return `${key}=${encodeURIComponent(value)}`;
      }
    })
    .join("&");

  const fullQueryString = `?${queryString}`;

  if (fullQueryString === "?&") {
    return "";
  } else {
    return fullQueryString;
  }
};

export function capitalizeFirstLetter(inputString: string | any): string {
  if (inputString.length === 0) {
    return inputString; // Handle empty string case if necessary
  }
  const firstLetter = inputString[0].toUpperCase();
  const restOfString = inputString.slice(1);
  return firstLetter + restOfString;
}

export const capitalizeFirstLetterOfEveryWord = (
  sentence: string | any
): string => {
  const words = sentence.split(" ");
  const capitalizedWords = words.map((word: any) => {
    if (word.length === 0) {
      return word;
    }
    const firstChar = word[0].toUpperCase();
    const restOfWord = word.slice(1);
    return firstChar + restOfWord;
  });
  return capitalizedWords.join(" ");
};

// numFormatter
export const numFormatter = (num: number) => {
  if (!num) return;
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num > 1000000000) {
    return (num / 1000000000).toFixed(1) + "B"; // convert to B for number from > 1 billion
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
};

export const isJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    //Error
    //JSON is not okay
    return false;
  }

  return true;
};

export const replaceUnderscore = (str: string) => {
  if (str) {
    return str.replace(/_/g, " ");
  } else {
    return str;
  }
};

export const flattenArrayWithLabelValue = (data: any) => {
  const flattenedArray: any = [];
  data.forEach((item: any) => {
    const { name, slug, children } = item;
    flattenedArray.push({ label: name, value: slug });
    if (children && children.length > 0) {
      flattenedArray.push(...flattenArrayWithLabelValue(children));
    }
  });
  return flattenedArray;
};

export const insert = (arr: any, index: any, newItem: any) => {
  return [
    // part of the array before the specified index
    ...arr.slice(0, index),
    // inserted item
    newItem,
    // part of the array after the specified index
    ...arr.slice(index),
  ];
};
