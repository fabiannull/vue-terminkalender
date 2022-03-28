import { calendarWeekData } from './data.js';

export const store = {
  state: {
    calendarWeekData,
  },
  getActiveDay() {
    return this.state.calendarWeekData.find((day) => day.active === true);
  },
  setActiveDay(dayID) {
    this.state.calendarWeekData.map((dayObject) => {
      dayObject.id === dayID
        ? (dayObject.active = true)
        : (dayObject.active = false);
    });
  },
  storeEvent(eventTitle, eventColor) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({
      title: eventTitle,
      edit: false,
      color: eventColor,
    });
  },
  editEvent(dayId, eventTitle) {
    this.resetEditOfAllEvents();
    const dayObject = this.state.calendarWeekData.find(
      (day) => day.id === dayId
    );
    const eventObject = dayObject.events.find(
      (event) => event.title === eventTitle
    );
    eventObject.edit = true;
  },
  resetEditOfAllEvents() {
    this.state.calendarWeekData.map((dayObject) => {
      dayObject.events.map((event) => {
        event.edit = false;
      });
    });
  },
};
