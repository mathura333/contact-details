export interface Field {
  key: string;
  label: string;
  type: 'string' | 'phone' | 'email' | 'radio' | 'multi-select';
}

export interface Folder {
  name: string;
  fields: Field[];
}

export interface ContactFields {
  folders: Folder[];
}

export interface ContactData {
  [key: string]: string | string[];
}

export interface Note {
  id: string;
  content: string;
  timestamp: string;
  type: string;
}

export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
  hasTrackingButton?: boolean;
  trackingText?: string;
  isTyping?: boolean;
}

export interface Conversation {
  id: string;
  sender: string;
  recipient: string;
  timestamp: string;
  subject: string;
  messages: Message[];
  isTyping?: boolean;
}

export interface Layout {
  layout: string[];
}
