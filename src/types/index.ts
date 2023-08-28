export interface CardProps {
  url: string
  name: string
  star: number
  vision: string | undefined
}

export interface Artifacts {
  url: string
  name: string
  star: number
  vision: string
}

export interface ArtifactsState {
  artifacts: Artifacts[]
  isLoading: boolean
  name: string
  star: string
  reset: string
  vision: string
}

export interface Filter {
  resetFilter: string
  filterByStar: string
}
