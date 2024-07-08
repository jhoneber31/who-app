
export type ProductsCategory = {
  id: number;
  name: string;
  brand: string;
  partNumber: string;
  offerPrice: number;
  listPrice: number;
  image: string;
}

export type Category = {
  nameCategory: string;
  image: string;
  products: ProductsCategory[];
}


export const mockProducts:Category[] = [
  {
    nameCategory: 'WELDING HELMETS WITH A PAPR',
    image: 'https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/with-papr-WKGJDIWB.webp',
    products: [
      {
        id: 1,
        name: '3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR',
        brand:'3M Speedglas',
        partNumber: '617830',
        offerPrice: 2479,
        listPrice: 2858.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp?v=1708713114&amp;width=100&amp;height=100&amp;crop=center'
      },
      {
        id: 2,
        name: '3M Speedglas G5-01 TW Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR',
        brand:'3M Speedglas',
        partNumber: '617820',
        offerPrice: 2299,
        listPrice: 2583.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/files/3m-speedglas-g5-01-tw-617820_9fae83a2-a229-49f8-b7d5-a1917e28b528.png?v=1708953396&width=600&height=600&crop=center'
      },
      {
        id: 3,
        name: '3M Speedglas Flip-Up Welding Helmet 9100XXi FX Air with Heavy Duty Adflo PAPR 547726HD',
        brand:'3M Speedglas',
        partNumber: '547726HD',
        offerPrice: 2199,
        listPrice: 2730.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/files/547726HD.png?v=1700745869&width=600&height=600&crop=center'
      },
      {
        id: 4,
        name: '3M Speedglas Welding Helmet 9100XXi Air with Adflo PAPR',
        brand:'3M Speedglas',
        partNumber: '507726',
        offerPrice: 1799,
        listPrice: 2033.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/products/507726.png?v=1678047332&width=600&height=600&crop=center'
      },
    ]
  },
  {
    nameCategory: 'FLIP-UP WELDING HELMETS',
    image: 'https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/flip-up-B6LIFVHL.webp',
    products: [
      {
        id: 7,
        name: '3M Speedglas G5-01VC Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR',
        brand:'3M Speedglas',
        partNumber: '617830',
        offerPrice: 2479,
        listPrice: 2858.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp?v=1708713114&amp;width=100&amp;height=100&amp;crop=center'
      },
      {
        id: 8,
        name: '3M Speedglas Flip-Up Welding Helmet 9100XXi FX',
        brand:'3M Speedglas',
        partNumber: '541826',
        offerPrice: 899,
        listPrice: 966.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/products/541826.png?v=1678045763&width=600&height=600&crop=center'
      },
      {
        id: 9,
        name: 'Tecmen FreFlow V3 iExp950 Flip-Up Welding Helmet with PAPR',
        brand:'ClearWelding',
        partNumber: 'WHFFV3.950S',
        offerPrice: 1799 ,
        listPrice: 1950,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/products/541826.png?v=1678045763&width=600&height=600&crop=center'
      },
      {
        id: 10,
        name: 'Tecmen iExp950 Flip-Up Welding Helmet',
        brand:'ClearWelding',
        partNumber: 'WH950.BK',
        offerPrice: 649 ,
        listPrice: 800,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/products/541826.png?v=1678045763&width=600&height=600&crop=center'
      },
    ]
  },
  {
    nameCategory: 'WELDING HELMETS WITH LARGE VIEWS AND CRISP VISION',
    image: 'https://cdn.shopify.com/oxygen-v2/29651/20627/42665/606537/build/_assets/large-views-HMGJDIK6.webp',
    products: [
      {
        id: 13,
        name: '3M Speedglas Welding Helmet 9100XXi',
        brand:'3M Speedglas',
        partNumber: '501826',
        offerPrice: 649,
        listPrice: 691.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp?v=1708713114&amp;width=100&amp;height=100&amp;crop=center'
      },
      {
        id: 14,
        name: '3M Speedglas Welding Helmet 9100XXi Air with Adflo PAPR',
        brand:'3M Speedglas',
        partNumber: '507726',
        offerPrice: 1799,
        listPrice: 2033.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/files/speedglas_g5_01vc_welding_helmet_with_adflo_papr_617830_ef90d245-4899-45eb-9707-ee16f1db5c43.webp?v=1708713114&amp;width=100&amp;height=100&amp;crop=center'
      },
      {
        id: 15,
        name: '3M Speedglas Flip-Up Welding Helmet 9100XXi FX',
        brand:'3M Speedglas',
        partNumber: '541826',
        offerPrice: 899,
        listPrice: 966.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/products/541826.png?v=1678045763&width=600&height=600&crop=center'
      },
      {
        id: 16,
        name: '3M Speedglas G5-01 TW Heavy-Duty Flip-Up Welding Helmet with Adflo PAPR',
        brand:'3M Speedglas',
        partNumber: '617820',
        offerPrice: 2299,
        listPrice: 2583.90,
        image: 'https://cdn.shopify.com/s/files/1/3009/5686/files/3m-speedglas-g5-01-tw-617820_9fae83a2-a229-49f8-b7d5-a1917e28b528.png?v=1708953396&width=600&height=600&crop=center'
      },
    ]
  }
]