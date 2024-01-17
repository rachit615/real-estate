import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const initState: PropertyState = {
  properties: [
    {
      id: 1,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 2,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 3,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/b2a7/898f/c9e6be1e33d90b61b35fa3abe8720412?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iW2jJ5MPdUwb82nYLHzhC9493ApgNQpCFeihOqwi2pBPkWBo8x7ZHzCZ97YCcsLfc5YcDdOKk17PJ8PyQbUKeInQRU8kIiMzhbjacnvl0kXj-o-FV0dyOGwdRl7yb2IHA6O3fPPA3HouExqgvtwTIuLhTNaODQbArV5dDm1kdpBvBujQlGqZBoZJ3udV1WSPEw2lX3bucQsNzWT0mgo9bjBsJClJfO~BCoTkmZ6Pjr~6spdp49GyFn91~HBJHtimW0qG8sl4v6g3cSkat5TfH0iOjVlwXVaAk0er1jBhQpv~Kltrd5-~uMpQPAOJ09khBKn0vAg88enJ8JW2owqL-w__",
    },
    {
      id: 4,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/b2a7/898f/c9e6be1e33d90b61b35fa3abe8720412?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iW2jJ5MPdUwb82nYLHzhC9493ApgNQpCFeihOqwi2pBPkWBo8x7ZHzCZ97YCcsLfc5YcDdOKk17PJ8PyQbUKeInQRU8kIiMzhbjacnvl0kXj-o-FV0dyOGwdRl7yb2IHA6O3fPPA3HouExqgvtwTIuLhTNaODQbArV5dDm1kdpBvBujQlGqZBoZJ3udV1WSPEw2lX3bucQsNzWT0mgo9bjBsJClJfO~BCoTkmZ6Pjr~6spdp49GyFn91~HBJHtimW0qG8sl4v6g3cSkat5TfH0iOjVlwXVaAk0er1jBhQpv~Kltrd5-~uMpQPAOJ09khBKn0vAg88enJ8JW2owqL-w__",
    },
    {
      id: 5,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Villa",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/3be2/376b/09071c75b93eaa82f850807c0918ae8c?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HatUNBp6GbP-hWn7r5wHpGRo7w216PNZvXODEjeqgsz9BNq-nUqiyWkZkxFVwt9CYnNayvIZor3vFEnomTx~OXFbUSQk4kRj~UQPXnwsuKZgmk~RmiF0ksihZvNf95ch0XgeLV3~8NRqtiwE2hrV1~Ixj4unOdGY9EfEfypGfnn8886K3-3mG9fnSg8BgfkkfdZylP1UeIY9VDjTV6GbRfolLeV2a6Xy~pBY0~OXZFTKWPHKmnBqnOvIit0cLK~N1SJ5uTd7TEO5ctWY6oKvsHEcLxIAE5r-M3C2qN~~jb152PokUGj22JduI0CsDrQ5KmoEMDg2twTp7jBYTSl6Hg__",
    },
    {
      id: 6,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6279/9273/5c213f87f76e16c4de2d067ac544b43e?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cDsRYfSIjkXPwcezmQkVw6boroZbfHbv5rVDVqSKiTKoX6lI8yDgXl8QdSBSWYjWVgCWPS827tGXvZPKI32oZjAcPajg2proPVq7tvYGIeNAw0NLyys6JDElz6vVxRBAGuHuRdc4u0l64Efn28nbrBZ2ZwwSN2hgOJD1gDNd7~TGBhQPkH-1i~tjNec48VzaSEs3Es3rw~un0a9wWlrfck--qRthE1-saCmi4ZSjdGzHl78u6ts1GYpDC7VWfPY26sqDldkZSOjkie9p933Hn7F6FvRVYfVbWYt7g8jv~-4qVjUpzq1OVKXBrn8Mq~6nVk2-bauWTMMzTHrg04jBDA__",
    },
    {
      id: 7,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/a025/a8d4/db3decc92a07c03ed09b3ee74237bfb5?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fdd~PpQd05noVqGhwiykL0ePoQcWlkln3UHRsFP1hMoFjQEFdHft4IjqpSyR4YjZI8vpJPllKAAhHXdXf-0emGhyzH65fXWDewKaJjkVR~6POx8f8VscDEuBVlBRLEJqqUZsFwTld49Y6f2OIPKp-LBNBJ7V7F4nBanOv9QesdMtFbtgOTbE4faA5Cpwsn9vq042m3P3rX8kG84XeJM~JkPSZAg9F6JSP9SyrMTPupTYq36giVST7nVz1QrE6I276NO2x98kRqiCNlXFL7rtvPOLdrwK1jYom3pbjVOBoCUxFTI6Jg2RcQ1mkQn3HvpIpKAwDQh7zgNq4cpQdGZphg__",
    },
    {
      id: 8,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/5900/4188/b94c5ad0ee9d51402b43d28b41f05fb3?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DY9dJxNUGn81OCjw~uCjl4NxByUmvs9-K48H4xDLBomZNNZMCG9XyfBlpghJS4rY30g6uqgEF0jm1D~DVnJqrOgWmZcKK4rtRgOsexM~mCAzuYn9jxlepxWlXTkC16rt4~clTW29gyoP4jOuDUye2kVoCbbPyGeTxtDGzfCWSPGrXu4Q3Ji8rOGSlrDIwEnBtSbKtm8l65l-4NZR9NL6CGvVgWEzSY-0zVEsKoRNQ-U6QfBoNSucTyxK8kGH8UMFwOLz1xwAT45yo4d~rAeZyD0OaQsAXIPqtG8cpXqow9reNPeAF08S5YnZHQb2kRQ~IquT3Q1lMGsrJbCTNo15fA__",
    },
    {
      id: 9,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 10,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 11,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 12,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 13,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 14,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 15,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 16,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 17,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 18,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "House Apartments",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 19,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
    {
      id: 20,
      price: 12750000,
      location: "20724 visa Court, london, CA 95476",
      beds: 4,
      baths: 5,
      category: "Living House",
      size: 5776,
      image:
        "https://s3-alpha-sig.figma.com/img/6744/2ee2/d3ee2d08326763fe5d081b4e63f3b80a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkbPx6Up6DkJPL4UU2PQ32iSLvVMdUGTrEi7RH3yYmtQQgJaFwaUCV1VdSg6uKVyZ1CXMyRZSNxPX1XZ-JcLNw6wFpuQRWRBKondnZt-IdgI~3H31TV4Dg9acULHyjslJ3Rp22tbNPvmt3uBEOypmPNS9rq43Q4nB9lGMQCCMbe7L9dBLMNjBhy6zQ9qEOtK1ofiVeQWp0TZY2tnEkUalBdWVROndB5QpV7qzA5DW~lmfhkt7sWZU6sf~OKTDGZilCiTJII-hE1Yz7AHpHi3mrLtE9heTPICPa8BpOpW30E2A5ypDr8cSIq3mwznpXHugDe5SFqowewC24cec~SbMA__",
    },
  ],
  bookings: [],
};

const bookingReducer = (
  state: PropertyState = initState,
  action: PropertyAction
): PropertyState => {
  switch (action.type) {
    case "ADD_TO_BOOKINGS":
      let addedItem = state.properties.find((item) => item.id == action.id);
      if (addedItem) {
        let existedItem = state.bookings.find(
          (item) =>
            item.id == action.id &&
            item.date.getTime() === action.date.getTime()
        );
        if (existedItem) {
          toast.error("You already have a visit on selected date !");
          return {
            ...state,
          };
        } else {
          let booking = {
            ...addedItem,
            date: action.date,
            booking_id: uuidv4(),
          };
          toast.success("Your visit for selected date is confirmed");
          return {
            ...state,
            bookings: [...state.bookings, booking],
          };
        }
      }
    case "REMOVE_FROM_BOOKINGS":
      let updatedProperties = state.bookings.filter(
        (item) => item.booking_id !== action.booking_id
      );
      toast.success("Booking has been removed successfully");
      return {
        ...state,
        bookings: updatedProperties,
      };

    default:
      return state;
  }
};

export default bookingReducer;
