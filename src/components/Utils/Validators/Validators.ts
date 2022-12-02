
export const required = (value: string | null): string | undefined => {
  if(value) return undefined;
  return 'Field id required';
};

export const maxLengthCreator = (maxLength: number) => (value: string): string | undefined => {
  if(value.length > maxLength) return `Max length is ${maxLength} symbols`;
  return undefined;
};

