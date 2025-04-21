

export const ENDPOINTS = {
  API_BASE_DEV_URL: "",
  API_SIGN_UP: "/auth/signup",
  API_LOGIN: "/auth/login",
  API_VERIFY_REGISTER: "/auth/verify-email-token",
  API_RESEND_EMAIL_VERIFICATION: "/auth/resend-email-verification",
  API_VERIFY_EMAIL: "/auth/verify-email",
  API_RESEND_LOGIN_VERIFICATION: "/auth/resend-login-verification",
  API_REFRESH_TOKEN: "/auth/refresh-token",
  API_PASSWORD_RESET: "/auth/password-reset",
};

export const NAMESPACE = {
  API_GET_APPLICATION: "API_GET_APPLICATION",
};

export const APP_KEYS = {
  MAX_SIZE_IN_BYTES: 10 * 1024 * 1024, //  1MB
  ALLOWED_MEDIA_TYPES: [
    "image/svg+xml",
    "image/png",
    "image/jpeg",
    "image/gif",
    "application/pdf",
  ],
  MEDIA_DEFAULTS: {
    icon: "cloudUpload",
    photo: "",
    percentage: 0,
    completed: 0,
    uploading: false,
    name: "",
    pending: false,
  },
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
  USER: "USER",
  RESET_EMAIL: "RESET_EMAIL",
  QUERY_COUNT: "QUERY_COUNT",
};
