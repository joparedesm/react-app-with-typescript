
import { Sub, SubResponseFromApi } from '../types'

export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSub)
}

const fetchSubs = async (): Promise<SubResponseFromApi> => {
    return await fetch('https://fakeUrl/subs').then( (res) => res.json())
  }

const mapFromApiToSub = (apiResponse: SubResponseFromApi): Array<Sub> => {
    return apiResponse.map( (subFromApi) => {
      const { 
        nick, 
        months: subMonths, 
        profileUrl: avatar, 
        description } = subFromApi;
        
        return { nick, description, subMonths, avatar }
    })
  }