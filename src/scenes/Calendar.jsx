import { useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import { useColors } from "../hooks/useColors";

const Calendar = () => {
  const { colors } = useColors();
  // change currentEvents to [empty array] / data is just for test
  const [currentEvents, setCurrentEvents] = useState([
          {id: "123", title: "All-day event", date: "2023-04-19"},
          {id: "124", title: "All-day event", date: "2023-04-29"},
          {id: "125", title: "Timed event", date: "2023-04-23"},
         ]);

  const handleDateClick = (selected) => {
    // add mui alert here----fixIt
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
    // add mui alert here----fixIt
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box display="flex" justifyContent="space-between">
      {/* calendar sidebar */}
      <Box flex="1 1 20%" p="15px" borderRadius="4px" backgroundColor={colors.primary[400]} >
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvents.map((event) => (
            <ListItem key={event.id} sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px"}}>
              <ListItemText primary={event.title} secondary={
                <Typography>{formatDate(event.start, {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                })}</Typography>
              }/>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Calendar */}
      <Box flex="1 1 100%" m="15px" sx={{
        "& .fc .fc-toolbar .fc-toolbar-chunk:last-child":{justifySelf:"end!important"},
        "& .fc .fc-toolbar":{display:"grid!important", gridTemplateColumns:"repeat(3,1fr)"},
      }}>
        <FullCalendar
         height="75vh" 
         plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
          listPlugin
         ]} 
         headerToolbar={{
          center: "title",
          left: "dayGridMonth timeGridWeek timeGridDay listMonth", 
          right: "prev next today",
         }} 
         initialView="dayGridMonth" 
         editable={true} 
         selectable={true} 
         selectMirror={true} 
         dayMaxEvents={true} 
         select={handleDateClick} 
         eventClick={handleEventClick} 
         eventsSet={(events) => setCurrentEvents(events)} 
         initialEvents={currentEvents}
         />
      </Box>
      
    </Box>
  )
}

export default Calendar