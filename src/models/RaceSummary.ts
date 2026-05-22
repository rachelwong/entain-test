import type RaceForm from "./RaceForm"

export default interface RaceSummary {
  race_id: string
  race_name: string
  race_number: number
  meeting_id: string
  meeting_name: string
  category_id: string
  advertised_start: {
    seconds: number
  }
  race_form: RaceForm
  venue_id: string
  venue_name: string
  venue_state: string
  venue_country: string
  // display_start_time?: string
}

