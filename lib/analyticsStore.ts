let events: any[] = []

export function addEvent(event: any) {
  events.push(event)
  if (events.length > 1000) {
    events = events.slice(events.length - 1000)
  }
}

export function getEvents() {
  return events
}
