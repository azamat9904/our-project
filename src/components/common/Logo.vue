<template>
    <router-link to="/" class="logo">
        <div class="logo__icon">
            <img :src="logo" alt="logo">
        </div>
        <div class="logo__text">
            Cyber <span>Security</span>
        </div>
    </router-link>
</template>
<script>
    import logo from '@/assets/icons/logo.svg';

    export default {
        data(){
            return {
                logo
            }
        }
    }
</script>
<style lang="scss">
    .logo{
        display: flex;
        align-items: center;
        text-decoration: none;

        &__icon{
            width: 45px;
            height: 45px;
            margin-right: 10px;

            img{
               width: 100%;
               height: 100%;
               display: block;
               object-fit: cover;
            }
        }

        &__text{
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            text-transform: uppercase;
            color: #FFFFFF;
            transition: .3s all;

            span{
                color: #9343F9;
            }

            &:hover{
              color: darken(#fff, 8%);
              
              span{
                color: darken( #9343F9, 8%);
              }
            }
        }
    }
</style>
