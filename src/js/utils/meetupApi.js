// this API call is getting the list of all the members putting them in an array for us to use
// by exporting the function getMembers

import fetchJsonp from 'fetch-jsonp'
import {List, Map} from 'immutable'
// maybe this is where he listing the members to the global state object?
// if that's the case it explains where the mysterious members object is coming from

const API_ROOT = 'https://api.meetup.com'
const GET_MEMBERS_URL = API_ROOT + '/copenhagenjs/events/238301512/rsvps?photo-host=public&sig_id=45273132&sig=68eff7466160d0354c7ee6e791c16c55a7e9c2bf'

export function getMembers() {
  return fetchJsonp(GET_MEMBERS_URL, {timeout: 10000})
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      let members = []

      for(let result of json.data) {
        if(result.member.photo) {
          members.push(Map({
            id: result.member.id,
            name: result.member.name,
            photo_url: result.member.photo.photo_link
          }))
        }
      }

      return List(members)
    })
}