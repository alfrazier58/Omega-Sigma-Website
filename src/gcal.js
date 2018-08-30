import request from 'superagent'
import moment from 'moment'

const CALENDAR_ID = 'mst.edu_7u3stm8bn7l2umuastep5fmbl0@group.calendar.google.com'
const API_KEY = 'AIzaSyAXwItxK1J9ZQkhhjtm273gSejBfBi_UCc'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&maxResults=10000`

export function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []

        JSON.parse(resp.text).items.map((event) => {
          let sTime;
          let eTime;

          if(typeof event.start !== 'undefined') {
            sTime = event.start.date || event.start.dateTime;
          }
          if(typeof event.end !== 'undefined') {
            eTime = event.end.date || event.end.dateTime;
          }

          let csTime = moment(sTime).toDate();
          let ceTime = moment(eTime).toDate();

          return events.push({
            start: csTime,
            end: ceTime,
            title: event.summary,
            description: event.description
          })
        })
        for(var event in events) {
          if(typeof events[event].title === 'undefined') {
            delete(events[event]);
          }
        }
        callback(events)
      }
    })
}