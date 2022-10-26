// Доступ по индексу
export {};

interface DataModel {
  id: string;
  title: string;
  elements: {
    header: {
      title: string;
      description: string;
      links: string[];
    };
    footer: {
      description: string;
      links: string[];
    };
    body: [
      {
        title: string;
        content: {};
      },
    ];
  };
}

type T0 = DataModel['elements']['footer'];

type someTuple = [number, string, boolean, ...string[]];
const arr: someTuple = [1, 'asd', true, '', ''];

type T1 = someTuple[1]; // type T1 = string

const sizes = ['small', 'medium', 'large'] as const;

type T2 = typeof sizes[number]; // type T2 = "small" | "medium" | "large"
