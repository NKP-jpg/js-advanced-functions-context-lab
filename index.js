/* Your Code Here */
const createEmployeeRecord = (str1, str2, str3, num) => {

    firstName: str1
    familyName: str2
    title: str3
    payPerHour: num


}

const createEmployeeRecords = () => {

}

const createTimeInEvents = () => {

}

const createTimeInEvent = () => {

}

const createTimeOutEvent = () => {

}

const hoursWorkedOnDate = () => {

}

const wagesEarnedOnDate = () => {

}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


const findEmployeeByFirstName = () => {

}

const calculatePayroll = () => {

}