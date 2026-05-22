import type RaceSummary from "./RaceSummary"

export interface RacesResponse {
  next_to_go_ids: string[]
  race_summaries: Record<string, RaceSummary>
}

