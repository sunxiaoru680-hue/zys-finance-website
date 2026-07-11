import { NextResponse } from "next/server";
import { metaConversionApiConfig } from "@/lib/meta-conversions";

export async function POST() {
  return NextResponse.json({
    enabled: metaConversionApiConfig.enabled,
    configured: {
      pixelId: Boolean(metaConversionApiConfig.pixelId),
      accessToken: Boolean(metaConversionApiConfig.accessToken),
      testEventCode: Boolean(metaConversionApiConfig.testEventCode)
    },
    message:
      "Meta Conversion API placeholder is available. Add server-side event mapping before sending production events."
  });
}
