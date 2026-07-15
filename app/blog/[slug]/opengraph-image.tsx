import { ImageResponse } from "next/og";
import { companyName } from "@/components/seo";
import { getArticleBySlug } from "@/lib/content";

export const alt = "ZYS Advisory article featured image";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const title = article?.title || "ZYS Advisory Insights";
  const category = article?.category || "China Business Advisory";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#17211f",
          color: "#ffffff",
          padding: "64px",
          fontFamily: "Arial, Helvetica, sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          <div
            style={{
              width: "86px",
              height: "86px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #b99145",
              background: "#ffffff",
              color: "#17211f",
              fontSize: "28px",
              fontWeight: 900
            }}
          >
            ZYS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "30px", fontWeight: 800 }}>{companyName}</div>
            <div style={{ marginTop: "8px", color: "#d7c18b", fontSize: "20px", fontWeight: 700 }}>
              China Business & Tax Advisory
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#b99145", fontSize: "24px", fontWeight: 800, textTransform: "uppercase" }}>
            {category}
          </div>
          <div style={{ marginTop: "24px", maxWidth: "960px", fontSize: "60px", lineHeight: 1.08, fontWeight: 900 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", color: "#d9dfdc", fontSize: "22px" }}>
          <span>www.zysadvisory.com</span>
          <span>Registration • Tax • Accounting • Visa</span>
        </div>
      </div>
    ),
    size
  );
}
