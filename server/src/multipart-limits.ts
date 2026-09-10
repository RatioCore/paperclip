// Multer 2.3 requires this opt-in bound to prevent sparse-array CPU exhaustion
// while parsing multipart text field names (GHSA-535w-7cp7-47q4).
// Upload metadata uses scalar fields; retain small indexed fields for compatibility.
export const MULTIPART_FIELD_LIMITS = { fieldArrayIndexLimit: 100 } as const;
