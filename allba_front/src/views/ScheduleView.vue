<template lang="">
    <div>
    <h2 class="title">스케쥴링</h2>
    
    <hr class="line">

   <div class="p-4 mt-5" >
        <div class="row g-1">
   
            <div class="row">
                <div class="col-sm-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title" style="">눈송행복점</h5>
                            <p class="card-text" >12/13</p>
                            <a href="#" class="btn btn-light">참가요청</a>
    
                        </div>
                    </div>
                </div>           
          

                 <div class="col-sm-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">눈송행복점</h5>
                            <p class="card-text; my-1">12/13</p>
                            <a href="#" class="btn btn-light">참가요청</a>
            
                        </div>
                    </div>
                </div>
   

                <div class="col-sm-4 col-lg-3">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">눈송행복점</h5>
                            <p class="card-text; my-1">12/13</p>
                            <a href="#" class="btn btn-light">참가요청</a>
                        </div>
                    </div>
                </div>

                                <div class="col-sm-4 col-lg-3">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">눈송행복점</h5>
                                            <p class="card-text; my-1">12/13</p>
                                            <a href="#" class="btn btn-light">참가요청</a>
                                        </div>
                                    </div>
                                </div>
                   <div class="d-flex flex-row-reverse gap-2 mt-4">
            <router-link to="/room"><button type="button" class="btn btn-warning">
                대타 신청하기
            </button></router-link>
        </div>

        </div>
            </div>
            </div>
         <hr class="underline">
          <div class='demo-app'>
    <div class='demo-app-sidebar'>
      <div class='demo-app-sidebar-section'>
        <h2>Instructions</h2>
        <ul>
          <li>Select dates and you will be prompted to create a new event</li>
          <li>Drag, drop, and resize events</li>
          <li>Click an event to delete it</li>
        </ul>
      </div>
      <div class='demo-app-sidebar-section'>
        <label>
          <input
            type='checkbox'
            :checked='calendarOptions.weekends'
            @change='handleWeekendsToggle'
          />
          toggle weekends
        </label>
      </div>
      <div class='demo-app-sidebar-section'>
        <h2>All Events ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for='event in currentEvents' :key='event.id'>
            <b>{{ event.startStr }}</b>
            <i>{{ event.title }}</i>
          </li>
        </ul>
      </div>
    </div>
    <div class='demo-app-main'>
      <FullCalendar
        class='demo-app-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
    </div>
  </div>
        
    </div>
</template>
<script>


import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
        /* you can update a remote database when these fire:
        eventAdd:
        eventChange:
        eventRemove:
        */
      },
      currentEvents: []
    }
  },
  methods: {
    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
    },
    handleDateSelect(selectInfo) {
      let title = prompt('Please enter a new title for your event')
      let calendarApi = selectInfo.view.calendar
      calendarApi.unselect() // clear date selection
      if (title) {
        calendarApi.addEvent({
          id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },
    handleEventClick(clickInfo) {
      if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },
    handleEvents(events) {
      this.currentEvents = events
    }
  }
}
</script>
<style scoped>
.title {
    font-weight: 600;
    font-size: 32px;
    margin-top: 48px;
    margin-left: 8%;
}

.line {
    width: 90%;
    margin-left: 5%
}



.unedrline{
    width:98%;
    margin-left:1%;
    margin-top:2%;

    margin-bottom:10%;
}

h2 {
  margin: 0;
  font-size: 16px;
}
ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}
li {
  margin: 1.5em 0;
  padding: 0;
}
b { /* used for event dates/times */
  margin-right: 3px;
}
.demo-app {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}
.demo-app-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}
.demo-app-sidebar-section {
  padding: 2em;
}
.demo-app-main {
  flex-grow: 1;
  padding: 3em;
}
.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}
</style>