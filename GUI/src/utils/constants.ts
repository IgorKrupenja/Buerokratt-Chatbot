export const MESSAGE_FILE_SIZE_LIMIT = 10_000_000;

export enum ROLES {
  ROLE_ADMINISTRATOR = 'ROLE_ADMINISTRATOR',
  ROLE_SERVICE_MANAGER = 'ROLE_SERVICE_MANAGER',
  ROLE_CUSTOMER_SUPPORT_AGENT = 'ROLE_CUSTOMER_SUPPORT_AGENT',
  ROLE_CHATBOT_TRAINER = 'ROLE_CHATBOT_TRAINER',
  ROLE_ANALYST = 'ROLE_ANALYST',
  ROLE_UNAUTHENTICATED = 'ROLE_UNAUTHENTICATED',
}

export enum RUUTER_ENDPOINTS {
  SEND_ATTACHMENT= '/attachments/add'
}

export enum AUTHOR_ROLES {
  END_USER = 'end-user',
  BACKOFFICE_USER = 'backoffice-user',
}
