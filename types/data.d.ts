export interface Book {
  title: string
  image: string
  authors: string[]
  rating: number
  categories: string[]
  slug?: string
  publishedAt: string
  readingTime: {
    text: string
    minutes: number
    time: number
  }
  date: string
}

export interface Blog {
  title: string
  summary: string
  image: string
  authors: string[]
  rating: number
  categories: string[]
  slug?: string
  publishedAt: string
  readingTime: {
    text: string
    minutes: number
    time: number
  }
  date: string
  body: {
    code: string
  }
}

export enum Form {
  Initial,
  Loading,
  Success,
  Error,
}

export type FormState = {
  state: Form
  message?: string
}

export type Subscribers = {
  count: number
}

export type Views = {
  total: number
}

export type Song = {
  songUrl: string
  artist: string
  title: string
}

export type NowPlayingSong = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export type TopTracks = {
  tracks: Song[]
}

export type YouTube = {
  subscriberCount: number
  viewCount: number
}

export type GitHub = {
  stars: number
}

export type Gumroad = {
  sales: number
}

export type Unsplash = {
  downloads: number
  views: number
}
