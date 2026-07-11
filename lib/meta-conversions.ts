import {
  metaConversionApiAccessToken,
  metaConversionApiPixelId,
  metaConversionApiTestEventCode
} from "@/components/seo";

export const metaConversionApiConfig = {
  pixelId: metaConversionApiPixelId,
  accessToken: metaConversionApiAccessToken,
  testEventCode: metaConversionApiTestEventCode,
  endpoint:
    metaConversionApiPixelId && metaConversionApiAccessToken
      ? `https://graph.facebook.com/v20.0/${metaConversionApiPixelId}/events`
      : "",
  enabled: Boolean(metaConversionApiPixelId && metaConversionApiAccessToken)
};
