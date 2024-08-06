import type { MessageState } from '@/types';
import {defineStore} from 'pinia'

export const useMessageStore = defineStore('message',{
    state:():MessageState=>({
        message:''
    }),
  actions:{
    updateMessage(updateMessage:string):void{
        this.message = updateMessage
    },
    resetMessage():void{
        this.message = ''
    }
  }
})