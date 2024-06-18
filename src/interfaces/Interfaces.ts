//TYPES

export type HTTP_TEMPLATE = {
  loading?: boolean
}

export interface cardHomePage extends HTTP_TEMPLATE {
  id: number,
  name: string | null,
  alternativeName: string,
  poster?: {
    url?: string
    previewUrl?: string
  },
  year: number,
  rating?: {
    kp: number
  }
}

export interface filmById extends cardHomePage {
  type: string,
  description: string | null
}

export interface allCardsHomePage extends HTTP_TEMPLATE{
  docs: Array<cardHomePage>;
  limit: number,
  page: number,
  pages: number,
  total: number
}

export type basicSendType = {
  page: number,
  limit: number
}

export interface allFilmsSendType extends basicSendType {
  "genre.name"?: Array<string>,
  "rating.kp"?: string,
  year?: string
}
