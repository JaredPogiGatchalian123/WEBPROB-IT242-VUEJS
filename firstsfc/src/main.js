// main.js
const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile)
app.component('comment-form', CommentForm) // Move this up
app.component('comment', Comment)           // Move this up

app.mount('#app') // This MUST be last