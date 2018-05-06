<template>
<div class="col-md-2 sidebar">
    <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#">Main</a></li>
        <li><router-link to="/user/profile">Profile</router-link></li>
        <li><router-link to="/contact">Contact Us</router-link></li>
        <li class="active"><a href="#">Settings</a></li>
    </ul>
</div>
</template>
<script>
export default {
}
</script>
