<template>

    <div class="main">
        <div class="container">
            <h1 class="logo">Login</h1>
            <input type="text" placeholder="ID" id="id" class="account">
            <input type="password" placeholder="Password" id="password" class="account">
            <button id="login" class="account">login</button>

            <i class="fa-sharp fa-solid fa-right-from-bracket"></i><span>회원가입</span>


        </div>
    </div>

</template>

<script>

</script>

<style scoped>
.main {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-bottom: 1px solid lightgrey;
}
.container{
    margin-left:35%;
    width: 50%;
    margin-bottom:20%;
}
.logo {

    margin-top:18%;
    margin-bottom:20px;
    font-size:24px;
    justify-content: center;
}


#login {
    width: 50%;
    left:25%;
    background-color: rgb(182, 165, 94);
    border-color: transparent;
    color: white;
}

.account {
    width:50%;
    display: block;
    margin-bottom: 3px;
    padding: 3px;
    border: 1px solid lightgray;
    border-radius: 3px;
}

#alert {
    border-color: transparent;
}


.fa-sharp{
    font-size:12px;
}

</style>