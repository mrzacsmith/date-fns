import {
  compareAsc,
  format,
  addWeeks,
  isMonday,
  isFriday,
  previousFriday,
} from 'date-fns'

const dateTest = format(new Date(2022, 3, 4), 'yyyy-MM-dd')
console.log(dateTest)

const dates = [
  new Date(1990, 3, 4),
  new Date(1975, 5, 1),
  new Date(2022, 6, 24),
]

// dates.forEach((date) => console.log(addWeeks(date, 2)))
const start = new Date(2022, 6, 25)

const wks = addWeeks(start, 52)
const end = previousFriday(wks)

const startF = format(start, 'MM/dd/yyyy')
const endF = format(end, 'MM/dd/yyyy')

console.log(
  `\n${startF}: monday ${isMonday(start)}\n---\n${endF}: friday ${isFriday(
    end
  )}\n`
)
console.log(`RENDER DATES: ${startF} -  ${endF}`)
