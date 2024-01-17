import Image from "next/image";
import React from "react";

const PropertyGallery = () => {
  return (
    <div className="flex flex-row gap-1 w-full">
      <div className="w-full md:w-1/2 h-[600px] relative overflow-hidden">
        <Image
          src="https://s3-alpha-sig.figma.com/img/7cfc/6a31/229d85441e60be11fc4d0452ad0410ab?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TFhEFfp7eG5kvphHiTONFRTpb-FFCGX8A3r1LGSR7csrv31q9ooBT0E~lRohUGinc7uOKTKAnH~iX95w~igg0CNp1Xkcfb90XwsIjTjYuuAFWRJ9Rayn8LanTb5JgcMwQlz9~STuFotXjg5JLVW6F0CDSeOOo1rNmpZ5~PB7PvVAgJAp1VHdg45bi8N73nEjy~cEKWL~yS9PnX0Yjc2pj2vgtXyFVYQf-OIcuh8rqiGj7jRFlcyOXSC~R3VRQsnp9xPmNhk~I1vlz~RQd16aFoLWQBj8n7dZDTgS6qAcS8I378dVnAcd97lYcNajZ3UM6FTn4AKD1gyEvr~rduUZhg__"
          alt="property_img"
          fill
          style={{ objectFit: "cover", cursor: "pointer" }}
        />
      </div>
      <div className="hidden md:grid w-1/2 grid grid-cols-2 gap-1  h-[600px] ">
        <div className=" relative overflow-hidden">
          <Image
            src="https://s3-alpha-sig.figma.com/img/d122/4633/7740bb0f77624bc8773b76367262f05a?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fcmZopNr7wEpk-7P5xE-aBll2SSvPZC3S84ECFbwmu~YKDKYqRpTy0SOKNqkd57AHGLP0WQ2pUD6BS4Wy7MNcc21qt7jiXPc5lz3VlFPT43e~wfA6MLAIgSRfA7PhOW~dNpK5p4mRYx8wNEstRHvREjZxwV0XNNcSaLBy11Sm4rcS5romsfJCMuemsWwPSU9~C44VSOvSlGT0gV-qPdyAhsmjBrkIFQ4-7pWsa8sMFboY7Hoyyqvs-LdS1cOj0PN7tUE~q1kt0r-1URSXiNuSDPPpkRzvausB0aLdLdA-MiC2UycH61ZA6EQc4kl~dW2ZGH7hccW28JjI9iRjf-XnQ__"
            alt="property_img"
            fill
            className="w-full"
            style={{ objectFit: "cover", cursor: "pointer" }}
          />
        </div>
        <div className=" relative overflow-hidden">
          <Image
            src="https://s3-alpha-sig.figma.com/img/edb7/df5d/deadc56d09030d1f36fdce48913e6a68?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePv83jTZAuXecvBRU5rFKm83rBSGP9g4hmvyWKwBeBOfXOBPxda~B~zrHIgNdoWX0dAO0xxC84NuND6EQfXgzFM-s2p6we3urNmsEOhwchcmsLP5DzL0Lse8G8PPQtwCLvjqkbtLPi9CjI1ZDgGlU0PuOIN5PwujX-bSChD4f7plQ~vqFeoKz2Eg8lQP6yf~egtiSXqhxmACGiDUCMFgliZ9RGcdgeSbW7HET0eYP3GWT0D4itWHEccuBXp8j5O6qO8UMiXMm~QZcCHfbj9sA85QKFfnogVIhu0LefduM9kXZv7SPbE67gKlzj8rbgd5KcvMgLyepJNALtRM4mOsvg__"
            alt="property_img"
            fill
            style={{ objectFit: "cover", cursor: "pointer" }}
          />
        </div>
        <div className=" relative overflow-hidden">
          <Image
            src="https://s3-alpha-sig.figma.com/img/70a6/72b2/fc93e4546808abf28b5f95f791107fce?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G-3gkwbG55uNTeI2yJgWlB~Zsal1Oz3OS33M9va-2QIILVxKpX1KKus5JUscuztJyl08mxCqMzXAlA7ARktkDrp5LE2kAQ5tIMD7ilR4m1ds6SPaRc9yHAFQzG4LppOoLnfMIq8xV9gn1BUKj1KyPShLiNIHQtW-FpwgXINzC8rJstvImOoIUjOw6ExIYOEC5BrdXzxCF5WbSmzvyiRIZVzCkZ17j9qz~Thp-8RtsdY~ixOshlPC0Yu7pA-Ivrez2iWG6BNRhvGvbT8S390r53lgoQLlnuKnCxt9f1n~KFmm8~7m-R2fWt9LjF2iYC~BCXIpQCN5CMtDw2WMhd7yOw__"
            alt="property_img"
            fill
            style={{ objectFit: "cover", cursor: "pointer" }}
          />
        </div>
        <div className=" relative overflow-hidden">
          <Image
            src="https://s3-alpha-sig.figma.com/img/713f/6cdc/516c21a03257c771876581db423c43d9?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kZqiJaDTdgNuRc4nLyzxkJyZHdb7PlXyGmUN0mgNKfYLIh~BXHhEiXryXvXWY3~s1vmbR5QuYST1jD~-5aWj3oxV3vgO0nxW1krCiuWgxajtMt6fxRxRu5Y2TYsi3IGdqHvq8rklYI-cOWddjKNAwhBcsOUfhNYquAF-agbw0XdYmILxzCjpt0LNsn9GO5kjOStwZxXHsbQU3BB50h~AEln3cPCLaRbrzw1eUKXsbZFSgN3kYm5cYvgPwj7Pg5qG5SN-XnXJbxWpKt97j4cjeP78YX7NpeZrzVJBwZRYLoF9r3~pLhG5hiMJtfnBxb9ojLBvhjmDQiGl4oGKsC2oDg__"
            alt="property_img"
            fill
            style={{ objectFit: "cover", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyGallery;
