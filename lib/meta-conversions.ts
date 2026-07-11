const metaConversionApiPixelId = process.env.META_CONVERSION_API_PIXEL_ID || "";
const metaConversionApiAccessToken = process.env.META_CONVERSION_API_ACCESS_TOKEN || "";
const metaConversionApiTestEventCode = process.env.META_CONVERSION_API_TEST_EVENT_CODE || "";

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
