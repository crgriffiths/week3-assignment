

### Component Tree

- Listing
  - title: string
  - houseType: string
  - image: string (src URL)
  - Location: [Object] shape({
    - city: string
    - country: string
  })
  - payment: [object] shape({
    - cost: number
    - description: string
  })
  host: [object] shape({
    - name: string
    - isSuperhost: bool
  })
  rating: [object] shape ({
    - stars: number
    - reviews: number
  })