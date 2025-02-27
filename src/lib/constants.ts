/* API */

export const API_URL = import.meta.env.VITE_API_URL;

/* Theme */

export const COLOR_ACCENT = 'jade';
export const COLOR_ERROR = 'red';
export const COLOR_MUTED = 'gray';

/* Strings & messages */

export const BRAND = 'Broccoli & Co.';

export const ATTRIBUTES = {
  EMAIL: 'Email',
  NAME: 'Full name',
};

export const MSG_FOOTER = {
  0: `Copyright © 2025 ${BRAND} All rights reserved.`,
  1: 'Made with ❤️ in Singapore.',
};

export const MSG_HERO = {
  TITLE: {
    0: 'A better way',
    1: 'to enjoy everyday.',
  },
  DESC: {
    0: "We're building a revolutionary new online service.",
    1: 'Be the first to know when we launch.',
  },
};

export const MSG_404 = {
  TITLE: 'Oops!',
  DESC: 'The requested page could not be found.',
};

export const MSG_FORM = {
  TITLE: 'Request an invite',
  EMAIL_CONFIRM: `Confirm ${ATTRIBUTES.EMAIL.toLocaleLowerCase()}`,
  ERR_NAME_REQUIRED: `${ATTRIBUTES.NAME} is required`,
  ERR_NAME_TOO_SHORT: `${ATTRIBUTES.NAME} is too short`,
  ERR_EMAIL_REQUIRED: `${ATTRIBUTES.EMAIL} is required`,
  ERR_EMAIL_INVALID: `Invalid ${ATTRIBUTES.EMAIL.toLocaleLowerCase()} provided`,
  ERR_EMAIL_NO_MATCH: `${ATTRIBUTES.EMAIL}s do not match`,
  HINT_NAME_REQUIRED: `${ATTRIBUTES.NAME} should be at least 3 characters.`,
};

export const MSG_INVITE_SUCCESS = {
  TITLE: 'Request successful notice',
  SUBTITLE_0: 'All done!',
  SUBTITLE_1: 'Great to have you on board! Stayed tuned for your welcome email.',
};

export const MSG_NETWORK = {
  CTA: 'Please try again later.',
};

export const ACTIONS = {
  CANCEL: 'Cancel',
  CLOSE: 'Close',
  HOME: 'Take me home',
  SEND: 'Send',
  REQUEST_INVITE: 'Request an invite',
};
