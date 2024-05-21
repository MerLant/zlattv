export enum Color {
  Red = '#9f0023',
  Gray = '#f2f2f2',
  MediumGray = '#d2d2d2',
  LightGray = '#959595',
  Black = '#373334',
  White = '#ffffff'
}

export function getColorName(value: string): string | undefined {
  const keys = Object.keys(Color).filter((key) => Color[key as keyof typeof Color] === value)
  return keys.length > 0 ? keys[0].toLowerCase() : undefined
}
