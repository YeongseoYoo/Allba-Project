<template>
<div>
    <h2 class="title">지점찾기</h2>   
    <hr class="line">
    <div class="input-group" style="width:50%; left:25%;margin-top:6.5rem; margin-bottom:1rem;" >
            <input type="text" class="form-control" placeholder="지점명을 입력하세요" aria-label="Recipient's username"
                aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
                    <button type="button" class="btn btn-outline-secondary" id="registerbtn" style="margin-bottom:6.75rem ;margin-right:25%;float:right">지점 등록하기</button>

    <hr class="line">
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped >
.title{
    font-weight:600;
    font-size:32px;
    margin-top: 48px;
    margin-left:8%;
 ;
}

.line{
    width:90%;
    margin-left:5%
}
    
</style>