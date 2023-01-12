<template lang="">
    <div>
        <full-calendar :events="fcEvents" lang="en"></full-calendar>
        
    </div>
</template>
<script>
var demoEvents = [
    {
        title: 'Sunny Out of Office',
        start: '2023-01-25',
        end: '2023-01-28'
    }
]
export default {
    data() {
        return {
            fcEvents: demoEvents
        }
    },
    components: {
        'full-calendar': require('vue-fullcalendar')
    }
}

</script>
<style lang="">
    
</style>