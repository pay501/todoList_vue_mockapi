<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Loading from '../components/Loading.vue';
import { useTodoStore } from '../stores/todo';

const todoStore = useTodoStore();
const route = useRoute()
const isLoading = ref(false)
const { id } = route.params;

onMounted(async () => {
    isLoading.value = true
    await todoStore.loadTodo(id)
    isLoading.value = false
})
const updateTodo = async (todoData) => {
    isLoading.value =true
    const bodyData = {
        name: todoData.name,
        status: todoData.status
    }
    await todoStore.editTodo(bodyData, todoData.id)
    isLoading.value = false
}
</script>
<template>
    <div class="flex flex-col ml-44">
        <div>
            <input type="text" class="input input-primary h-12 w-4/6" v-model="todoStore.selectedTodo.name">
        </div>
        <div class="mt-4">
            <select v-model="todoStore.selectedTodo.status" class="select select-primary w-4/6">
                <option v-for="todo in todoStore.statuses">
                    {{ todo }}
                </option>
            </select><br />
            <button @click="updateTodo(todoStore.selectedTodo)"
                class="btn btn-success mt-4 w-4/6 text-xl text-white">submit</button>
            <br>
            <RouterLink :to="{ name: 'home' }">
                <button class="btn btn-primary mt-4 w-4/6">Back to home</button>
            </RouterLink>
            <Loading v-if="isLoading"></Loading>
        </div>
    </div>
</template>