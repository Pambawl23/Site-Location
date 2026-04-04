// src/utils/imagePath.ts
export const img = (path: string): string => {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
