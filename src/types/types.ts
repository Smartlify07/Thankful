export type FormValues = {
  email: string;
  password: string;
};

export type AuthState = {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
};

export type User = {
  $id?: string;
  name?: string;
  password?: string;
  email?: string;
  emailVerification?: boolean;
  labels?: unknown[];
  mfa?: boolean;
  phone?: string;
  phoneVerification?: boolean;
  prefs?: unknown;
  status?: boolean;
};

export type Message = {
  $id?: string;
  title?: string;
  content?: string;
  backgroundImage?: string | null;
  user_id?: string;
};
