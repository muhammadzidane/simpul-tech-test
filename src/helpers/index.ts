type DataObject = Record<string, string[]>;

export const extractInitialData = (obj: DataObject): Record<string, string> => {
  const result: Record<string, string> = {};

  for (const key in obj) {
    const value = obj[key];
    if (Array.isArray(value) && value.length > 0) {
      result[key] = value[0];
    }
  }

  return result;
};
