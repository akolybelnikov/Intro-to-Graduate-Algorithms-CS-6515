/**
 * 6.2. You are going on a long trip. You start on the road at mile post 0. Along the way there are n
hotels, at mile posts a1 < a2 < · · · < an, where each ai is measured from the starting point. The
only places you are allowed to stop are at these hotels, but you can choose which of the hotels
you stop at. You must stop at the final hotel (at distance an), which is your destination.
You’d ideally like to travel 200 miles a day, but this may not be possible (depending on the spacing
of the hotels). If you travel x miles during a day, the penalty for that day is (200 − x) to the power of 2.
You want to plan your trip so as to minimize the total penalty—that is, the sum, over all travel days, of the
daily penalties. Give an efficient algorithm that determines the optimal sequence of hotels at which to stop 
*/

let hotels = [40, 80, 90, 200, 250, 450, 680, 710, 720, 950, 1000, 1080, 1200, 1480]

function penalty(arr) {
  let start = 0
  let stops = []
  for (let i = 0; i < arr.length; i++) {
    if (Math.pow((start + 200) - arr[i-1], 2) < Math.pow((start + 200) - arr[i], 2)) {
        stops.push(arr[i-1])
        start = arr[i-1]
    }
  }
  console.log(stops)
}
penalty(hotel)