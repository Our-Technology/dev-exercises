type latitude = number
type longitude = number

type Resource = {
  id?: number
  name?: string
  description?: string
  hoursText?: string
  phone?: string
  website?: string
  placeId?: string
  fullAddress: string
  location?: [latitude, longitude]
}

export default Resource