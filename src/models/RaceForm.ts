export default interface RaceForm {
  distance: number
  distance_type: {
    id: string
    name: string
    short_name: string
  }
  distance_type_id: string
  track_condition: {
    id: string
    name: string
    short_name: string
  }
  track_condition_id: string
  weather: {
    id: string
    name: string
    short_name: string
    icon_uri: string
  }
  weather_id: string
  race_comment: string
  additional_data: string
  generated: number
  silk_base_url: string
  race_comment_alternative: string
}
