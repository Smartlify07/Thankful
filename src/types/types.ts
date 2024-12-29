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
  email: string;
  password: string;
  name?: string;
};
