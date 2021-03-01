<template>
    <header class="header">
       <div class="header__container container">
           <div class="header__content">
                 <div class="header__left">
                    <Logo />
                </div>
                <div class="header__right">
                    
                </div>
            </div>
       </div>
    </header>
</template>
<script>
    import Logo from './Logo';

    export default {
        components: {
            Logo
        }
    }
</script>
<style lang="scss">
    .header{
        height: 68px;
        background: #201C2B;
        display: flex;
        align-items: center;
    }
</style>
