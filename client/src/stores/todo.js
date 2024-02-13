import axios from 'axios'
import { defineStore } from 'pinia'
const BASE_URL = "https://6558c3eee93ca47020a9b20a.mockapi.io"


export const useTodoStore = defineStore('todo',{
        state:()=>({
            List:[],
            selectedTodo:{},
            statuses:["Pending", "Doing", "Done"]
        }),
        actions:{
            async loadTodos(){
                try{
                    await axios.get(`${BASE_URL}/Todo`)
                    .then(res=>{
                        this.List = res.data
                    })
                }catch(err){
                    console.log(data)
                }
            },

            async loadTodo (id){
                try{
                    await axios.get(`${BASE_URL}/Todo/${id}`)
                        .then(res=>{
                            this.selectedTodo = res.data
                        })
                }catch(err){
                    console.log(err)
                }
            },
            async addTodo(todoText){
                const bodyData ={
                    name:todoText,
                    status:"Pending"
                }
                await axios.post(`${BASE_URL}/Todo/`,bodyData)
            },
            async editTodo(todoData, id){
                try{
                    await axios.put(`${BASE_URL}/Todo/${id}`,todoData)
                }catch(err){
                    console.log(err)
                }
            },
            async removeTodo(id){
                try{
                    await axios.delete(`${BASE_URL}/Todo/${id}`)
                }catch(err){
                    console.log(err)
                }
            }
        }
    }
)
