export const getStoredLanguage = (): string | null => {
  return localStorage.getItem("language");
};

export const setStoredLanguage = (lang: string): void => {
  localStorage.setItem("language", lang);
};
