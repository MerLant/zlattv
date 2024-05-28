import { Color } from '@/models'

export type Button = 'navigate' | 'action' | 'link'

export interface ButtonProps {
  type: Button
  color?: Color
  href?: string
}
