import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import useCalendar from "../../store/Calendar";
import './Calendar.css'
import { createEventId } from "../../data";

const Calendar = () => {
  const { currentEvents , setCurrentEvents } = useCalendar();
  const handleEvents = async(events)=>{
    await Promise.resolve(setCurrentEvents(events))
  }

  const handleDateSelect=(selectInfo)=>{
    let title = prompt("Select a Date")
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if(title){
        calendarApi.addEvent({
            id: createEventId(),
            title,
            start:selectInfo.start,
            end: selectInfo.end,
            allDay: selectInfo.allDay
        })
    }
  }

  const handleEventClick = (clickInfo)=>{
    if(
        confirm('Are you sure u want to delete this')
    ){
        clickInfo.event.remove()
    }
  }

  return (
    <div className="calendar-container">
      <div>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next,today",
            center: "title",
            right: "dayGridMonth,dayGridWeek,dayGridDay",
          }}
          allDaySlot={false}
          initialView="timeGridWeek"
          slotDuration={"01:00:00"}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          nowIndicator={true}
          initialEvents={currentEvents}
          eventsSet = {handleEvents}
          select={handleDateSelect}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
