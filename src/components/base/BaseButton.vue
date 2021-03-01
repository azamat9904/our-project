<template>
    <component :is="tag" v-bind="$attrs" class="btn">
        <slot />
    </component>
</template>
<script>
    export default {
        inheritAttrs: false,
        props: {
            tag: {
                type: String,
                default: 'button'
            }
        }
    }
</script>
<style scoped lang="scss">
    .btn{
        background: linear-gradient(96.94deg, #FD9A05 0%, #7510F4 100%);
        border-radius: 5px;
        padding: 8px 30px;
        font-family: Open Sans;
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
        text-transform: uppercase;
        color: #FFFFFF;
        border: none;
        outline: none;
        cursor: pointer;
        transition: .3s all;
         opacity: 1;

         &:hover{
             opacity: .95;
        }

        &:disabled, &:disabled:hover{
            background: linear-gradient(135deg,#fd9a05ab,#7710f4c0);
        }
    }
</style>