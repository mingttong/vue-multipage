<template>
    <div>
        <ul>
            <li><router-link to="test1">test1</router-link></li>
            <li><router-link to="test2">test2</router-link></li>
            <li><a href="/index.html">跳转index</a></li>
        </ul>
        <router-view/>
    </div>
</template>
