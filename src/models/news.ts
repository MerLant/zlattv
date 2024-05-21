export interface NewsPreview {
  readonly id: number
  title: string
  poster?: string
  tags: Tag[]
  author: Author
  categories: Category[]
  date: string
  leadParagraph?: string
}

export interface Category {
  readonly id: number
  name: string
}

export interface Tag {
  readonly id: number
  name: string
}

export interface Author {
  readonly id: number
  name: string
}

export interface NewsList {
  news: NewsPreview[]
}

export interface NewsDetailed extends NewsPreview {
  content?: string
}
