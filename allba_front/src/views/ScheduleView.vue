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
           

        </div>
            </div>
            </div>
         <hr class="underline">
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

.unedrline {
    width: 98%;
    margin-left: 1%;
    margin-top: 2%;
    margin-bottom: 10%;
}
</style>