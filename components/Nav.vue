<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            
            <NuxtLink :to="`/`" class="header link">
                <i class="fa-duotone fa-handshake navIcon"></i>
            </NuxtLink>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><span class="sr-only">(current)</span></a>
                    </li>
                    <NuxtLink :to="`/clients`" class="nav-item active nav-link">
                        Clients
                    </NuxtLink>
                </ul>
            </div>

        </div>
    </nav>
</template>

<style scoped>
.navIcon{
    font-size: 40px;
}

</style>