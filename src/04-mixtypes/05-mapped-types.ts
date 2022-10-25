// Маппинг типов

type PcBrand = {
  name: string;
  country: string;
  createdAt: Date;
};

type WellKnowBrands = 'apple' | 'lenovo' | 'huawei' | 'hp' | 'dell' | 'microsoft';

type MyPcRecord = {
  [BrandKey in WellKnowBrands]?: PcBrand;
};

const brandRecord: MyPcRecord = {
  apple: {
    country: 'usa',
    name: 'Apple',
    createdAt: new Date(),
  },
};

function printPcCatalog(pcCatalog: MyPcRecord) {
  console.log(pcCatalog.apple?.country);
}

type PartOfWindow = {
  [Key in 'document' | 'screen' | 'navigator']?: Window[Key];
};

const p: PartOfWindow = { document: window.document };

export {};
